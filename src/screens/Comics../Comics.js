import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
  Image,
  ScrollView,
  SafeAreaView
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
import actionComic from "./comics_Actions";
import ComicsCards from "./ComicsCards";
import BotonCategories from "./BotonCategories";

let { getComics } = actionComic;

const img = require("../../../assets/comicbkg.png");
const img1 = require("../../../assets/lupa.png");

export default function Comics() {
  let dispatch = useDispatch();
  let categoriesStore = useSelector((store) => store.categories.filterCategory);
  let comicstore = useSelector((store) => store.comics.comics);

  const btnCategory = categoriesStore;
  let title = "";
  const [page, setPage] = useState(1);
  const [inputTex, setInputText] = useState(title);

  useFocusEffect(
    useCallback(() => {
      if(comicstore !== btnCategory || inputTex){

        dispatch(
          getComics({
            page: page,
            title: inputTex,
            category: btnCategory.join(","),
          })
        );
      }
    }, [inputTex,btnCategory])
  );

  const handlertext = (e) => {
    setInputText(e);
  };

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.tinyLogo} source={img}>
      <ScrollView style={styles.container}>
        <Text style={styles.h1}>COMICS</Text>
        <View style={styles.buscar}>
          <TextInput
            onChangeText={handlertext}
            style={styles.input}
            placeholder="Find your comic here"
          ></TextInput>
          <Image style={styles.lupa} source={img1} />
        </View>
        <View style={styles.section}>
          <Text style={styles.h2}>Explore</Text>
          <View style={styles.imagenes}>
            <Image
              style={styles.exploreimg}
              source={require("../../../assets/adventures.png")}
            />
            <Image
              style={styles.exploreimg}
              source={require("../../../assets/nostalgic.png")}
            />
            <Image
              style={styles.exploreimg}
              source={require("../../../assets/popular.png")}
            />
          </View>
          <View style={styles.card}>
            <BotonCategories/>
          </View>
          <View style={styles.card}>
            <ComicsCards />
          </View>
        </View>
      </ScrollView>  
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  tinyLogo: {
    flex:1,
    height:null,
    width:null,
    resizeMode: 'center'
  },
  h1: {
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    alignSelf: "center",
    marginTop: 80,
  },
  input: {
    borderColor: "blue",
    borderRadius: 50,
    padding: 10,
    backgroundColor: "white",
    width: 290,
    fontSize: 30,
  },
  lupa: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginLeft: 10
  },
  buscar: {
    borderRadius: 50,
    backgroundColor: "white",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 20,
    height: 60,
  },
  section: {
    flex: 1,
    padding: 30,
    backgroundColor: "#EBEBEB",
    borderRadius: 50,
    marginTop: 20,
   
  },
  h2: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "left",
    marginTop: 10,
   
  },
  imagenes: {
    marginTop: 15,
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
   
  },
  exploreimg: {
    resizeMode: "contain",
  },
  card: {
    marginTop: 30,
  },
  texto: {
    height: 200,
    width: 100,
    color: "black",
    fontSize: 1000,
    borderColor: "black",
    backgroundColor: "red",
    borderWidth: 1,
  },
});
