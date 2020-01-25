package io.quarkus.workshop.superheroes.load;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Random;
import java.util.function.Supplier;

public class WeightedRandomResult<T> implements Supplier<T> {

    private final Random random = new Random();
    private final List<T> results = new ArrayList<>();

    public WeightedRandomResult(final Collection<T> results) {
        this.results.addAll(results);
    }

    public T get() {
        return this.results.get(random.nextInt(this.results.size()));
    }

}
