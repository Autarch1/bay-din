import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackPramrsList = {
  QuestionScreen: undefined;
  NumberListScreen: {
    questionId: number;

  };
  AnswerScreen: {
    questionId: number;
    itemNumber: number;
  } | undefined;
};

export type RootStackScreenProps<T extends keyof RootStackPramrsList> =
  NativeStackScreenProps<RootStackPramrsList, T>;

// import { CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native";
// import { NativeStackScreenProps } from "@react-navigation/native-stack";

// export type RootStackPramrsList = {
//     HomeScreen: undefined;
//     AboutScreen?: {
//       name: string
//       age: number
//       address?: string
//     } | undefined;
//     AuthScreen: NavigatorScreenParams<AuthStackParamsList>
//   };

// export type AuthStackParamsList = {
//   LoginEmailScreen: undefined;
//   LoginPasswordScreen: undefined;
//   RegisterEmailScreen: undefined;
//   RegisterPasswordScreen: undefined;
// }

// export type RootStackScreenProps<K extends keyof RootStackPramrsList> = NativeStackScreenProps<RootStackPramrsList, K>

// export type SignleAuthScreenProps<T extends keyof AuthStackParamsList> = NativeStackScreenProps<AuthStackParamsList, T>

// export type AuthScreensProps<T extends keyof AuthStackParamsList> = CompositeScreenProps<SignleAuthScreenProps<T>, RootStackScreenProps<keyof RootStackPramrsList>>
// // export type AuthScreenProps = NativeStackScreenProps<RootStackPramrsList, 'AboutScreen'>

// // export type LoginEmailScreenProps = CompositeScreenProps<NativeStackScreenProps<AuthStackParamsList, 'LoginEmailScreen'>, AuthScreenProps>

// // export type LoginEmailScreenProps = NativeStackScreenProps<AuthStackParamsList, 'LoginEmailScreen'>
