import React from 'react';
import {Text,View,TouchableOpacity} from 'react-native';

const Button=({onPress,children})=>
{
  return(
  <TouchableOpacity onPress={onPress} style={style.ButtonView}>
  <Text>
  {children}
  </Text>
  </TouchableOpacity>
  )
}

export default Button;


const style={

  ButtonView:{
    flexDirection:'row',
    justifyContent:'center',
    borderColor:'light-blue',
    borderWidth:3,
    borderRadius:2,
    padding:12,
    fontSize:16
  }
}