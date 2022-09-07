import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {getAllSchoolsRequest} from '../redux/slices/Schools';
import type {RootState} from '../redux/store';

const Schools = () => {
  const {data, fetching, error} = useAppSelector((state: RootState) => {
    return state.schools;
  });
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (dispatch) {
      dispatch(
        getAllSchoolsRequest({
          data: [],
        }),
      );
    }
  }, [dispatch]);

  return (
    <View>
      {!!data &&
        data.map(school => <Text key={school.school_id}>{school.name}</Text>)}
      <Text>{fetching}</Text>
      <Text>{error}</Text>
    </View>
  );
};

export default Schools;
