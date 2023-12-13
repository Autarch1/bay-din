/* eslint-disable react-native/no-inline-styles */
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { RootStackScreenProps } from '../navigations/type';
import Data from '../data.json';


const numberList = Data.numberList;

interface Props extends RootStackScreenProps<'NumberListScreen'> { }

const nums : { [key: string]: number } = {
  '၁': 1,
  '၂': 2,
  '၃': 3,
  '၄': 4,
  '၅': 5,
  '၆': 6,
  '၇': 7,
  '၈': 8,
  '၉': 9,
  '၁၀': 10,
};

function mm2en(num : string) : number  {
  return nums[num]
}

const NumberListScreen = ({ navigation, route }: Props) => {
  const handleSelectedAnswerNumber = (num: number) => {
    const questionNumber: number = route.params.questionId;

    return navigation.navigate('AnswerScreen', {
      questionId: questionNumber,
      itemNumber: num,
    });
    };
  
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View>
        <Text style={{
          fontSize: 15,
          fontWeight: 'bold',
          color: 'black',
          marginHorizontal: 20,
          marginVertical: 20,
        }}>
             {Data.questions[route.params.questionId - 1].questionName}
          </Text>
      </View>
      <FlatList
        ListFooterComponent={() => {
          return (
            <TouchableOpacity onPress={() => {
              navigation.canGoBack() && navigation.goBack();
              
            }}
              style={{
              padding: 20,
              marginTop: 20,
              backgroundColor: 'blue',
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text>Go back</Text>
            </TouchableOpacity>
          )
        }}
        data={Data.numberList}
        contentContainerStyle={{
          justifyContent: 'center',
          backgroundColor: 'white',
        }}
        style={{ backgroundColor: 'white' }}
        numColumns={9}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleSelectedAnswerNumber(mm2en(item))} // handleSelectedAnswerNumber(item)
            style={{
              width: 40,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#964B00',
              borderColor: 'black',
              borderWidth: 1,
              gap: 10,
            }}>
            <Text style={{ fontSize: 20, color: '#fff', textAlign: 'center' }}>
              {item}
            </Text>  
            
            
          </TouchableOpacity>
          
                  
        )}

      
      />

   
    </View>
  );
};

export default NumberListScreen;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const styles = StyleSheet.create({});
