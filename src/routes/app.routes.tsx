import {createNativeStackNavigator, NativeStackNavigationProp} from '@react-navigation/native-stack'
import { EditFood } from '@screens/EditFood';
import { FeedbackN } from '@screens/FeedbackN';
import { FeedbackP } from '@screens/FeedbackP';

import { Home } from '@screens/Home';
import { NewFood } from '@screens/NewFood';
import { SubHome } from '@screens/SubHome';

type AppRoutes = {
  home: undefined;
  subHome: undefined;
  newFood: undefined;
  editFood: undefined;
  feedbackP: undefined;
  feedbackN: undefined;
}

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>

const { Navigator, Screen } = createNativeStackNavigator<AppRoutes>();

export function AppRoutes() {
  return(
    <Navigator screenOptions={{headerShown: false}}>
      <Screen
        name="home"
        component={Home}
      />
      <Screen
        name="subHome"
        component={SubHome}
      />
      <Screen
        name="newFood"
        component={NewFood}
      />
      <Screen
        name="feedbackP"
        component={FeedbackP}
      />
      <Screen
        name="feedbackN"
        component={FeedbackN}
      />
      <Screen
        name="editFood"
        component={EditFood}
      />
    </Navigator>
  )
}