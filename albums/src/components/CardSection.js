import React from 'react';
import {View} from 'react-native';

const CardSection=(props)=>
{
  return(
    <View style={styles.CardSectionStyle}>
    {props.children}
    </View>
  )
}

export default CardSection;

const styles={
  CardSectionStyle:{

    padding:5,
    borderWidth:1.5,
    marginBottom:1.5,
    borderRadius:1.4,
    borderColor:'#DCDCDC'
  } 
}

