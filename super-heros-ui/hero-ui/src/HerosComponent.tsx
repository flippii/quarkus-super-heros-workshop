import * as React from 'react';
import { PageComponentProps } from "hero-shell";
import DataTable from './components/DataTable';
import { deleteBlogPost, fetchBlogPosts } from "./actions/heroActions";

export class HerosComponent extends React.PureComponent<PageComponentProps> {

  constructor(props) {
    super(props);

    this.state = {
      heroes: [],
      currentPageNumber: 1,
      numItemsPerPage: 10,
      totalItems: 1,
      limit: 10,
      filterBy: '',
      sortBy: '',
      direction: 'asc'
    };
  }

  getBlogPosts(page, limit, filter = '', sort = '', direction = '') {
    page = page || this.state.currentPageNumber;
    limit = limit || this.state.limit;
    fetchBlogPosts(page, limit, filter, sort, direction)
      .then(data => {
        this.setState({
          heroes: data.result,
          currentPageNumber: data.currentPageNumber,
          numItemsPerPage: data.numItemsPerPage,
          totalItems: data.totalCount
        });
      });
  }

  componentDidMount() {
    this.getBlogPosts(this.state.currentPageNumber, this.state.limit);
  }

  onDelete(id) {
    deleteBlogPost(id)
      .then(data => {
        let heroes = this.state.heroes.filter(post => {
          return id !== post.id;
        });

        this.setState(state => {
          state.heroes = heroes;
          return state;
        });

      }).catch(err => {
        console.error('error', err);
      });
  }

  onPaginate(i) {
    this.setState({currentPageNumber: i});
    this.getBlogPosts(i, this.state.limit);
  }

  onSort(sortBy, direction) {
    this.setState({
      sortBy,
      direction
    });

    this.getBlogPosts(this.state.currentPageNumber, this.state.limit, this.state.filterBy, sortBy, direction);
  }

  onFilter(filterBy) {
    this.setState({ filterBy: filterBy });
    this.getBlogPosts(this.state.currentPageNumber, this.state.limit, filterBy);
  }

  onLimit(limit) {
    this.setState({ limit: limit });
    this.getBlogPosts(this.state.currentPageNumber, limit);
  }

  render() {
    let totalPages = Math.ceil(this.state.totalItems / this.state.numItemsPerPage);
    return (
      <div>
        <DataTable heroes={this.state.heroes}
                   currentPageNumber={this.state.currentPageNumber}
                   totalPages={totalPages}
                   itemsPerPage={this.state.numItemsPerPage}
                   onDelete={this.onDelete.bind(this)}
                   onPaginate={this.onPaginate.bind(this)}
                   onSort={this.onSort.bind(this)}
        />
      </div>
    );
  }

}
