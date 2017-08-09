import React from 'react';
import { Card, List, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProgressArc from '../ProgressArc/ProgressArc';
import './Milestone.css';

export const Milestone = ({ title, due, created, percentComplete }) => {
  function convertDate(ISOdate) {
    const date = new Date(ISOdate);
    const formatOptions = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    };

    const dateString = date.toLocaleDateString('en-US', formatOptions);

    return dateString;
  }

  function getDueDate(date) {
    if (date === null) {
      return <div />;
    }
    return (
      <div>
        <Header sub className="space-milestones">
        Date Due:
        </Header> {convertDate(date)}
      </div>
    );
  }

  return (
    <Card.Content>
      <List divided relaxed>
        <List.Item>
          <List.Content className="ui center aligned">
            <List.Header>{title}</List.Header>
            <Header sub className="space-milestones">Date Created:</Header>
            {convertDate(created)}
            {getDueDate(due)}
            <Header sub className="space-milestones">Percent Complete:</Header>
            <ProgressArc percentComplete={percentComplete} duration={2000} />
          </List.Content>
        </List.Item>
      </List>
    </Card.Content>
  );
};

export const mapStateToProps = (state, { milestoneId }) => {
  const milestone = state.milestones.milestonesById[milestoneId];
  const { title, due, created, percentComplete } = milestone;
  return {
    title,
    due,
    created,
    percentComplete,
  };
};

Milestone.propTypes = {
  title: PropTypes.string.isRequired,
  due: PropTypes.string,
  created: PropTypes.string.isRequired,
  percentComplete: PropTypes.number.isRequired,
};

Milestone.defaultProps = {
  due: undefined,
};

export default connect(
  mapStateToProps,
)(Milestone);
