import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import { Badge } from 'react-native-elements'
import { connect } from 'react-redux'

export class Quiz extends Component {
    state = {
        show: false,
        score: 0
    }
    handlePress = (ans) => {
        ans == 'correct' && this.setState((pre) => ({
            score: pre.score + 1
        }))
    }

    render() {
        let { route, navigation } = this.props
        let cards = route.params.cards
        let { show } = this.state

        let QuizQuestions = ({ q, a, i }) => {

            return (
                <View style={styles.container}>
                    {/* <Text > {i} / {cards.length}</Text> */}
                    <Badge value={i + 1 + ' / ' + cards.length} status="primary" />
                    <Text style={styles.container}> {q}</Text>
                    {
                        show === i && <Text style={styles.container}> {a}</Text>
                    }
                    <TouchableOpacity
                        style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
                        //send question number to show answer
                        onPress={() => this.setState({ show: i })} >
                        <Text > Show Answer </Text>
                    </TouchableOpacity>
                    {/*Buttons are included to allow user mark their guess as 'Correct' or 'Incorrect' */}
                    <TouchableOpacity style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
                        onPress={() => this.handlePress('correct')} >
                        <Text > Correct </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
                        onPress={() => this.handlePress('incorrect')} >
                        <Text > Incorrect </Text>
                    </TouchableOpacity>
                </View>
            )
        }
        let { score } = this.state
        return (

            <View style={styles.container}>
                {cards.map((c, i) => {
                    //question, answer, index
                    return <QuizQuestions q={c.question} a={c.answer} i={i} key={i} />
                })}
                <View style={styles.container}>
                    <Text style={styles.container}>Your Score is
                        {score < cards.length / 2 ?
                            <Badge value={score} status="error" /> :
                            <Badge value={score} status="success" />}
                    </Text>
                    <View style={styles.container}>
                        <Button style={styles.container}
                            title="Restart Quiz" onPress={() =>
                                cards.map((c, i) => {
                                    <QuizQuestions q={c.question} a={c.answer} i={i} key={i} />
                                    this.setState({ score: 0 })
                                })} /></View>
                    <View style={styles.container}>
                        <Button style={styles.container}
                            title="Back to Deck" onPress={() => navigation.navigate('Decks')} /></View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 15
    },
    iosSubmitBtn: {
        backgroundColor: '#2196f3',
        padding: 10,
        borderRadius: 7,
        height: 45,
        marginLeft: 40,
        marginRight: 40,
        margin: 15

    },
    AndroidSubmitBtn: {
        color: '#ffffff',
        backgroundColor: '#2196f3',
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15

    },
});

export default connect()(Quiz)
