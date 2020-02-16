import * as React from 'react';
import { ErrorComponentsState } from 'piral';
import { Error } from "./error";

export const errors: Partial<ErrorComponentsState> = {
  menu: () => <span />,
  extension: () => <div />,
  feed: ({ error }) => (
    <Error title="Data Unavailable"
           image={require('../images/error.svg')}
           description="The demanded data has not been found. Please contact support to resolve this issue."
           error={error} />
  ),
  loading: () => (
    <Error title="Something Went Wrong"
           image={require('../images/error.svg')}
           description="An error occured during the loading process. Try refreshing or come back later." />
  ),
  not_found: () => (
    <Error title="Page Not Found"
           image={require('../images/not-found.svg')}
           description="The provided URL does not map to a page. Please contact support to resolve this issue." />
  ),
  page: () => (
    <Error title="Page Crashed"
           image={require('../images/error.svg')}
           description="Sorry for the inconvenience. We try to resolve the issue as soon as possible." />
  ),
  modal: ({ onClose }) => (
    <Error title="Dialog Crashed"
           image={require('../images/error.svg')}
           description="Sorry for the inconvenience. We try to resolve the issue as soon as possible."
           onClick={onClose}/>
  ),
  tile: () => (
    <Error title="Tile Crashed" description="Sorry for the inconvenience."/>
  ),
  unknown: () => (
    <Error title="Unknown Error" image={require('../images/error.svg')} description="An unknown error occured." />
  ),
};
