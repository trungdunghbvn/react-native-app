import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Text, TouchableHighlight, View, Alert, Picker } from 'react-native';
import { addCount } from '../actions';

class Home extends Component {
    static navigationOptions = {
        header: null,
    };
    state = {
        modalVisible: false,
        language: ''
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        console.log('test132')
        return (
            <View style={{ marginTop: 22 }}>
                <Picker
                    selectedValue={this.state.language}
                    style={{ height: 50, width: 200 }}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({ language: itemValue })
                    }>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                    <Picker.Item label="test" value="hello" />
                </Picker>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={{ marginTop: 22 }}>
                        <View>
                            <Text>Hello World12!</Text>

                            <TouchableHighlight
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}>
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>

                <TouchableHighlight
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>
                    <Text>Show Modal</Text>
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