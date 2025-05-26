// App.js
import { MaterialIcons } from '@expo/vector-icons'; // or use Feather, Ionicons, etc.
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import Gallery from './components/Gallery';
import PictureViewer from './components/PictureViewer';
import Profile from './components/Profile';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === 'Gallery') {
                iconName = 'photo-library';
              } else if (route.name === 'Viewer') {
                iconName = 'image';
              } else if (route.name === 'Profile') {
                iconName = 'person';
              }

              return <MaterialIcons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#6200ee',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Gallery" component={Gallery} />
          <Tab.Screen name="Viewer" component={PictureViewer} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
