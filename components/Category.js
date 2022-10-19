import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useState } from "react";
import React from "react";
import { useLayoutEffect } from "react";

function Category() {
  const [data, setData] = useState([]);
  const [span, setSpan] = useState([]);

  useLayoutEffect(() => {
    fetch("https://apiv2.orbiting.in/api/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        const Arr = [];
        const DATA = res.data;

        DATA.forEach((item) => {
          Arr.push({
            id: item.id,
            name: item.attributes.name,
            isSelected: false,
          });
        });

        setData(Arr);
      })
      .catch(console.error);
  }, []);

  function selectionHandler(ind) {
    let ga = data.map((item, index) => {
      if (ind === index) {
        item.isSelected = !item.isSelected;
      }
      return item;
    });
    setData(ga);
    const width = ga.filter((item) => item.isSelected === true);
    setSpan(width);
  }

  function renderComponent({ item, index }) {
    return (
      <TouchableOpacity onPress={() => selectionHandler(index)}>
        <View>
          <View className="mt-2  mr-2 overflow-hidden  w-40 h-40 p-4-5 rounded-lg">
            <View
              className="  flex-1 bg-slate-500 text-center justify-center  "
              style={{
                backgroundColor:
                  item.isSelected === true ? "#ffff00" : "#D3D3D3",
              }}
            >
              <Text className="text-center text-2xl font-bold ">
                {item.name}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  let w = span.length * 1;
  console.log(span);
  const classes =
    `bg-slate-500` + (w ? (w >= 3 ? ` w-full` : ` w-${w}/3`) : ` w-0`) + ` h-2`;
  console.log(classes);
  return (
    <SafeAreaView className="mt-4 mx-1">
      <View className="mt-6 text-centre">
        <Text className="font-bold text-center text-black text-3xl">
          Follow any three!
        </Text>
        <Text className="font-bold text-center text-zinc text-base  ">
          Then we'll build a custom homefeed for you
        </Text>
      </View>
      {/* Render Component */}
      <View>
        <FlatList
          numColumns={2}
          data={data}
          renderItem={renderComponent}
          keyExtractor={(item) => item.id}
          className="w-full h-f/5 p-3 flex-row flex-wrap"
        />
      </View>
      <View className="w-full">
        <View className={classes}></View>
      </View>
    </SafeAreaView>
  );
}

export default Category;
