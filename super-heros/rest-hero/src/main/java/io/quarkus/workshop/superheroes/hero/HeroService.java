package io.quarkus.workshop.superheroes.hero;

import io.quarkus.hibernate.orm.panache.PanacheQuery;
import io.quarkus.panache.common.Page;
import io.quarkus.panache.common.Sort;
import org.eclipse.microprofile.config.inject.ConfigProperty;

import javax.enterprise.context.ApplicationScoped;
import javax.transaction.Transactional;
import javax.validation.Valid;

import java.util.List;
import java.util.Optional;

import static javax.transaction.Transactional.TxType.REQUIRED;
import static javax.transaction.Transactional.TxType.SUPPORTS;

@ApplicationScoped
@Transactional(REQUIRED)
public class HeroService {

    @ConfigProperty(name = "level.multiplier", defaultValue="1")
    int levelMultiplier;

    @Transactional(SUPPORTS)
    public PageResult<Hero> findAllHeroes() {
        PanacheQuery<Hero> heroes = Hero.findAll(Sort.ascending("id"));

        List<Hero> result = heroes.page(Page.of(1, 10)).list();

        Long count = heroes.count();

        return new PageResult<>(result, count);
    }

    public static final class PageResult<T> {

        private List<T> result;
        private Long count;

        public PageResult(List<T> result, Long count) {
            this.result = result;
            this.count = count;
        }

        public List<T> getResult() {
            return result;
        }

        public Long getCount() {
            return count;
        }

    }

    @Transactional(SUPPORTS)
    public Optional<Hero> findHeroById(Long id) {
        return Optional.ofNullable(Hero.findById(id));
    }

    @Transactional(SUPPORTS)
    public Hero findRandomHero() {
        Hero randomHero = null;
        while (randomHero == null) {
            randomHero = Hero.findRandom();
        }
        return randomHero;
    }

    public Hero persistHero(@Valid Hero hero) {
        hero.level = hero.level * levelMultiplier;
        Hero.persist(hero);
        return hero;
    }

    public Hero updateHero(@Valid Hero hero) {
        Hero entity = Hero.findById(hero.id);
        entity.name = hero.name;
        entity.otherName = hero.otherName;
        entity.level = hero.level;
        entity.picture = hero.picture;
        entity.powers = hero.powers;
        return entity;
    }

    public void deleteHero(Long id) {
        Hero hero = Hero.findById(id);
        hero.delete();
    }

}
