import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";

function OtpScreen() {
  return (
    <SafeAreaView>
      <View className="mt-20 mx-2">
        <View>
          <Text className="text-5xl font-bold text-black ">
            Verify phone number
          </Text>
          <Text className="text-lg font-bold text-black mt-5">
            Check your SMS messages. We've sent you the PIN at
            <Text className="opacity-5 text-slate-400"> 19027361538</Text>
          </Text>
        </View>
        <View className="bg-blue-300 h-28 mt-5 "></View>

        <Text className="text-lg font-bold text-black mt-5">
          Didn't receive SMS? Resend Code
        </Text>

        <View className="mt-8 w-full">
          <TouchableOpacity className="bg-slate-900 p-3 rounded-md border-0">
            <Text className="text-white text-xl text-center font-medium">
              CONTINUE
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default OtpScreen;
