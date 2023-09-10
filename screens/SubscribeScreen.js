import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image, TextInput } from 'react-native';
import { validateEmail, validateLenght } from '../utils';

const SubscribeScreen = () => {

  const [review, onChangeReview] = useState('');
  // const isEmailValid = validateEmail(email);
  // const isLenghtValid = validateLenght(lenght);

  const Button = ({ onPress, children, disabled }) => {
    return (
      <Pressable
        onPress={onPress}
        style={[styles.buttonContainer, disabled && styles.disabled]}
        disabled={disabled}
      >
        <Text style={styles.btn}>{children}</Text>
      </Pressable>
    );
  };

  function isEmpty (){
      if (review.trim() === '') {
          return true;
      }else {
        return false;
      }
    }
  


  // Add subscribe screen code here
  return (
    <View style={styles.container}>

      <Image
        style={styles.image}
        source={require('../assets/little-lemon-logo-grey.png')}
        resizeMode='center'
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'} />
      {/* <Text style={styles.message}>Subscribe to our newsletter for our latest delicious recipes!</Text> */}

      <View style={{flex:1, flexDirection:'row',justifyContent:'space-between'}} >
        <TextInput
          style={styles.inputBox}
          value={review}
          onChangeText={onChangeReview}
          placeholder={'Add your review...'}
          keyboardType={'ascii-capable'}
          multiline={true}
          numberOfLines={10}
        />
        <Button
          onPress={() => {
            alert("Thanks for your valuble review, stay tuned!");
          }}
          disabled={isEmpty()}
        >
         Send
        </Button>
      </View>
    </View>
  );
};

export default SubscribeScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 20,
   },
  image: {
    width: 150,
    height: 200,
    alignSelf: 'center'
  },
  // message: {
  //   fontSize: 20,
  //   textAlign: 'center',
  //   paddingTop: 30,
  //   paddingBottom: 20
  // },
  inputBox: {
    height: 80,
    width: 250,
    borderWidth: 2,
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    borderColor: 'blue',
    backgroundColor: '#EDEFEE',
    marginBottom: 30,
    textAlignVertical:'top'
  },
  buttonContainer: {
    height:40,
    width:60,
   marginTop:40,
    borderRadius: 8,
    backgroundColor: 'blue',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 8,
    
  },
  disabled: {
    backgroundColor: 'grey',
    opacity: 0.5,
    
  },
  btn: {
    fontSize: 16,
    color: 'white',
    textAlign:'center'
  }
})