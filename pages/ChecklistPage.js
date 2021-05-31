import { setStatusBarHidden, StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  Modal,
  TextInput,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomableButton from "../components/CustomableButton";

const saveData = async (datas) => {
  try {
    const json = JSON.stringify(datas);
    await AsyncStorage.mergeItem("@CheckList", json);
  } catch (error) {
    console.log(error);
  }
};

const getData = async () => {
  try {
    const datas = await AsyncStorage.getItem("CheckList");
    if (datas !== null) {
      console.log(datas);
    }
  } catch (error) {
    console.log(error);
  }
};

export default function ChecklistPage(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [item, setItem] = useState();
  const [nbItem, setNbItem] = useState();

  return (
    <View style={styles.container}>
      <CustomableButton
        onPress={() => {
          setModalIsOpen(true);
        }}
        style={styles.button}
        text="Ajouter un element"
        textStyle={styles.textButton}
        width="100%"
        height={50}
      />
      <FlatList
        data={["oui", "non"]}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalIsOpen}
        statusBarTranslucent={true}
        onRequestClose={() => {
          setModalIsOpen(false);
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
          }}
        >
          <View style={styles.modal}>
            <Text>Nom de l'objet :</Text>
            <TextInput
              placeholder="Nom de l'objet"
              style={styles.textInput}
              value={item}
              onChangeText={(t) => setItem(t)}
            />
            <Text>Nombre :</Text>
            <TextInput
              placeholder="Nombre"
              style={styles.textInput}
              keyboardType="number-pad"
              value={nbItem}
              onChangeText={(t) => setNbItem(t)}
            />
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <CustomableButton
                style={styles.modalButton1}
                height={50}
                width="50%"
                text="Enregistrer"
                textStyle={styles.textButton}
                onPress={() => {
                  console.log(item);
                  console.log(nbItem);
                  if (item !== undefined && nbItem !== undefined) {
                    saveData([{ item: item, nbItem: nbItem }]);
                    getData();
                  }
                }}
              />
              <CustomableButton
                style={styles.modalButton2}
                height={50}
                width="50%"
                text="Annuler"
                textStyle={styles.textButton}
                onPress={() => {
                  setModalIsOpen(false);
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  button: {
    backgroundColor: "red",
  },
  textButton: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: "auto",
    marginBottom: "auto",
  },
  modal: {
    width: "80%",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "white",
  },
  textInput: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
  },
  modalButton1: {
    backgroundColor: "green",
  },
  modalButton2: {
    backgroundColor: "red",
  },
});
