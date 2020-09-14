import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { NotFoundPages } from './pages/NotFoundPages';
import Layout from './componens/layout/Layout';
import routes from './routes';
import Spinner from './componens/spinner/Spinner';

function App() {
  return (
    <Layout>
      <Suspense fallback={<Spinner />}>
        <Switch>
          {routes.map(({ name, exact, path, component: Component }) => {
            console.log(path);
            return (
              <Route
                key={name}
                path={path}
                exact={exact}
                render={props => <Component {...props} />}
              />
            );
          })}
          <Route component={NotFoundPages} />
        </Switch>
      </Suspense>
    </Layout>
  );
}
export default App;
