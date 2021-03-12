import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native'
import { connect } from 'react-redux'
import { deleteDeck } from '../actions/index'

export class DeckDetails extends Component {


    handleStart = (navigation, cards) => {
        console.log('CARDS', cards)
        if (cards.length == 0) {
            navigation.navigate('NoCards')
        }else{
            navigation.navigate('Quiz',{cards})
        }
    }
    handleDelete = (navigation, title) => {
        this.props.dispatch(deleteDeck(title))
        navigation.navigate('Decks')

    }

    render() {
        let { navigation, route, decks } = this.props

        let title = route.params.title
        let cards = decks[title].questions


        return (
            <View style={styles.container}>
                <Text> {title} </Text>
                <Text> {cards.length} cards</Text>
                <Button title="Add Card" onPress={() => navigation.navigate('AddCard', { title: title })} />
                <Button title="Start Quiz" onPress={() => this.handleStart(navigation, cards)} />
                <Button title="Delete Deck" onPress={() => this.handleDelete(navigation, title)} />

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
        fontSize: 25
    }
});

function mapStateToProps(decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(DeckDetails)
