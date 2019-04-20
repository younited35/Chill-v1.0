import React from 'react';
import { Platform } from 'react-native';
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import { Feather } from '@expo/vector-icons';

import MovieListScreen from './app/screens/MovieListScreen';
import ConfigurationScreen from './app/screens/ConfigurationScreen';
import MovieDetailsScreen from './app/screens/MovieDetailsScreen';
import SearchScreen from './app/screens/SearchScreen';
import SearchResultsScreen from './app/screens/SearchResultsScreen';
import WebViewScreen from './app/screens/WebViewScreen';

const TitleMovieTab = 'Home';
const TitleConfigTab = 'More';
const TitleSearchTab = 'Search';
const TitleWebView = 'Trailer';

const MoviesTab = createStackNavigator(
  {
    MovieList: {
      screen: MovieListScreen,
      navigationOptions: {
        title: TitleMovieTab,
        headerTintColor: '#ffffff',
        headerStyle: {
          backgroundColor: '#000000'
        }
      }
    },
    MovieDetails: {
      screen: MovieDetailsScreen,
      navigationOptions: {
        headerTintColor: '#ffffff',
        headerStyle: {
          backgroundColor: '#000000'
        }
      }
    },
    WebView: {
      screen: WebViewScreen,
      navigationOptions: {
        headerTintColor: '#ffffff',
        headerStyle: {
          backgroundColor: '#000000'
        },
        title: TitleWebView
      }
    }
  },
  {
    initialRouteName: 'MovieList'
  }
);

MoviesTab.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Feather name="home" size={20} color={tintColor} />
  )
};

const SearchTab = createStackNavigator(
  {
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        title: TitleSearchTab,
        headerTintColor: '#ffffff',
        headerStyle: {
          backgroundColor: '#000000'
        }
      }
    },
    SearchResults: {
      screen: SearchResultsScreen,
      navigationOptions: {
        headerTintColor: '#ffffff',
        headerStyle: {
          backgroundColor: '#000000'
        }
      }
    },
    MovieDetails: {
      screen: MovieDetailsScreen,
      navigationOptions: {
        headerTintColor: '#ffffff',
        headerStyle: {
          backgroundColor: '#000000'
        }
      }
    },
    WebView: {
      screen: WebViewScreen,
      navigationOptions: {
        headerTintColor: '#ffffff',
        headerStyle: {
          backgroundColor: '#000000'
        },
        title: TitleWebView
      }
    }
  },
  {
    initialRouteName: 'Search'
  }
);

SearchTab.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Feather name="search" size={20} color={tintColor} />
  )
};

const ConfigurationTab = createStackNavigator(
  {
    Configuration: {
      screen: ConfigurationScreen,
      navigationOptions: {
        title: TitleConfigTab,
        headerTintColor: '#ffffff',
        headerStyle: {
          backgroundColor: '#000000'
        }
      }
    }
  },
  {
    initialRouteName: 'Configuration'
  }
);

ConfigurationTab.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Feather name="menu" size={20} color={tintColor} />
  )
};

const MovieListTabBarVisible = navigation => {
  const { routes } = navigation.state;
  if (routes && routes.length > 0) {
    const route = routes[routes.length - 1];
    if (
      route.routeName === 'MovieDetails' ||
      route.routeName === 'WebView' ||
      route.routeName === 'SearchResults'
    ) {
      return false;
    }
  }
  return true;
};

const MainNavigator =
  Platform.OS === 'ios'
    ? createBottomTabNavigator(
        {
          Movie: {
            screen: MoviesTab,
            navigationOptions: ({ navigation }) => ({
              title: TitleMovieTab,
              tabBarVisible: MovieListTabBarVisible(navigation)
            })
          },
          Search: {
            screen: SearchTab,
            navigationOptions: ({ navigation }) => ({
              title: TitleSearchTab,
              tabBarVisible: MovieListTabBarVisible(navigation)
            })
          },
          Config: {
            screen: ConfigurationTab,
            navigationOptions: {
              title: TitleConfigTab
            }
          }
        },
        {
          tabBarOptions: {
            activeTintColor: '#F95F62',
            inactiveTintColor: '#8190A5',
            showIcon: true,
            labelStyle: {
              margin: 0,
              padding: 2
            },
            style: {
              backgroundColor: '#000000'
            }
          },
          animationEnabled: false,
          swipeEnabled: false
        }
      )
    : createMaterialBottomTabNavigator(
        {
          Movie: {
            screen: MoviesTab,
            navigationOptions: ({ navigation }) => ({
              title: TitleMovieTab,
              tabBarVisible: MovieListTabBarVisible(navigation)
            })
          },
          Search: {
            screen: SearchTab,
            navigationOptions: ({ navigation }) => ({
              title: TitleSearchTab,
              tabBarVisible: MovieListTabBarVisible(navigation)
            })
          },
          Config: {
            screen: ConfigurationTab,
            navigationOptions: {
              title: TitleConfigTab
            }
          }
        },
        {
          initialRouteName: 'Movie',
          activeTintColor: '#F95F62',
          inactiveTintColor: '#8190A5',
          shifting: true,
          barStyle: {
            backgroundColor: '#000000',
            paddingTop: 2,
            paddingBottom: 2
          }
        }
      );

const AppNavigator = createSwitchNavigator(
  {
    Main: MainNavigator
  },
  {
    initialRouteName: 'Main'
  }
);

export default createAppContainer(AppNavigator);
