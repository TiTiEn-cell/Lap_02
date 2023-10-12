import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function App() {
  var [name, setName] = useState('');
  var [password, setPassword] = useState('');
  var arr = [{userName: 'admin', passWord: 'admin'},{userName: 'NguyenTanTai', passWord: '123'}]
  function checkLogin(){
    var find = false;
    for(var i = 0; i < arr.length; i++){
      if(name == arr[i].userName && password == arr[i].passWord){
        find = true;
      }
    }
    if(find){
      console.log('Login success');
    }else{
      console.log('Login fail');
    }
  }
  return (
    <View style={styles.container}>
      <View style ={styles.userNameLogin}>
          <b>Login</b>         
      </View>


      <View style = {styles.userNameLoginInput}>
      <Image
          source={require('../Facebook/Images/UserNameImage.png')}
          style = {styles.userNameIconInsideInput}
        />
        <TextInput
          style = {styles.inputs}
          placeholder = 'Name'      
          onChangeText={setName}
          value={name}   
        />      
      </View>


      <View style = {styles.password}>
      <Image
          source={require('../Facebook/Images/PasswordIcon.png')}
          style = {styles.passwordIcon}
        />
        <TextInput
          style = {styles.inputs}
          placeholder = 'Password'   
          secureTextEntry = {true} 
          onChangeText={setPassword}
          value={password} 
        />     
        <Image
        source={require('../Facebook/Images/EyePasswordIcon.png')}
        style = {styles.eyePasswordIcon}
        /> 
      </View>

      <View style = {styles.buttonLogin}>
        <TouchableOpacity style = {styles.button_login}>
          <Text style = {styles.textButtonLogin} onPress = {checkLogin}>
            LOGIN
          </Text>
        </TouchableOpacity>
      </View>

      <View style ={styles.buttonFogrotPW}>
        <TouchableOpacity style = {styles.button_forgotPW}>
          <Text style={styles.textButtonForgotPW}>
             Forgot your password?
          </Text>
        </TouchableOpacity>

      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dab10d',
  },
  userNameLogin:{
    paddingLeft: 30,
    paddingTop: 80,
    alignItems: 'flex-start',
    fontSize: 50,
  },
  userNameLoginInput:{
    paddingHorizontal: 20,
    paddingTop: 80,
  },
  inputs:{
    height: 60,
    borderColor: 'white',
    borderWidth: 1,
    paddingLeft: 70,
    fontSize: 30,
  },
  userNameIconInsideInput: {   
    position: 'absolute',
    width: 30,
    height: 30,
    top: 95,
    left: 30,
  },
  password:{
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  passwordIcon:{
    position: 'absolute',
    width: 30,
    height: 30,
    top: 45,
    left: 30,
  },
  eyePasswordIcon:{
    position: 'absolute',
    width: 32,
    height: 21.82,
    top: 50,
    right: 50,
  },
  buttonLogin:{
    alignItems: 'center',
    paddingTop: 60,
  },
  button_login:{
    borderWidth: 1,
    width: 350,
    height: 50,
    backgroundColor: 'black',
  },
  textButtonLogin:{
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonFogrotPW:{
    paddingTop: 60,
    alignItems: 'center',
  },
  textButtonForgotPW:{
    fontSize: 20,
    fontWeight: 'bold'
  }
});
