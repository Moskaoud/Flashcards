import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'

class NoCards extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textS}>Sorry, you cannot take a quiz because there are no cards in the deck </Text>
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
        margin: 10
    }, textS: {
        fontSize: 32,
        margin: 10
    }
});

export default connect()(NoCards)