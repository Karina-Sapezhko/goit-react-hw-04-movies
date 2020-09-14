import { lazy } from 'react';

const HomeComponent = lazy(() =>
  import('./pages/Home' /* webpackChunkName: "home" */),
);
const MoviesPageComponent = lazy(() =>
  import('./pages/MoviesPage' /* webpackChunkName: "movies-page" */),
);
const MovieDetailsComponent = lazy(() =>
  import(
    './pages/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
  ),
);

export default [
  {
    path: '/',
    exact: true,
    name: 'home',
    component: HomeComponent,
  },
  {
    path: '/movies',
    exact: true,
    name: 'movies',
    component: MoviesPageComponent,
  },
  {
    path: '/movies/:movieId',
    exact: false,
    name: 'movie',
    component: MovieDetailsComponent,
  },
];
