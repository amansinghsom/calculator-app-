import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import InputBox from './Components/InputBox/';
import KeyCal from './Components/KeyCal';

export default function App() {
  const [values, setvalues] = useState('');
  const [current, setcurrent] = useState(null);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const id = setTimeout(() => {
      setloading(false);
    }, 1000)
    return () => {
      clearTimeout(id);
    }
  }, [])
  const handleClick = (input) => {
    console.log(input)
    setcurrent(input)
    const sign = ['+', '-', '*', '/', '%']
    const data = sign.find((value) => value === current);
    console.log(data);
    if (!data) {
      setvalues((previnput) => previnput + input);

    }
  }
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      {/* first view set data */}

      {
        loading ? <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,justifyContent:'space-around'}}>
          <Image
            source={require('./assets/HD-wallpaper-ironman-jfcx-rsj.jpg')}
            style={{ width: 100, height: 100, borderRadius: 200 }}
          />
          <Text >
          Devlope by Aman Singh  🚀
          </Text>
        </View>
          : <>
            <InputBox setvalues={setvalues} values={values} />
            <KeyCal handleClick={handleClick} setvalues={setvalues} values={values} />
          </>
      }



      {/* second view icons and button  */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
