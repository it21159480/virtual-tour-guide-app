import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image, TextInput } from 'react-native';
import { Avatar, Rating } from 'react-native-elements';

const SubscribeScreen = ({ route }) => {
  const { selectedRating } = route.params;

  const [review, onChangeReview] = useState('');

  function isEmpty() {
    return review.trim() === '';
  }

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

  return (
    <View style={styles.container}>
      <View>
        <Text style={{textAlign:'center'}}>YOUR RATING:</Text>
        <Rating
          imageSize={30}
          readonly
          showRating
          startingValue={selectedRating} // Use the selectedRating passed from the previous screen
          ratingTextColor={'#004225'}
        />
        
      </View>
      
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ justifyContent: 'flex-end' }}>
          <TextInput
            style={styles.inputBox}
            value={review}
            onChangeText={onChangeReview}
            placeholder={'Add your review...'}
            keyboardType={'ascii-capable'}
            multiline={true}
            numberOfLines={10}
          />
        </View>
        <View style={{ justifyContent: 'flex-end' }}>
          <Button
            onPress={() => {
              alert("Thanks for your valuable review, stay tuned!");
            }}
            disabled={isEmpty()}
          >
            Send
          </Button>
        </View>
      </View>
    </View>
  );
};

export default SubscribeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'colmn',
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: 'space-between',
    backgroundColor:'white'
  },
  image: {
    width: 150,
    height: 200,
    alignSelf: 'center'
  },
 
  inputBox: {
    height: 80,
    width: 250,
    borderWidth: 2,
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    borderColor: 'blue',
    backgroundColor: '#EDEFEE',
    marginBottom: 0,
    textAlignVertical: 'top'
  },
  buttonContainer: {
    height: 40,
    width: 60,
    marginTop: 40,
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
    textAlign: 'center'
  }
})