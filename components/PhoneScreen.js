import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as Icons from "react-native-heroicons/outline";
import React from "react";
import DialCode from "../Data/dummy_data";
console.log(DialCode);
import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { DialCodeContext } from "../Store/context";


const PhoneScreen = () => {
    const ctx = useContext(DialCodeContext);
  const navigation = useNavigation();
  return (
    <SafeAreaView className="m-5">
      <View className="mt-44">
        <Text className="text-5xl text-left font-bold ">
          What is your
          {"\n"}
          Phone number ?
        </Text>
        <Text className="font-bold text-base mt-7">
          Tap "Get Started" to get an SMS confirmation to
          {"\n"}
          help you use TREKLERS.We would like your phone
          {"\n"}
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
            />
          </View>
        </View>
      </View>
      {/*Button*/}
      <View className="mt-16 w-full">
        <TouchableOpacity
          onPress={() => navigation.navigate("OtpScreen")}
          className="bg-slate-900 p-3 rounded-md border-0"
        >
          <Text className="text-white text-xl text-center">CONTINUE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PhoneScreen;
