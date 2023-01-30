import React, { useState, useEffect, useLayoutEffect } from "react";
import { Button, Text } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigator/RootStackParamList";
import SceneNames from "../navigator/SceneNames";
import { database } from "../config/fb";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import Product from "../components/Product";

const Home = () => {
  const navigation =
    useNavigation<NavigationProp<RootStackParamList, SceneNames.Add>>();
  const [products, setProducts] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title="Add" onPress={() => navigation.navigate("Add")} />
      ),
    });

    return () => {};
  }, []);

  useEffect(() => {
    const collectionRef = collection(database, "products");
    const q = query(collectionRef, orderBy("createdAt", "desc"));

    const unsuscribe = onSnapshot(q, (querySnapshot) => {
      setProducts(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          emoji: doc.data().emoji,
          name: doc.data().name,
          price: doc.data().price,
          isSold: doc.data().isSold,
          createdAt: doc.data().createdAt,
        }))
      );
    });
    return unsuscribe;
  }, []);

  return (
    <>
      <Text>Products</Text>
      {products.map((product) => (
        <Product key={products.id} {...product} />
      ))}
    </>
  );
};

export default Home;
