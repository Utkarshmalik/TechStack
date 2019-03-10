import React from 'react';
import {Text,View,Image,Linking} from 'react-native';
import CardSection  from './CardSection';
import Button from './button';



const Card=({data})=>
{
  const {title,artist,url,image,thumbnail_image} = data;
  const {CardStyle,ImageStyle,FullImage,Sec1Text,Section1,TextBox,TextView}=styles;

  return(
  
    <View style={CardStyle}>

    <CardSection>
    <View style={Section1}>
    <View >
    <Image style={ImageStyle} source={{uri:thumbnail_image}} />
    </View>
    <View style={TextBox}>
    <Text style={TextView}>{title}</Text>
    <Text style={TextView}>{artist}</Text>
    </View>
    </View>
    </CardSection>

    <CardSection>
    <Image style={FullImage} source={{uri:image}} />
    </CardSection>
    <CardSection>
    <Button onPress={()=>{Linking.openURL(url)}}>
    Buy Now
    </Button>
    </CardSection>
    </View>
  )
} 



export default Card;


const styles={

  CardStyle:{

    marginBottom:7,
    marginTop:2,
    borderRadius:2,
    borderColor:'#DCDCDC',
    borderWidth:2,
    borderOpacity:0.3,
    padding:10

  },

  ImageStyle:{
    height:80,
    width:80
  },
  FullImage:{
    height:350,
    width:null
  },
  Section1:{
    //backgroundColor:'red',
    flexDirection:'row',
    justifyContent:'flex-start'
  },

  TextBox:{
    justifyContent:'center',
    marginLeft:10
    
  },
  TextView:{
    fontSize:16,
    fontWeight:'600'
  }

}