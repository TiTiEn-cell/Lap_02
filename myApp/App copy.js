import React from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <TextInput 
          style={styles.textInput}
          placeholder="Nhập văn bản ở đây"
        />
        <Image
          source={require('../Facebook/Images/UserNameImage.png')} // Thay thế với đường dẫn đến hình ảnh của bạn
          style={styles.iconInsideInput}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    paddingLeft: 10,
  },
  textInput: {
    flex: 1,
    height: 40,
    paddingLeft: 35, // Điều chỉnh dựa trên kích thước và vị trí của hình ảnh
  },
  iconInsideInput: {
    position: 'absolute',
    left: 10,
    width: 20,
    height: 20,
  },
});

export default App;