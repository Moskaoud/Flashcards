import React, { Component } from 'react'
import { Text, View, Button, TextInput, StyleSheet } from 'react-native'
import {addDeck} from '../actions/index'
import { connect } from 'react-redux'

export class AddDeck extends Component {
    state = {
        text: ''
    }
    onChangeText = (text) => {
        this.setState(() => {
            text
        })
    }
    handleSubmit = () => {
        let { text } = this.state
        let {navigation} = this.props
        this.props.dispatch(addDeck(text))
        
        //navigate to deck detail, , { title: text ,cards:0}
        navigation.navigate('DeckDetails', { title: text ,cards:0})
    }
    render() {
        let { value } = this.state.text
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 30 }}> What is the title of your new deck? </Text>

                <TextInput style={{ margin: 30, borderWidth: 1 }}
                    onChangeText={(text) => this.setState({ text })} />
                <Button title="Create Deck" onPress={() => this.handleSubmit()} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 30
    }
});

export default connect()(AddDeck)
