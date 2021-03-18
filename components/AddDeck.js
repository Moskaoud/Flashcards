import React, { Component } from 'react'
import { Text, View, Button, TextInput, StyleSheet, StatusBar } from 'react-native'
import { addDeck } from '../actions/index'
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
        let { navigation } = this.props
        this.props.dispatch(addDeck(text))

        //navigate to deck detail, , { title: text ,cards:0}
        navigation.navigate('DeckDetails', { title: text, cards: 0 })

        this.textInput.clear()
    }

    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.text}> What is the title of your new deck? </Text>

                <TextInput
                    style={styles.textInput}
                    ref={input => { this.textInput = input }}
                    autoFocus={true}
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
        margin: 30,
        fontWeight: "bold"        
    }, text: {
        fontSize: 18
    }, textInput: {
        margin: 30, borderWidth: 1
    }
});

export default connect()(AddDeck)
