import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './components/pages/landing';
import Pending from './components/pages/Pending';
import Draft from './components/pages/Draft';
import Correction from './components/pages/Correction';
import Approved from './components/pages/Approved';
import Card from './components/component/Card';
import Learning from './components/sidebar/Learning';
import Program from './components/sidebar/Program';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Hackathons from './components/sidebar/Hackthons';
import Impact from './components/sidebar/Impact';
import Settings from './components/sidebar/Settings';

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/pending" component={Pending} />
        <Route exact path="/draft" component={Draft} />
        <Route exact path="/correction" component={Correction} />
        <Route exact path="/approved" component={Approved} />
        <Route exact path="/learning" component={Learning} />
        <Route exact path="/program" component={Program} />
        <Route exact path="/hackthons" component={Hackathons} />
        <Route exact path="/impact" component={Impact} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/card/id" component={Card} />
      </Switch>
    </Router>
  );
}

export default App;
