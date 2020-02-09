package io.quarkus.workshop.superheroes.hero;

import io.quarkus.panache.common.Page;
import io.quarkus.panache.common.Sort;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.ws.rs.DefaultValue;
import javax.ws.rs.QueryParam;

public final class HeroPaging {

    @QueryParam("page")
    @DefaultValue("1")
    @Min(1)
    private int page;

    @QueryParam("limit")
    @DefaultValue("10")
    @Min(10)
    private int limit;

    @QueryParam("sort")
    @NotEmpty
    private String sort;

    @QueryParam("direction")
    @NotNull
    private Sort.Direction direction;

    public HeroPaging() {
    }

    public void setPage(int page) {
        this.page = page;
    }

    public void setLimit(int limit) {
        this.limit = limit;
    }

    public void setSort(String sort) {
        this.sort = sort;
    }

    public void setDirection(Sort.Direction direction) {
        this.direction = direction;
    }

    public Sort sorting() {
        return Sort.by(sort, direction);
    }

    public Page page() {
        return Page.of(page, limit);
    }

    @Override
    public String toString() {
        return "HeroPaging{" +
            "page=" + page +
            ", limit=" + limit +
            ", sort='" + sort + '\'' +
            ", direction='" + direction + '\'' +
            '}';
    }

}
