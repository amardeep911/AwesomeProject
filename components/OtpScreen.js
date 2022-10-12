import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import OTPInputView from '@bherila/react-native-otp-input'
import * as Icons from "react-native-heroicons/outline";

function OtpScreen() {
  return (
    <SafeAreaView>
      <Icons.ChevronDownIcon size={20} color="#000000" />
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
        <View className=" h-28 ">

        <OTPInputView className="text-black" style={{width: '80%', height: 100, marginLeft: 25}}
    pinCount={4}
    autoFocusOnLoad
    codeInputFieldStyle={styles.underlineStyleBase}
    codeInputHighlightStyle={styles.underlineStyleHighLighted}
    onCodeFilled = {(code) => {
        console.log(`Code is ${code}, you are good to go!`)
    }} />
        </View>

        <Text className="text-lg font-bold text-black mt-2">
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

const styles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45,
    color: '#000000'
  },

  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderColor: '#000000',
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: "#080807",
  },
});