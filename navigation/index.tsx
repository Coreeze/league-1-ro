/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import {
  ColorSchemeName,
  ImageBackground,
  Pressable,
  View,
  StyleSheet,
} from "react-native";
import { Image, Text } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import MainFeedScreen from "../screens/MainFeedScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import FullStandings from "../components/FullStandingsComponent";

import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FullStandings"
        component={FullStandings}
        options={{
          headerShown: true,
          // title: "Tabel complet",
          headerTitle: (props) => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                style={{
                  position: "absolute",
                  width: 300,
                  height: 150,
                  left: -50,
                }}
                source={require("../assets/images/header3.png")}
                resizeMode="contain"
              />
              <Text
                style={{
                  fontFamily: "MontserratBold",
                  color: "white",
                  fontSize: 18,
                }}
              >
                Tabel complet
              </Text>
            </View>
          ),
          headerStyle: {
            backgroundColor: "#0E1C26",
          },
          headerTintColor: "#fff",
          // headerTitleStyle: {
          //   fontFamily: "MontserratBold",
          //   color: "black",
          //   fontSize: 18,
          // },
        }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="Modal"
          options={{ headerShown: false }}
          component={ModalScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="MainFeed"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        headerShown: false,
      }}
    >
      <BottomTab.Screen
        name="MainFeed"
        component={MainFeedScreen}
        options={({ navigation }: RootTabScreenProps<"MainFeed">) => ({
          title: "Actual",
          tabBarIcon: ({ color }) => (
            <Entypo name="news" size={24} color={color} />
          ),
        })}
      />
      <BottomTab.Screen
        name="Stats"
        component={TabTwoScreen}
        options={{
          title: "Statistici",
          tabBarIcon: ({ color }) => (
            <Entypo name="line-graph" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="History"
        component={TabTwoScreen}
        options={{
          title: "Istorie",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="More"
        component={TabTwoScreen}
        options={{
          title: "Mai mult",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
