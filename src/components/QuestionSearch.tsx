// QueSearch.tsx
import React, { FC } from 'react';
import { TextInput, View } from 'react-native';

type QueSearchProps = {
    handleSearch: (text: string) => void;
};

const QuestionSearch: FC<QueSearchProps> = ({ handleSearch }) => {
    return (
        <View>
            <TextInput
                placeholder='သင်သိလိုသောမေးခွန်းများအားရှာဖွေပါ'
                onChangeText={(text) => handleSearch(text)}
                style={{
                    backgroundColor: 'black',
                }}

            />
        </View>
    );
};

export default QuestionSearch;
