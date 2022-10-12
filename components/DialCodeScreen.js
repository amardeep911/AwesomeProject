import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useContext, useState } from "react";
import Data from "../Data/dummy_data";
import { DialCodeContext } from "../Store/context";
import { SafeAreaView } from "react-native-safe-area-context";

console.log(Data);

const DialCodeScreen = () => {
  let mappedArray = Data;
  const [text, setText] = useState("");
  const ctx = useContext(DialCodeContext);
  mappedArray = Data.filter((item) =>
    item.name.toLowerCase().includes(text.toLowerCase())
  );
  console.log(mappedArray);
  function renderComponent({ item }) {
    return (
      <TouchableOpacity
        key={item.code}
        onPress={() => {
          ctx.updateDial(item.dial_code);
        }}
      >
        <View>
          <Text>
            {item.name} <Text>({`${item.dial_code}`}) </Text>
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <SafeAreaView className="m-4">
      <View className="bg-slate-200 p-2 w-full">
        <TextInput
          placeholder="Search"
          className="text-xl"
          onChangeText={setText}
        />
      </View>
      <FlatList
        data={mappedArray}
        renderItem={renderComponent}
        keyExtractor={(item) => item.code}
      />
    </SafeAreaView>
  );
};
export default DialCodeScreen;
