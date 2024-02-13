import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, flexDirection, KeyboardAvoidingView, Platform, TouchableOpacity, ScrollView } from 'react-native';
import Message from './components/Message';

export default function App() {
  const [text, onChangeText] = React.useState('');

  const [message, setMessage] = useState();
  const [messageItems, setMessageItems] = useState([]);

  const handleAddMessage = () => {
    setMessageItems([...messageItems, message])
    setMessage(null);
  }

  return (
    <View style={styles.container}>

      {/*Messages that will pop up*/}
      <ScrollView style={styles.textWrapper}>
        
        {/*This is where the messages will go*/}
        {
          messageItems.map((item, index) => {
            return (
              <TouchableOpacity key={index}>
                <Message text={item} />
              </TouchableOpacity>
            )
          })
        }
      </ScrollView>

      {/*This is the keyboard and send button*/}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeMessageWrapper}
      >
        <TouchableOpacity onPress={() => handleAddMessage()}>
          <View style={styles.addWrapper}>
            <Image
              source={require('./assets/send.png')}
              style={styles.addText}
            />
         </View>
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          onChangeText={text => setMessage(text)}
          value={message}
          placeholder='iMessage'
        />
      </KeyboardAvoidingView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  input: {
    height: 40,
    //margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "gray",
    borderRadius: 120,
    width: 270,
  },
  writeMessageWrapper: {
    position: 'absolute',
    bottom: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addWrapper: {
    width: 60,
    height: 60,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    marginLeft: 10,
  },
  addText: {},
  textWrapper: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingLeft: 150,
    flex: 1,
  },
});
