import React, { useState, useRef } from 'react';
import { View, Button, Text, StyleSheet, Pressable, Image, ScrollView, ImageBackground, ToastAndroid } from 'react-native';
import { BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Avatar, Rating } from 'react-native-elements';

const WelcomeScreen = ({ navigation }) => {
  const bottomSheetModalRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false)
  const snapPoints = ["40%", "85%"];

  const [selectedRating, setSelectedRating] = useState(1); // Initial rating value

  const handleRatingCompleted = (rating) => {
    setSelectedRating(rating);
    // console.log("Rating is: " + selectedRating ) // Update the selected rating in the state
    // You can perform additional actions here, such as saving the rating to a database
  };

  function handlePresentModal() {
    bottomSheetModalRef.current?.present();
    setTimeout(() => {
      setIsOpen(true);
    }, 50)

  }


  const ratingCompleted = () => {
    console.log("Rating is: " + selectedRating)
    ToastAndroid.show('Request sent successfully!', ToastAndroid.SHORT);
    navigation.navigate('Review', { selectedRating });
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <View style={[styles.container, { backgroundColor: isOpen ? "gray" : "white" }]}>
          <View>
            <ImageBackground
              source={require('../assets/Sigiriya1.jpg')}
              resizeMode='cover'
              style={[styles.image]} >
              <Pressable onPress={handlePresentModal}>
                <Image
                  style={{ height: 50 }}
                  source={require('../assets/Rating.png')}
                  resizeMode='contain'
                  accessible={true}
                  accessibilityLabel={'rating'} />
              </Pressable>
            </ImageBackground>
          </View>


          <View style={styles.detailContainer}>


            <ScrollView contentContainerStyle={styles.scrollContent} indicatorStyle={"black"}>
              <Text style={{
                fontSize: 48,
                paddingLeft: 25,
                fontWeight: 'bold',
                color: '#004225'
              }}>Sigiriya</Text>
              <Text style={styles.message}>
                Sigiriya: Sri Lanka's Ancient Marvel
                Hidden amidst the lush forests and rolling hills of Sri Lanka's central Matale District, the ancient fortress of Sigiriya, often referred to as the "Lion Rock," stands as a testament to the architectural brilliance and historical grandeur of the island nation. This UNESCO World Heritage Site has captivated the hearts and minds of visitors for centuries with its intriguing history, breathtaking architecture, and lush gardens.
              </Text>
              <Text style={styles.message}>
                Sigiriya's history dates back to the 5th century CE when it was chosen as the royal residence by King Kasyapa I. The king, seeking both protection and isolation, ordered the construction of a formidable fortress on the summit of this 200-meter-high rock formation. The fortress was not only a symbol of power but also a display of artistic and engineering prowess.
              </Text>
            </ScrollView>

          </View>
          <View style={{ paddingHorizontal: 20, paddingVertical: 5, }}>
            <Rating
              showRating
              imageSize={25}
              defaultRating={1}
              onFinishRating={handleRatingCompleted}
              style={{ paddingBottom: 5, }}
              startingValue={0}
              ratingTextColor={'#004225'}
            />
            <Pressable
              onPress={ratingCompleted}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? 'rgb(210, 230, 255)' : '#004225',
                },
                styles.wrapperCustom,
              ]}>
              <Text style={{ textAlign: 'center', fontSize: 20, color: 'white', fontWeight: 'bold' }} >Submit</Text>
            </Pressable>

          </View>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={0}
            snapPoints={snapPoints}
            backgroundStyle={{ borderRadius: 30 }}
            onDismiss={() => { setIsOpen(false) }} >

            <View style={{ paddingHorizontal: 20, flex: 1, justifyContent: 'space-evenly', }}>
              <Pressable onPress={() => navigation.navigate('Review')} >
                <View style={styles.review}>
                  <Avatar
                    rounded
                    source={{ uri: 'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D&w=1000&q=80' }}

                    containerStyle={{ borderWidth: 1, borderColor: 'blue' }} />
                  <View style={{ flexDirection: 'column' }}>
                    <Text style={[styles.scrollText, { fontSize: 20, fontWeight: 'bold' }]}>
                      Ami Jonh
                    </Text>
                    <Text style={[styles.scrollText, { fontSize: 18, fontWeight: 'normal' }]}>
                      United States
                    </Text>
                    <Image
                      style={{ maxWidth: 100, maxHeight: 20, marginHorizontal: 18 }}
                      source={require('../assets/r1.png')}
                      resizeMode='center'
                      accessible={true}
                      accessibilityLabel={'rating'}
                    />
                    <Text style={[styles.scrollText, { fontSize: 12, fontStyle: 'italic', color: 'grey' }]}>
                      20 min ago
                    </Text>
                  </View>
                </View>
              </Pressable>
              <Pressable onPress={() => navigation.navigate('Review')} >
                <View style={styles.review}>
                  <Avatar
                    rounded
                    source={{ uri: 'https://images.unsplash.com/photo-1575986767340-5d17ae767ab0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG91cmlzdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' }}
                    containerStyle={{ paddingTop: 3, borderWidth: 1, borderColor: 'blue' }} />
                  <View style={{ flexDirection: 'column' }}>
                    <Text style={[styles.scrollText, { fontSize: 20, fontWeight: 'bold' }]}>
                      Adam Smith
                    </Text>
                    <Text style={[styles.scrollText, { fontSize: 18, fontWeight: 'normal' }]}>
                      France
                    </Text>
                    <Image
                      style={{ maxWidth: 100, maxHeight: 20, marginHorizontal: 18 }}
                      source={require('../assets/r2.png')}
                      resizeMode='center'
                      accessible={true}
                      accessibilityLabel={'rating'}
                    />
                    <Text style={[styles.scrollText, { fontSize: 12, fontStyle: 'italic', color: 'grey' }]}>
                      25 min ago
                    </Text>
                  </View>
                </View>
              </Pressable>
              <Pressable onPress={() => navigation.navigate('Review')} >
                <View style={styles.review}>
                  <Avatar
                    rounded
                    source={{ uri: 'https://images.unsplash.com/photo-1575986767340-5d17ae767ab0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG91cmlzdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' }}

                    containerStyle={{ borderWidth: 1, borderColor: 'blue' }} />
                  <View style={{ flexDirection: 'column' }}>
                    <Text style={[styles.scrollText, { fontSize: 20, fontWeight: 'bold' }]}>
                      Peter Handry
                    </Text>
                    <Text style={[styles.scrollText, { fontSize: 18, fontWeight: 'normal' }]}>
                      United Kindome
                    </Text>
                    <Image
                      style={{ maxWidth: 100, maxHeight: 20, marginHorizontal: 18 }}
                      source={require('../assets/r2.png')}
                      resizeMode='center'
                      accessible={true}
                      accessibilityLabel={'rating'}
                    />
                    <Text style={[styles.scrollText, { fontSize: 12, fontStyle: 'italic', color: 'grey' }]}>
                      36 min ago
                    </Text>
                  </View>
                </View>
              </Pressable>
              <Pressable onPress={() => navigation.navigate('Review')} >
                <View style={styles.review}>
                  <Avatar
                    rounded
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiycBXVRR7--WOzsm68anyQYbqycH9APf9gg&usqp=CAU' }}

                    containerStyle={{ borderWidth: 1, borderColor: 'blue' }} />
                  <View style={{ flexDirection: 'column' }}>
                    <Text style={[styles.scrollText, { fontSize: 20, fontWeight: 'bold' }]}>
                      Francisca
                    </Text>
                    <Text style={[styles.scrollText, { fontSize: 18, fontWeight: 'normal' }]}>
                      Brazil
                    </Text>
                    <Image
                      style={{ maxWidth: 100, maxHeight: 20, marginHorizontal: 18 }}
                      source={require('../assets/r1.png')}
                      resizeMode='center'
                      accessible={true}
                      accessibilityLabel={'rating'}
                    />
                    <Text style={[styles.scrollText, { fontSize: 12, fontStyle: 'italic', color: 'grey' }]}>
                      40 min ago
                    </Text>
                  </View>
                </View>
              </Pressable>
            </View>
          </BottomSheetModal>
        </View>
      </BottomSheetModalProvider>
    </GestureHandlerRootView >
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  image: {
    width: "100%",
    height: 200,
    flexDirection: 'row-reverse',
  },
  message: {
    paddingTop: 15,
    fontSize: 18,
    textAlign: 'justify',
    fontFamily: 'sans-serif',
    fontWeight: 'normal'
  },
  detailContainer: {
    paddingHorizontal: 15,
    flex: 1,
  },
  btn: {
    fontSize: 20,
    color: 'white',
    padding: 5,
    textAlign: 'center'
  },
  scrollContent: {
    flexGrow: 1,
  },
  scrollText: {
    textAlign: 'left',
    paddingRight: 30,
    paddingHorizontal: 20,
  },
  review: {
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 5,
    height: 95,
  },
  wrapperCustom: {
    paddingVertical: 4,
    borderRadius: 10
  }
});
