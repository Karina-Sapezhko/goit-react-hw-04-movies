import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import {
  LinkDetails,
  LinkDetailsActive,
  itemDetails,
} from './ItemLinkDetails.module.css';

const ItemLinkDetails = ({ match, name, component, locationState }) => {
  return (
    <>
      <li className={itemDetails}>
        <NavLink
          className={LinkDetails}
          activeClassName={LinkDetailsActive}
          to={{
            pathname: `${match.url}/${name}`,
            state: { from: locationState },
          }}
        >
          {name}
        </NavLink>
      </li>
      <Route path={`${match.path}/${name}`} component={component} />
    </>
  );
};

export default withRouter(ItemLinkDetails);
