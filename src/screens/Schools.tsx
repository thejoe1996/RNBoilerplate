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
    dispatch(
      getAllSchoolsRequest({
        data: ['Test'],
      }),
    );
  }, [dispatch]);

  return (
    <View>
      <Text>{data}</Text>
      <Text>{fetching}</Text>
      <Text>{error}</Text>
    </View>
  );
};

export default Schools;
