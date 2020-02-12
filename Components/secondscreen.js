import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity
  } from 'react-native';
  import { connect } from 'react-redux';
  import Icons from 'react-native-vector-icons/Ionicons';
  import Icon from 'react-native-vector-icons/FontAwesome';
 class SecondScreen extends Component{
    constructor(props){
        super(props)
        this.state ={
            data:''
        }
    }

    send(){
        this.props.dispatch({type:'Data',data:'new data'})
    }
    

    render(){

        return(
            <View>
                <Text>{this.props.data}</Text>
                <TouchableOpacity onPress={()=>this.send()}>
                    <Text>pass new data</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("FirstScreen")}>
                    <Text>Go to first screen</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = state => {
   
    return {
        data:state.data
    }
}

export default connect(mapStateToProps)(SecondScreen);