import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { deleteDeck } from '../actions/index'
import { Card } from 'react-native-elements';

export class DeckDetails extends Component {


    handleStart = (navigation, cards) => {
        console.log('CARDS', cards)
        if (cards.length == 0) {
            navigation.navigate('NoCards')
        } else {
            navigation.navigate('Quiz', { cards })
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
                <View style={{ margin: 30 }}>
                    <Card style={styles.item}>
                        <Text style={styles.title}> {title} </Text>
                        <Text style={styles.cards}> {cards.length} cards</Text>
                    </Card>
                </View>
                <Button title="Add Card" onPress={() => navigation.navigate('AddCard', { title: title })} />
                <View style={{ margin: 30 }}>
                    <Button title="Start Quiz" onPress={() => this.handleStart(navigation, cards)} />
                </View>
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
        fontSize: 25,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,

    },
    title: {
        fontSize: 18,

    },
    cards: {
        fontSize: 15,

    }
});

function mapStateToProps(decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(DeckDetails)
