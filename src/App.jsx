import React, {Component} from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Orgs from './components/Orgs/Orgs.jsx'
import Repos from './components/Repos/Repos.jsx'
import { Container } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import {retrieveOrgs} from './actions/orgActions';
import {connect} from 'react-redux';

class App extends Component{

  render() {
    return (
    <Container>
      <Orgs/>
      <Repos/>
      <Dashboard/>
    </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    orgs: state.orgs,
    issues: state.issues,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators ({
  retrieveOrgs
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
