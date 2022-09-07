import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { getAllSchoolsRequest } from '../redux/slices/Schools';

const mapStateToProps = (state, props) => {
  const { data, fetching, error } = state.school;

  return { data, fetching, error };
};

const mapDispatchToProps = (dispatch, props) => ({
  getAllSchools: () => {
    dispatch({
      type: getAllSchoolsRequest.type,
      payload: {
        data: ['School 1', 'School 2'],
        fetching: false,
        error: false,
      },
    });
  },
});

const SchoolsView = ({ data, fetching, error, getAllSchools }) => {
  useEffect(() => {
    getAllSchools();
  }, [getAllSchools]);

  return (
    <View>
      <Text>{data}</Text>
      <Text>{fetching}</Text>
      <Text>{error}</Text>
    </View>
  );
};

const Schools = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SchoolsView);

export default Schools;