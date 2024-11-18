import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import {categories} from "../../constants/Constdata"
import CategoryItem from "../../components/HomeScreens/CategoryItem"
export default function Category() {

    // console.log("===catgoryyy===",categories)/


  return (
    <View>
    
      <View style={{padding:20,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:10
      }}>
      <Text style={{paddingLeft:20,
       fontSize:20,
        fontFamily:"outfit-bold",
        display:"flex",
        justifyContent:"space-between"
      }}>Category
    
      </Text>
      <Text style={{color:Colors.PRIMARY,
        fontFamily:"outfit-medium"
      }}>View All</Text>
      </View>

      {/* <FlatList 
           data={categories}
           keyExtractor={(item, index) => index.toString()} // Ensure ea
           renderItem={({item,index}) =>{
            <CategoryItem category={item}
             key={index}
            />
           }}
         /> */}
         <FlatList
  data={categories}
  showsHorizontalScrollIndicator={false}
  keyExtractor={(item, index) => index.toString()} // Ensure each item has a unique key
  horizontal={true}
   style={{marginLeft:20}}
  renderItem={({ item ,index}) => (
    <CategoryItem category={item} key={index}
     onCategoryPress={(category) =>console.log(category)}
    />
  )}
/>
    </View>
  )
}