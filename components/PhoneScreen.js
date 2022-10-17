import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import * as Icons from "react-native-heroicons/outline";
import React from "react";
import DialCode from "../Data/dummy_data";
import {useState} from 'react'
console.log(DialCode);
import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { DialCodeContext } from "../Store/context";


const PhoneScreen = () => {
  const ctx = useContext(DialCodeContext);
  const navigation = useNavigation();
  var helper 
 function pressHandler () {
    ctx.updatePhoneNo(helper)
    navigation.navigate('OtpScreen')
  console.log(ctx.dial+ctx.phoneNo)
    fetch('https://apiv2.orbiting.in/api/auth/sms/callback',{
      method: 'POST',
      body: JSON.stringify({
        phoneNumber: `${ctx.dial}`+`${ctx.phoneNo}`
      }),
      headers: {
        'Content-Type': 'application/json',
      },

    }).then(res => res.json())
      .then(console.log)
      .catch(console.error)

  }
  
  const handler = (e) => {
    console.log(e)
    helper = +e;
  }
  
  
    
    
  
  return (
    <SafeAreaView className="m-2">
      <View className="mt-20">
        <Text className="text-5xl text-black text-left font-bold ">
          What is your Phone number?
          
        </Text>
        <Text className="font-bold text-base mt-7">
          Tap "Get Started" to get an SMS confirmation to
          help you use TREKLERS.We would like your phone
          number.
        </Text>
      </View>
      {/*Input Section*/}
      <View className="mt-8">
        <Text className="text-slate-400 font-bold items-center text-sm">
          COUNTRY CODE
        </Text>
        <View className="flex-row space-x-4 mt-2">
          <View className="border-slate-200 border-2 rounded-sm p-2">
            <TouchableOpacity onPress={()=>navigation.navigate("DialCodeScreen")} className="flex-row items-center">
              <Text className="font-bold mr-6 text-lg">+{ctx.dial}</Text>
              <View>
                <Icons.ChevronDownIcon size={20} color="#000000" />
              </View>
            </TouchableOpacity>
          </View>
          <View className="border-slate-200 border-2 rounded-sm p-2 flex-1">
            <TextInput
              className="text-lg"
              placeholder="Phone number"
              keyboardType="numeric"
              cursorColor="#000000"
              onChangeText={(e)=> handler(e)}
              
            />
          </View>
        </View>
      </View>
      {/*Button*/}
      <View className="mt-8 w-full">
        <TouchableOpacity
          onPress={pressHandler}
          className="bg-slate-900 p-3 rounded-md border-0"
        >
          
          <Text className="text-white text-xl text-center">CONTINUE</Text>
       
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PhoneScreen;
