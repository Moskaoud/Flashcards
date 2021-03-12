import React, { Component } from 'react'
import { View, Button, TextInput, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { addCard } from '../actions'

export class AddCard extends Component {
    state = {
        question: '',
        answer: ''
    }
    handleSubmit = (deckTitle) => {
        let { question, answer } = this.state
        let { navigation } = this.props

        let card = { question, answer }
        // console.log("TT",title)
        this.props.dispatch(addCard(deckTitle, card))

        //navigate to deck detail , { title: text ,cards:0}
        navigation.navigate('DeckDetails')
    }
    render() {
        let { navigation, route } = this.props
        let deckTitle = route.params.title

        return (
            <View style={styles.container}>

                <TextInput style={styles.textIn}   placeholder="Question"
                    onChangeText={(text) => this.setState({ question: text })} />

                <TextInput style={styles.textIn}   placeholder="Answer"
                    onChangeText={(text) => this.setState({ answer: text })} />
                <Button title="Submit" onPress={() => this.handleSubmit(deckTitle)} />
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
    },textIn:{ margin: 30, borderWidth: 1 }
});

export default connect()(AddCard)
