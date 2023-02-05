import { View, ScrollView, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const ComicsCards = () => {
  const { comics } = useSelector((store) => store.comics);

  return (
    <ScrollView>
      {comics?.map((card, index) => {
        return (
          <View  style={styles.card} key={index}>
            <View style={styles.text}>
              <Text style={styles.title}>{card.title}</Text>
             {/*  <Text>{card.category_id._id}</Text> */}
            </View>
            <Image style={styles.imagenes} source={card.photo} />
          </View>
        );
      })}
    </ScrollView>
  );
};

export default ComicsCards;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    height: 146,
    marginBottom: 30,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: 'black',
   
  },
  imagenes: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    borderBottomLeftRadius:50,
    borderTopLeftRadius: 50,
    width: 160,
    height: 146,
  },
  text: {
    maxWidth: 165,
  },
  title: {
    marginLeft: 20,
    fontSize: 20,
    justifyContent: "center",
    fontWeight: 'bold'
  },
});
