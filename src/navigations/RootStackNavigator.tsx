import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackPramrsList } from './type';
import QuestionScreen from '../screens/QuestionScreen';
import NumberListScreen from '../screens/NumberListScreen';
import AnswerScreen from '../screens/AnswerScreen';

const Stack = createNativeStackNavigator<RootStackPramrsList>();

export const RootStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="QuestionScreen"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'QuestionScreen'} component={QuestionScreen} />
      <Stack.Screen name={'NumberListScreen'} component={NumberListScreen} />
      <Stack.Screen name={'AnswerScreen'} component={AnswerScreen} />
    </Stack.Navigator>
  );
};
