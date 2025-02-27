import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './components/pages/landing';
import Pending from './components/pages/Pending';
import Draft from './components/pages/Draft';
import Correction from './components/pages/Correction';
import Approved from './components/pages/Approved';
import Card from './components/component/Card';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Users from './components/pages/Users';

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
        <Route exact path="/users" component={Users} />
        <Route exact path="/card/id" component={Card} />
      </Switch>
    </Router>
  );
}

export default App;
