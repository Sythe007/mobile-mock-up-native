import React from 'react';
// import {useDispatch} from 'react-redux';
// import {getAllMovie} from '../../store/action/movie';
// import {REACT_APP_LINK_CLOUDINARY} from '@env';
import {
  View,
  Text,
  // StyleSheet,
  TouchableOpacity,
  // Button,
  ScrollView,
  // TextInput,
  Image,
  ImageBackground,
  // RefreshControl,
  // ActivityIndicator,
  // FlatList,
} from 'react-native';

import tw from 'twrnc';

function Home(props) {

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
     <View style={[tw`flex flex-row`]}>
     <TouchableOpacity style={[tw`rounded-2xl bg-gray-300 h-20 w-50 mt-5 ml-5`]}></TouchableOpacity>
     <TouchableOpacity onPress={() => props.navigation.navigate("Profile")}><Image source={require('../../assets/logo.png')}
         style={[tw`w-20 h-20 ml-9 mt-5`]}/></TouchableOpacity>
     </View>
      <Text style={[tw `text-gray-500 text-xl ml-7 mt-1.5 font-mono font-bold`]}>EV Charging Hyundai</Text>
      <Text style={[tw `text-gray-500 text-sm ml-7 mb-5`]}>New Thinking, New Posibilities</Text>

    <View style={[tw`h-170 bg-white`]}>
       <View style={[tw`rounded-xl bg-gray-100 mt-5 ml-3 mb-1 w-83 h-41`]}>
       <Text style={[tw`text-gray-500 text-2xl font-bold bg-gray-100 mt-3 ml-5 mb-2`]}>Your Energy Consumption</Text>
        <View style={[tw`flex flex-row`]}>
        <View style={[tw`bg-gray-100 mb-2 w-1/3`]}>
         <Text style={[tw`text-gray-500 text-lg font-bold mt-5 ml-5`]}>◉ Today</Text>
         <Text style={[tw`text-gray-500 text-lg font-normal ml-7`]}><Text style={[tw`text-gray-500 text-lg font-bold`]}>5.4</Text> KwH</Text>
        </View>
        <View style={[tw`bg-gray-100 mb-2 w-1/3`]}>
         <Text style={[tw`text-gray-500 text-lg font-bold mt-5 `]}>◉ This Month</Text>
         <Text style={[tw`text-gray-500 text-lg font-normal ml-5`]}><Text style={[tw`text-gray-500 text-lg font-bold`]}>40.7</Text> KwH</Text>
        </View>
         <View style={[tw`border-l-2 border-gray-500 bg-gray-100 mb-2 ml-3`]}>
         <TouchableOpacity onPress={() => props.navigation.navigate("BarcodeScanner")}><Image style={[tw`h-17 w-17 ml-4 justify-center items-center`]} source={require('../../assets/charge.png')}/></TouchableOpacity> 
         <Text style={[tw`text-gray-500 text-xl font-semibold mt-1 ml-4 mb-1`]}>Charge</Text>
        </View>
        </View>
        </View>
        
      <Text style={[tw`text-gray-500 text-xl font-bold mt-2 ml-7`]}>Energy Consumption this Year</Text>
      <Text style={[tw`text-gray-500 text-base text-justify mt-2 mr-5 ml-7 mb-1`]}>Save your expenses by monitoring energy consumption every time you charge.</Text>
     <TouchableOpacity style={[tw`rounded-xl bg-gray-100 h-91 w-83 mt-2 ml-3`]}></TouchableOpacity>
    </View>
    </ScrollView>
    
  );
}


export default (Home);
