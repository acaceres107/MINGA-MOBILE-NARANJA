import { Text, Button, View, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import categoriesActions from "../../screens/categories/categories.action";

const { filterCategoryComics } = categoriesActions;

function Buttom({ id, name, num }) {
  let dispatch = useDispatch();
  let [click, setClick] = useState(true);

  const color = (numero) => {
    if (numero === 0) {
      return styles.shonen;
    }
    if (numero === 1) {
      return styles.manhwa;
    }
    if (numero === 2) {
      return styles.marvel;
    }
    if (numero === 3) {
      return styles.dc;
    }
    if (numero === 4) {
      return styles.shojo;
    }
    if (numero === 5) {
      return styles.seinen;
    }
  };

  const buttonId = (e) => {
    setClick(!click);
    dispatch(filterCategoryComics(id));
  };

  return (
    <Pressable>
      {click ? (
        <Pressable onPress={buttonId}>
          <Text style={color(num)} title={name} id={id}>
            {name}
          </Text>
        </Pressable>
      ) : (
        <Pressable onPress={buttonId}>
          <Text style={styles.botonesOn} title={name} id={id}>
            {name}
          </Text>
        </Pressable>
      )}
    </Pressable>
  );
}
export default Buttom;

const styles = StyleSheet.create({
   botonesOn: {
    padding: 6,
    fontSize: 15,
    backgroundColor: "#615e5ed4",
    color: "white",
    fontWeight: "Roboto",
    borderRadius: 20,
    minWidth: 50,
  }, shonen: {
    padding: 6,
    fontSize: 15,
    backgroundColor: "#FFE0DF",
    fontWeight: "bold",
    borderRadius: 20,
    minWidth: 50,
  },manhwa: {
    padding: 6,
    fontSize: 15,
    backgroundColor: "#FFDFC8",
    fontWeight: "bold",
    borderRadius: 20,
    minWidth: 50,
  },marvel: {
    padding: 6,
    fontSize: 15,
    backgroundColor: "#D1FBF0",
    fontWeight: "bold",
    borderRadius: 20,
    minWidth: 50,
  },dc: {
    padding: 6,
    fontSize: 15,
    backgroundColor: "#8883F0",
    fontWeight: "bold",
    borderRadius: 20,
    minWidth: 50,
  },shojo: {
    padding: 6,
    fontSize: 15,
    backgroundColor: "#FFE0DF",
    fontWeight: "bold",
    borderRadius: 20,
    minWidth: 50,
  },seinen: {
    padding: 6,
    fontSize: 15,
    backgroundColor: "#D1FBF0",
    fontWeight: "bold",
    borderRadius: 20,
    minWidth: 50,
  }
});

