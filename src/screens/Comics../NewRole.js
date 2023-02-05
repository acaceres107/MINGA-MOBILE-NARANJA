import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
  ScrollView
} from "react-native";
import React from "react";

const NewRole = () => {
  return (
    <View style={styles.container}>
        <ImageBackground
          source={require("../../../assets/newrols.png")}
          resizeMode="cover"
          style={styles.image}
        >
      <View style={styles.container1}>
      <View>
          <Text style={styles.text1}>
            Minga.com is the best place to find manga reviews. We've been super
            impress by the quality of applicants.
          </Text>
          <Text style={styles.text2}>----Madhushan sasanka</Text>
      </View>
<View>

          <Text style={styles.title2}>Sign up to</Text>
          <Text style={styles.title}>Minga.com</Text>
</View>
          <View style={styles.botones}>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "#9ac3f5" : "white",
                  borderColor: "black",
                },
                styles.button,
              ]}
            >
              <Text style={styles.textAuthor1}>Join as an Author!</Text>
              <Text style={styles.textAuthor2}>
                I'm a reader writting a manga
              </Text>
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "#9ac3f5" : "white",
                },

                styles.button,
              ]}
            >
              <Text style={styles.textAuthor1}>Join as an Company!</Text>
              <Text style={styles.textAuthor2}>
                I'm a company and I want to publish my comics
              </Text>
            </Pressable>
          </View>
      </View>
        </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    flex:1,
    flexDirection: 'column',
   justifyContent: 'space-around',
   alignItems:'center'
  },
  title: {
    fontSize: 40,
    marginBottom: 20,
    alignSelf: "center",
    fontWeight: "bold",
    fontWeight: "bold",

  },
  title2: {
    fontSize: 25,
    marginBottom: 20,
    alignSelf: "center",
  },
  text1: {
    marginTop: 100,
    fontWeight: "bold",
    fontSize: 24,
    margin: 20,
    lineHeight: 40,
  },
  text2: {
    margin: 20
  },
  button: {
    marginTop: 20,
    borderRadius: 15,
    padding: 12,
    width: 300,
    alignSelf: "center",
  },
  botones: {
    marginBottom:100
  },
  textAuthor1: {
    fontSize: 18,
  },

  textAuthor2: {
    color: "grey",
  },
  image: {
    flex:1,
    height:null,
    width:null,
    resizeMode: 'center',
  },
});
export default NewRole;
