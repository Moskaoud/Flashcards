import React, { Component } from 'react'
import { Text } from 'react-native'
import { View, Button, TextInput, StyleSheet } from 'react-native'
import { Card } from 'react-native-elements'
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
                <Card >
                    <Card.Title>Add Question</Card.Title>
                    <TextInput placeholder="Question" style={styles.textIn}
                        onChangeText={(text) => this.setState({ question: text })} />
                </Card>
                <Card>
                    <Card.Title>Add Answer</Card.Title>
                    <TextInput placeholder="Answer" style={styles.textIn}
                        onChangeText={(text) => this.setState({ answer: text })} />
                </Card>
                <View style={styles.btn}>
                    <Button title="Submit" onPress={() => this.handleSubmit(deckTitle)} />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        margin: 30,
        padding: 20
    }, 
    textIn: { borderWidth: 1 }
    ,btn:{
        margin: 10
    }
});

export default connect()(AddCard)
