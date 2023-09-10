// import React, { useState, useRef } from 'react';
// import { View, Button, Text, StyleSheet, Pressable, Image, ScrollView } from 'react-native';
// import "react-native-gesture-handler";
// import { BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";
// import { GestureHandlerRootView } from 'react-native-gesture-handler';




// const WelcomeScreen = ({ navigation }) => {
//   // Add welcome screen code here.
//   const bottomSheetModalRef = useRef(null);

//   const snapPoint = ["65%"]


//   function handlePeresentModal() {
//     bottomSheetModalRef.current?.present();
//   }
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }} >
//       <BottomSheetModalProvider>
//         <View style={styles.container}>
//           <Image
//             style={styles.image}
//             source={require('../assets/little-lemon-logo.png')}
//             resizeMode='center'
//             accessible={true}
//             accessibilityLabel={'Little Lemon Logo'} />
//           <Text style={styles.message}>Little Lemon, your local Mediterranean Bistro</Text>
//           <Pressable onPress={handlePeresentModal}
//             style={
//               ({ pressed }) => [{ backgroundColor: pressed ? 'gray' : '#004225', }, styles.btnContainer,]}>

//             <Text style={styles.btn}>NewsLetter</Text>
//           </Pressable>
//           <BottomSheetModal
//             ref={bottomSheetModalRef}
//             index={0}
//             snapPoints={snapPoint} >
//             <View style={{flex:1}}>
//               <ScrollView indicatorStyle={"black"} contentContainerStyle={{ flexGrow: 1 }}>
//                 <View >
//                   <Text style={{ alignSelf: 'center', paddingHorizontal: 30, }} >
//                     Certainly! Here are some short reviews of Sigiriya from a tourist's point of view that you can use for a tour guide application:

//                     1. **Spectacular and Enchanting!**
//                     "Sigiriya is nothing short of spectacular. As a tourist, I was completely enchanted by its rich history, the awe-inspiring Lion's Paw Gateway, and the mesmerizing frescoes. The climb to the summit was challenging but totally worth it for the breathtaking views. A must-visit destination for anyone exploring Sri Lanka!"

//                     2. **A Journey Back in Time**
//                     "Visiting Sigiriya felt like stepping back in time. The ancient ruins, the meticulously designed gardens, and the mysterious frescoes all told a captivating story of a bygone era. As a tourist, I couldn't have asked for a more immersive and educational experience."

//                     3. **Nature and History in Perfect Harmony**
//                     "Sigiriya is where nature and history harmoniously coexist. The lush greenery surrounding the rock, the serene Water Gardens, and the rock itself with its intricate architecture make it a photographer's paradise. It's a true gem for tourists seeking both natural beauty and cultural heritage."

//                     4. **A Hiker's Dream**
//                     "If you're a hiking enthusiast, Sigiriya is a dream come true. The ascent to the summit is an adventure in itself, with steep staircases and awe-inspiring vistas at every turn. Reaching the top is incredibly rewarding, and the panoramic views are simply breathtaking."

//                     5. **UNESCO Gem**
//                     "Sigiriya's UNESCO World Heritage Site status is well-deserved. It's a testament to the site's historical and cultural significance. As a tourist, I appreciated the efforts put into preserving this treasure for future generations. The guided tour was informative and brought the history to life."

//                     6. **A Spiritual Experience**
//                     "Sigiriya has an almost spiritual quality to it. Walking through the ancient ruins, you can't help but feel a deep connection to the past. The sense of wonder and reverence I experienced as a tourist is something I'll cherish forever."

//                     7. **Memorable Cultural Encounter**
//                     "Sigiriya offers a memorable cultural encounter. From the moment you set foot on the site, you're immersed in Sri Lanka's rich history and artistry. It's a place where tourists can appreciate the genius of ancient architects and artists."

//                     8. **Awe-Inspiring Frescoes**
//                     "The frescoes at Sigiriya are simply awe-inspiring. As a tourist, I was captivated by the intricate details and vibrant colors of these ancient paintings. They provide a unique window into the culture and aesthetics of the past."

//                     These short reviews highlight the diverse aspects of Sigiriya that make it a compelling destination for tourists. They showcase its historical significance, natural beauty, and the sense of wonder it evokes in visitors. Feel free to use these reviews in your tour guide application to showcase the appeal of Sigiriya to potential tourists.
//                   </Text>
//                 </View>
//               </ScrollView>
//             </View>
//           </BottomSheetModal>

//         </View>
//       </BottomSheetModalProvider>
//     </GestureHandlerRootView>
//   );
// }



// export default WelcomeScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     paddingHorizontal: 30,
//     paddingVertical: 80,
//   },
//   image: {
//     width: 200,
//     height: 250,
//     margin: 50,
//   },
//   message: {
//     alignSelf: 'center',
//     fontSize: 20,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     paddingBottom: 80
//   },
//   btnContainer: {
//     borderRadius: 8,
//   },
//   btn: {
//     fontSize: 20,
//     color: 'white',
//     padding: 5,
//     textAlign: 'center'
//   }
// })

import React, { useState, useRef } from 'react';
import { View, Button, Text, StyleSheet, Pressable, Image, ScrollView, ImageBackground } from 'react-native';
import { BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Avatar } from 'react-native-elements';

const WelcomeScreen = ({ navigation }) => {
  const bottomSheetModalRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false)
  const snapPoints = ["40%", "85%"];

  function handlePresentModal() {
    bottomSheetModalRef.current?.present();
    setTimeout(() => {
      setIsOpen(true);
    }, 50)

  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <View style={[styles.container, { backgroundColor: isOpen ? "gray" : "white" }]}>
          <ImageBackground
            source={require('../assets/Sigiriya1.jpg')}
            resizeMode='cover'
            style={[styles.image, { flex: 1, }]} >
            <Pressable onPress={handlePresentModal}>
              <Image
                style={{ height: 50 }}
                source={require('../assets/Rating.png')}
                resizeMode='contain'
                accessible={true}
                accessibilityLabel={'rating'} />
            </Pressable>
          </ImageBackground>
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
                    source={{ uri: 'data:image/jpeg;base64,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' }}

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
    height: "100%",
    flexDirection: 'row-reverse',
  },
  message: {
    paddingTop: 15,
    fontSize: 18,
    textAlign: 'justify',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
  },
  detailContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  btn: {
    fontSize: 20,
    color: 'white',
    padding: 5,
    textAlign: 'center'
  },
  scrollContent: {
    flexGrow: 1, // Allow the ScrollView to fill available space
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
    // backgroundColor: 'red',
    height: 95,
  }
});
