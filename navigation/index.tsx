/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { Entypo, FontAwesome, Fontisto } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, View } from "react-native";
import { Image, Text } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import MainFeedScreen from "../screens/MainFeedScreen";
import MoreOptionsScreen from "../screens/MoreOptionsScreen";
import FullStandings from "../components/FullStandingsComponent";

import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import HistoryScreen from "../screens/HistoryScreen";
import StatsScreen from "../screens/StatsScreen";

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
                  width: 330,
                  height: 60,
                }}
                source={require("../assets/images/header5.png")}
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
          tabBarIcon: ({ color, focused }) => (
            <Entypo
              name="news"
              size={24}
              color={focused ? "#E2597D" : "grey"}
            />
          ),
          tabBarLabelStyle: {
            color: "#465775",
          },
        })}
      />
      <BottomTab.Screen
        name="Stats"
        component={StatsScreen}
        options={{
          title: "Statistici",
          tabBarIcon: ({ color, focused }) => (
            <Entypo
              name="line-graph"
              size={24}
              color={focused ? "#E2597D" : "grey"}
            />
          ),
          tabBarLabelStyle: {
            color: "#465775",
          },
        }}
      />
      <BottomTab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          title: "Istorie",
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome
              name="folder-open-o"
              size={24}
              color={focused ? "#E2597D" : "grey"}
            />
          ),
          tabBarLabelStyle: {
            color: "#465775",
          },
        }}
      />
      <BottomTab.Screen
        name="More"
        component={MoreOptionsScreen}
        options={{
          title: "Mai mult",
          tabBarIcon: ({ color, focused }) => (
            <Fontisto
              name="more-v-a"
              size={24}
              color={focused ? "#E2597D" : "grey"}
            />
          ),
          tabBarLabelStyle: {
            color: "#465775",
          },
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
