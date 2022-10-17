import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useState } from "react";
import { useContext } from "react";
import { DialCodeContext } from "../Store/context";
import OTPInputView from '@bherila/react-native-otp-input'


function OtpScreen() {
  const ctx = useContext(DialCodeContext);
  const [otp, setOtp] = useState('')
  console.log(`${ctx.dial}`+`${ctx.phoneNo}`)
  const codeHandler = (code) => {
    setOtp(code)
    console.log(otp)
    fetch('https://apiv2.orbiting.in/api/auth/sms/verify', {
      method: 'POST',
      body: JSON.stringify({
        phoneNumber: `${ctx.dial}`+`${ctx.phoneNo}`,
        otp: `${otp}`
      }),
      headers: {
        'Content-Type':
        'application/json'
      },
    }).then(res => res.json())
      .then(
        (data) => {
          console.log(data.jwt)
          if (data.jwt){
            console.log('welcome')
          }
          else {
            console.log('Did not match')
          }
        }
        )
      .catch(console.error)
    
  }
  
  return (
    <SafeAreaView>
       
      <View className="mt-20 mx-2">
        <View>
          <Text className="text-5xl font-bold text-black ">
            Verify phone number
          </Text>
          <Text className="text-lg font-bold text-black mt-5">
            Check your SMS messages. We've sent you the PIN at 
            <Text className="opacity-5 text-slate-400">{ctx.phoneNo}</Text>
          </Text>
        </View>
        <View className=" h-28 ">

        <OTPInputView className="text-black" style={{width: '80%', height: 100, marginLeft: 25}}
    pinCount={6}
    autoFocusOnLoad
    codeInputFieldStyle={styles.underlineStyleBase}
    codeInputHighlightStyle={styles.underlineStyleHighLighted}
    onCodeFilled = {codeHandler}
     />
        </View>

        <Text className="text-lg font-bold text-black mt-2">
          Didn't receive SMS? Resend Code
        </Text>

        <View className="mt-8 w-full">
          <TouchableOpacity className="bg-slate-900 p-3 rounded-md border-0" onPress={codeHandler} >
            <Text className="text-white text-xl text-center font-medium">
              press
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