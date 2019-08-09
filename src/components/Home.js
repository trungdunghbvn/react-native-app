import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableHighlight } from 'react-native';
import { addCount } from '../actions';

class Home extends Component {
    static navigationOptions = {
        header: null,
    };
   
    render() {
        console.log('test132')
        return (
            <View>
                <TouchableHighlight>
                    <Text>Hello12</Text>
                </TouchableHighlight>
                
            </View>
        );
    }
}

const mapStateToProps = state => ({
    searchReducer: state.searchReducer
});
const mapDispatchToProps = dispatch => ({
    addCounts: () => dispatch(addCount()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);