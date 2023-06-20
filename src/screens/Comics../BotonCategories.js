import { View, Text, StyleSheet } from "react-native";
import axios from "axios";
import React, { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import urlApi from "../../../url";
import Buttom from "./Buttom";

export default function BotonCategories() {
  let [categories, setCategories] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(`${urlApi}api/categories`);
      setCategories(response.data.response);
    } catch (error) {
      console.log(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getData();
    }, [])
  );

  return (
    <View style={styles.container}>
    {categories.map((e, index) => {
  return <Buttom   key={index} llave={index} num={index} id={e._id} name={e.name} ></Buttom>;
})}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

});



 