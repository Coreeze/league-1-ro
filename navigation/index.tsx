/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {
  AntDesign,
  Entypo,
  FontAwesome,
  Fontisto,
  Ionicons,
} from "@expo/vector-icons";
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

import Colors from "../constants/colors";
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
import StatsScreen from "../screens/ChatScreen";
import MoreFixturesComponent from "../components/MoreFixturesComponent";
import DiscussionsScreen from "../screens/ChatScreen";
import ChatScreen from "../screens/ChatScreen";
import TeamDetails from "../screens/TeamDetailsScreen";
import MoreNewsComponent from "../components/MoreNewsComponent";
import PlayersListComponent from "../components/PlayersListComponent";
import TeamsList from "../components/TeamsListComponent";
import TeamsListComponent from "../components/TeamsListComponent/TheActualList";
import constants from "../constants/colors";
import CommunitiesScreen from "../screens/DiscussionsScreen";
import NewPostScreen from "../screens/NewPostScreen";
import { MenuProvider } from "react-native-popup-menu";

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
    <MenuProvider>
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
            headerTitle: (props) => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={{
                    position: "absolute",
                    width: 330,
                    height: 60,
                  }}
                  source={require("../assets/images/header13.png")}
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
              backgroundColor: constants.headerColor,
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="MoreFixtures"
          component={MoreFixturesComponent}
          options={{
            headerShown: true,
            headerTitle: (props) => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={{
                    position: "absolute",
                    width: 330,
                    height: 60,
                  }}
                  source={require("../assets/images/header13.png")}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    fontFamily: "MontserratBold",
                    color: "white",
                    fontSize: 18,
                  }}
                >
                  Meciuri
                </Text>
              </View>
            ),
            headerStyle: {
              backgroundColor: constants.headerColor,
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="MoreNews"
          component={MoreNewsComponent}
          options={{
            headerShown: true,
            headerTitle: (props) => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={{
                    position: "absolute",
                    width: 330,
                    height: 60,
                  }}
                  source={require("../assets/images/header13.png")}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    fontFamily: "MontserratBold",
                    color: "white",
                    fontSize: 18,
                  }}
                >
                  Știri
                </Text>
              </View>
            ),
            headerStyle: {
              backgroundColor: constants.headerColor,
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="PlayersList"
          component={PlayersListComponent}
          options={{
            headerShown: true,
            headerTitle: (props) => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={{
                    position: "absolute",
                    width: 330,
                    height: 60,
                  }}
                  source={require("../assets/images/header13.png")}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    fontFamily: "MontserratBold",
                    color: "white",
                    fontSize: 18,
                  }}
                >
                  Listă jucători
                </Text>
              </View>
            ),
            headerStyle: {
              backgroundColor: constants.headerColor,
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="TeamsList"
          component={TeamsListComponent}
          options={{
            headerShown: true,
            headerTitle: (props) => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={{
                    position: "absolute",
                    width: 330,
                    height: 60,
                  }}
                  source={require("../assets/images/header13.png")}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    fontFamily: "MontserratBold",
                    color: "white",
                    fontSize: 18,
                  }}
                >
                  Listă echipe
                </Text>
              </View>
            ),
            headerStyle: {
              backgroundColor: constants.headerColor,
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="TeamDetails"
          component={TeamDetails}
          options={{
            headerShown: true,
            headerTitle: (props) => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={{
                    position: "absolute",
                    width: 330,
                    height: 60,
                  }}
                  source={require("../assets/images/header13.png")}
                  resizeMode="contain"
                />
              </View>
            ),
            headerStyle: {
              backgroundColor: constants.headerColor,
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="History"
          component={HistoryScreen}
          options={{
            headerShown: true,
            headerTitle: (props) => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={{
                    position: "absolute",
                    width: 330,
                    height: 60,
                  }}
                  source={require("../assets/images/header13.png")}
                  resizeMode="contain"
                />
              </View>
            ),
            headerStyle: {
              backgroundColor: constants.headerColor,
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Group screenOptions={{ presentation: "modal" }}>
          <Stack.Screen
            name="Modal"
            options={{ headerShown: false }}
            component={ModalScreen}
          />
        </Stack.Group>
      </Stack.Navigator>
    </MenuProvider>
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
              color={focused ? "#ff4778" : "grey"}
            />
          ),
          tabBarLabelStyle: {
            color: "#000",
          },
        })}
      />
      <BottomTab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          title: "Discutii live",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={24}
              color={focused ? "#ff4778" : "grey"}
            />
          ),
          tabBarLabelStyle: {
            color: "#000",
          },
        }}
      />
      <BottomTab.Screen
        name="NewPost"
        component={NewPostScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <AntDesign
              name="pluscircleo"
              size={39}
              color={focused ? "#ff4778" : "grey"}
            />
          ),
          tabBarLabelStyle: {
            color: "#000",
          },
          tabBarLabel: () => {
            return null;
          },
        }}
      />
      <BottomTab.Screen
        name="Communities"
        component={CommunitiesScreen}
        options={{
          title: "Comunitati",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name="people-outline"
              size={24}
              color={focused ? "#ff4778" : "grey"}
            />
          ),
          tabBarLabelStyle: {
            color: "#000",
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
              color={focused ? "#ff4778" : "grey"}
            />
          ),
          tabBarLabelStyle: {
            color: "#000",
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
