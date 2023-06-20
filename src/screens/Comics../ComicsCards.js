import { View, ScrollView, Text, Image, StyleSheet , Pressable} from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const ComicsCards = () => {
  const { comics } = useSelector((store) => store.comics);

  return (
    <ScrollView>
    
      {comics?.map((card, index) => {
        return (
         
          <View  style={styles.card} key={index}>
          <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "#757882" : "white",
                  borderRightColor: '#757882',
    borderRightWidth: 1
                },
                styles.b,
              ]}
            >
           
            <View style={styles.text}>
              <Text style={styles.title}>{card.title}</Text>
            <Image style={styles.imagenes} source={require("../../../assets/Rectangle_29_2.jpg")}/>
            </View>
          </Pressable>

          </View>

        );
      })}
    </ScrollView>
  );
};

export default ComicsCards;

const styles = StyleSheet.create({
  card: {
   
    marginBottom: 30,
    borderRadius: 10,
  
   
  },
  imagenes: {
    borderRadius: 10,
    borderBottomLeftRadius:50,
    borderTopLeftRadius: 50,
    width: 160,
    height: 146,
  },
  text: {
   manWidth: 400,
    justifyContent: 'space-between',
    flexDirection: "row",
  },
  title: {
    marginLeft: 20,
    fontSize: 20,
    justifyContent: "center",
    
   
    maxWidth: 155,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  b:{
    borderLeftColor: 'blue',
    borderLeftWidth:4,
    borderRadius: 10,
   
  }
});
