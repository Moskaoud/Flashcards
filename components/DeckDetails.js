import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { deleteDeck } from '../actions/index'
import { Card } from 'react-native-elements'
import darkColors from 'react-native-elements/dist/config/colorsDark'

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
                <View >
                    <Card style={styles.item}>
                        <Card.Title style={styles.title}> {title} </Card.Title>
                        <Card.FeaturedSubtitle style={styles.cards}> {cards.length} cards</Card.FeaturedSubtitle>
                    </Card>
                </View>
                <View style={styles.item}>
                    <Button title="Add Card" onPress={() => navigation.navigate('AddCard', { title: title })} />
                </View>
                <View  style={styles.item}>
                    <Button title="Start Quiz" onPress={() => this.handleStart(navigation, cards)} />
                </View>
                <View style={styles.item}>
                    <Button title="Delete Deck" onPress={() => this.handleDelete(navigation, title)} />
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
        fontSize: 25,
        margin: 20
    },
    item: {
        padding: 20,

    },
    title: {
        fontSize: 18,

    },
    cards: {
        fontSize: 15,
        color: darkColors,
        justifyContent: 'center',
        alignItems:'center',
        alignContent:'center',
    }
});

function mapStateToProps(decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(DeckDetails)
