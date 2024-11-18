import { View, Text } from 'react-native';
import Header from "../../components/HomeScreens/Header"
import Slider from "../../components/HomeScreens/Slider"
import Category from "../../components/HomeScreens/Category"


export default function home() {

  return (
    <View >
       {/* Header */}
        
        <Header />

       {/* Slider */}
       <Slider/>

       {/*  Category */}
       <Category />

       {/* Popular Business List */}
    </View>
  );
}
