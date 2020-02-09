import * as React from "react";
import { Link } from 'react-router-dom';
import { Table, Button } from 'reactstrap';

export interface DataTableProps {
  heroes: Array<any>,
  totalPages: number,
  currentPageNumber: number,
  itemsPerPage: number,
  onDelete: (id: number) => void,
  onPaginate: (page: number) => void,
  onSort: (sortBy: string, direction: string) => void
}

export interface DataTableState {
  heroes: Array<any>,
  totalPages: number,
  currentPageNumber: number,
  itemsPerPage: number,
  reverse: boolean,
  titleFilter: string,
  limit: number,
  sortBy: string
}

export default class DataTable extends React.Component<DataTableProps, DataTableState> {

  constructor(props) {
    super(props);

    this.state = {
      heroes: props.heroes,
      totalPages: props.totalPages,
      currentPageNumber: props.currentPageNumber,
      itemsPerPage: props.itemsPerPage,
      reverse: false,
      titleFilter: '',
      limit: props.itemsPerPage,
      sortBy: 'asc'
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      heroes: newProps.heroes,
      totalPages: newProps.totalPages,
      currentPageNumber: newProps.currentPageNumber,
      itemsPerPage: newProps.itemsPerPage
    });
  }

  deleteHandler(i) {
    this.props.onDelete(this.props.heroes[i].id);
  };

  pageChangeHandler(i) {
    this.props.onPaginate(i);
  };

  sortingHandler(sortBy) {
    this.setState({
      sortBy: sortBy,
      reverse: !this.state.reverse
    });

    this.props.onSort(sortBy, this.state.reverse ? 'desc' : 'asc');
  }

  render() {
    const { heroes } = this.state;

    return (
      <div>
        <Table size="sm" bordered>
          <thead>
          <tr>
            <th onClick={() => this.sortingHandler('bp.id')}>id</th>
            <th>
              <span onClick={() => this.sortingHandler('bp.title')}>Title</span>
            </th>
            <th>Options</th>
          </tr>
          </thead>
          <tbody>

          {heroes && heroes.map((post, i) => {
            return (
              <tr key={post.id}>
                <td>{ post.id }</td>
                <td>{ post.title }</td>
                <td>
                  <Link to={`/posts/update/${post.id}`} className="btn btn-sm btn-default">Edit</Link>
                  <Button onClick={() => this.deleteHandler(i)} className="btn btn-danger btn-sm">Delete</Button>
                </td>
              </tr>
            );
          })}

          </tbody>
        </Table>

        <Link to="/posts/create" className="btn btn-sm btn-success">Create</Link>
      </div>
    );
  }

}
