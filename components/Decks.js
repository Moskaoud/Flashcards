import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { getDecks } from '../utils/api'
import { receiveDecks } from '../actions'
import { handleInitialData } from '../actions/index'

export class Decks extends Component {
    
    componentDidMount() {
        this.props.dispatch(handleInitialData())

    }

    render() {
        let { decks } = this.props

        console.log('decks -> ', decks)
        return (
            <View>
                <Text> {decks} </Text>
            </View>
        )
    }
}
function mapStateToProps({ decks }) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(Decks)