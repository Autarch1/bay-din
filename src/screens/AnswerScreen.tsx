import React from 'react';

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DATA from '../data.json';
import { RootStackScreenProps } from '../navigations/type';


import {FC} from 'react';

const answers = DATA.answers;

type Props = RootStackScreenProps<'AnswerScreen'>;

const AnswerScreen: FC<Props> = ({navigation, route}) => {
  const answer = answers.find(
    answ =>
      answ.answerNo === route.params?.itemNumber
      &&
      answ.questionNo === route.params?.questionId,
  );
  console.log(route.params);
  console.log(answer);
  return (
    <View style={styles.answerContainerStyle}>
      <Text style={styles.answerStyle}>{answer?.answerResult}</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.canGoBack() && navigation.goBack();
        }}
        style={{ 
          padding: 20,
          marginTop: 20,
          backgroundColor: 'blue',
          borderRadius: 10,
        }}>
        <Text>Go back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AnswerScreen;

const styles = StyleSheet.create({
  answerStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    paddingVertical: 20,

  },
  answerContainerStyle: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});