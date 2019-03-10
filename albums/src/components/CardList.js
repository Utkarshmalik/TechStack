import React,{Component} from 'react';
import {View,Text,ScrollView} from 'react-native';
import Axios from 'axios';
import Card from './CardComponent';


export default class CardList extends Component
{

  //get the data as array
  //iterate over each array and print it .

  state={
    albums:[]
  }



  componentWillMount()
  {
    Axios.get('https://rallycoding.herokuapp.com/api/music_albums').
    then( (response)=>{

      this.setState({albums:response.data});
    })
  }

  renderData()
  {
      return this.state.albums.map(value=> <Card data={value}/>)

  }


  render()
  {

    return(
    <ScrollView style={styles.tempCard}>
    {this.renderData()}
    </ScrollView>
  )
  }




}


const styles={
  textStyle:{
    backgroundColor:'red',
    justifyContent:'center',
  },
  tempCard:
  {
    
  }

}

