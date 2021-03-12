import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, Alert } from 'react-native'
import { connect } from 'react-redux'

export class Quiz extends Component {
    state = {
        show: false,
        score: 0
    }

    render() {
        let { route, navigation } = this.props
        let cards = route.params.cards
        console.log('QUIZ Cards', cards)

        let { show } = this.state

        const createAlert = (q, a, i) =>
            Alert.alert(
                i + '/ ' + cards.length + '\n' + q,
                show ? a : '',
                [
                    {
                        text: "Show Answer",
                        onPress: () => this.setState({ show: true })
                    },
                    {
                        text: "Correct",
                        onPress: () => this.setState((p) => ({ score: p.score++ })),
                        style: "cancel"
                    },
                    { text: "Incorrect" }
                ],
                { cancelable: false }
            );
        return (
            <View>
                {cards.map((c, i) => { createAlert(c.question, c.answer, i) })}

                <Text>Your Score is {this.state.score} </Text>
                <Button title="Restart Quiz" onPress={() => 
                    cards.map((c, i) => { createAlert(c.question, c.answer, i) 
                    this.setState({score:0})
                    })} />
                <Button title="Back to Deck" onPress={() => navigation.navigate('Decks')
                } />

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
    }
});

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
