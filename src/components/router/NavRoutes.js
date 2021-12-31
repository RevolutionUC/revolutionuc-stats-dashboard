import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LivePageContainer } from '../pages/LivePage';
// import YearlyPage from '../pages/YearlyPage';
// import TrendsPage from '../pages/TrendsPage';
import Navbar from '../navbar/Navbar';

const NavRoutes = function () {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={LivePageContainer}></Route>
          {/* <Route exact path="/yearly" component={YearlyPage}></Route>
          <Route exact path="/trends" component={TrendsPage}></Route> */}
        </Switch>
      </Router>
    </div>
  );
};

export default NavRoutes;
