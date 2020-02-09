package io.quarkus.workshop.superheroes.hero;

import io.quarkus.panache.common.Page;

import java.util.List;

public final class HeroPage {

    private final List<Hero> heroes;
    private final int page;
    private final int limit;
    private final long total;

    public HeroPage(List<Hero> heroes, Page page, Long total) {
        this.heroes = heroes;
        this.page = page.index;
        this.limit = page.size;
        this.total = total;
    }

    public List<Hero> getHeroes() {
        return heroes;
    }

    public int getPage() {
        return page;
    }

    public int getLimit() {
        return limit;
    }

    public long getTotal() {
        return total;
    }

    @Override
    public String toString() {
        return "HeroPage{" +
            "heroes=" + heroes +
            ", page=" + page +
            ", limit=" + limit +
            ", total=" + total +
            '}';
    }

    public static HeroPage of(List<Hero> heroes, Page page, Long totalCount) {
        return new HeroPage(heroes, page, totalCount);
    }

}
