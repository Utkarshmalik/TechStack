import React from 'react';
import {Text,View} from 'react-native';


const Header=({HeaderContent})=>
{
  return(
    <View style={styles.ViewBox}>
    <Text style={styles.HeaderBox}>
    {HeaderContent}
    </Text>
    </View>
  )
}

const styles={

  HeaderBox:{
    fontSize:20,
  },

  ViewBox:{
    borderTop:30,
    height:70,
    justifyContent:'flex-end',
    alignItems:'center',
    backgroundColor:'#DCDCDC',
    paddingBottom:10
  }
}









export default Header;