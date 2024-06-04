import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Loggedout from './views/loggedout'
import Registerstep1 from './views/registerstep1'
import Login from './views/login'
import Registerstep2 from './views/registerstep2'
import Discoveroverflowbehavior from './views/discoveroverflowbehavior'
import Search from './views/search'
import GymStatistics from './views/gym-statistics'
import MyInfections from './views/my-infections'
import ScanResultspass from './views/scan-resultspass'
import ScanResultsfail from './views/scan-resultsfail'
import MyInfections1 from './views/my-infections1'
import MyInfections3 from './views/my-infections3'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Loggedout} exact path="/" />
        <Route component={Registerstep1} exact path="/registerstep1" />
        <Route component={Login} exact path="/login" />
        <Route component={Registerstep2} exact path="/registerstep2" />
        <Route
          component={Discoveroverflowbehavior}
          exact
          path="/scan"
        />
        <Route component={Search} exact path="/search" />
        <Route component={GymStatistics} exact path="/gym-statistics" />
        <Route component={MyInfections} exact path="/my-infections" />
        <Route component={ScanResultspass} exact path="/scan-resultspass" />
        <Route component={ScanResultsfail} exact path="/scan-resultsfail" />
        <Route component={MyInfections1} exact path="/my-infections1" />
        <Route component={MyInfections3} exact path="/my-infections3" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
