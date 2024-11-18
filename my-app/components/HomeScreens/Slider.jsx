import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
// import {db} from "../../configs/FirebaseConfig"
// import { getDocs,collection,query } from 'firebase/firestore'
// import firestore from '@react-native-firebase/firestore';
import {data} from "../../constants/Constdata"

export default function Slider() {

    //  console.log("===data===",data)

 
  return (
    <View>
      <Text>Slider</Text>
    </View>
  )
}

   //   useEffect(() =>{
    //     // getSliderList()
    //   },[])
    // const getSliderList = async() =>{
    //      const qdata = query(collection(db,'Slider'))
    //      const querySnapshot = await getDocs(q)
    //      querySnapshot.forEach((doc) =>{
    //         console.log("==data==",doc.data())
    //      })
    // }

    // const getSliderList = async () => {
    //     try {
    //       // Fetch the "Slider" collection
    //       const querySnapshot = await firestore().collection('Slider').get();
    
    //       // Log the data
    //       querySnapshot.forEach(doc => {
    //         console.log('==data==', doc.id, doc.data());
    //       });
    //     } catch (error) {
    //       console.error('Error fetching slider data:', error);
    //     }
    //   };
