package io.quarkus.workshop.superheroes.statistics;

import io.quarkus.runtime.annotations.RegisterForReflection;

@RegisterForReflection
public class Score {

    private String name;
    private int score;

    public Score() {
    }

    public Score(String name, int score) {
        this.name = name;
        this.score = score;
    }

    public Score setName(String name) {
        this.name = name;
        return this;
    }

    public Score setScore(int score) {
        this.score = score;
        return this;
    }

    public String getName() {
        return name;
    }

    public int getScore() {
        return score;
    }

    @Override
    public String toString() {
        return "Score{" +
            "name='" + name + '\'' +
            ", score=" + score +
            '}';
    }

}
