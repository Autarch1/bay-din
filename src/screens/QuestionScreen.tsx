/* eslint-disable react-native/no-inline-styles */
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { FC, useState } from 'react';
import Data from '../data.json';
import { RootStackScreenProps } from '../navigations/type';
import { useNavigation } from '@react-navigation/native';
import QuestionSearch from '../components/QuestionSearch';

type RenderItem = {
  item: {
    questionNo: number;
    questionName: string;
  };
};

type Props = RootStackScreenProps<'QuestionScreen'>;

type Navigation = Props['navigation'];

const QuestionListItem: FC<RenderItem> = ({ item }) => {

  const navigation = useNavigation<Navigation>();
  const handleToNumberListScreen = () => {
    return navigation.navigate('NumberListScreen', {
      questionId: item.questionNo,
    });
  };
  return (
    <TouchableOpacity
      onPress={handleToNumberListScreen}
      style={{ paddingVertical: 10, borderWidth: 1 }}>
      <Text style={{
        borderWidth: 1,
        flexDirection: 'row',
        gap: 20,
        padding: 10,
        margin: 10,
        borderRadius: 20,
        borderColor: 'black',
        backgroundColor: 'black',
      }}> {item.questionName}</Text>
    </TouchableOpacity>
  );
};

const QuestionScreen = () => {
  const { questions } = Data;
  const [filterQuestions, setFilterQuestions] = useState(questions);
  const handleSearch = (searchText: string) => {
    // Filter questions based on the search text
    const filtered = questions.filter((question) =>
      question.questionName.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilterQuestions(filtered);
  };
  return (

    <>

      <QuestionSearch handleSearch={handleSearch} />
      <View style={{ flex: 1, backgroundColor: "black" }}>
        <FlatList
          data={filterQuestions}
          keyExtractor={item => item.questionNo.toString()}
          renderItem={({ item }) => <QuestionListItem item={item} />}
          // eslint-disable-next-line react/no-unstable-nested-components
          ItemSeparatorComponent={() => <View style={{ marginVertical: 16 }} />}
        />
      </View>

    </>
  );
};

export default QuestionScreen;
