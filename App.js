import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import LongImage from "./src/screens/LongImage";

const navigator = createStackNavigator({
  Search: SearchScreen,
  LongImage: LongImage
},{
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: "Find your restaurant"
  }
});

export default createAppContainer(navigator);