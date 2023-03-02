import { View, Text,StyleSheet } from 'react-native'

export default function InputBox({
  setvalues,
  values
}) {
  return (
    <View style={styles.container}>
      <Text style={{color:"white",fontSize:40}} >{values}</Text>
    </View>
  )
}


// some style
const styles = StyleSheet.create({
  container:{
    flex:1,
    borderWidth:0.5,
    justifyContent:'flex-end',
    alignItems:'flex-end'    ,
    backgroundColor:"#2E3840"
  },



})



// some css