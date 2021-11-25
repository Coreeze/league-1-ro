/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  FullStandings: undefined;
  History: undefined;
  MoreFixtures: undefined;
  CompletedFixtures: undefined;
  PlayersList: undefined;
  TeamsList: undefined;
  TeamDetails: undefined;
  MoreNews: undefined;
  Chat: undefined;
  SignUp: undefined;
  SignIn: undefined;
  Confidentiality: undefined;
  Terms: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  MainFeed: undefined;
  Chat: undefined;
  History: undefined;
  More: undefined;
  NewPost: undefined;
  Communities: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type UserType = {
  id: string;
  name: string;
  username: string;
  description: string;
  image: string;
};

export type ShortPostType = {
  _id: String;
  user: UserType;
  createdAt: string;
  content: string;
  image?: string;
  noOfLikes: number;
  fan: string;
};
