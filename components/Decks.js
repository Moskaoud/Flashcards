import React, { Component } from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/index'

const Item = ({ title, cards, navigation }) => (
    <View style={styles.item}>
        <TouchableOpacity onPress={() => navigation.navigate('DeckDetails', { title: title, cards: cards })}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.cards}>{cards} cards</Text>
        </TouchableOpacity>
    </View>
);

export class Decks extends Component {
    state = {
        ready: false
    }
    componentDidMount() {
        this.props.dispatch(handleInitialData())
            .then(() => this.setState(() => ({ ready: true })))

    }
    handlePress = () => {

    }
    render() {
        let { decks, navigation } = this.props
        let DATA = Object.keys(decks).map(d => decks[d])

        const renderItem = ({ item }) => (
            <Item title={item.title} cards={item.questions.length} navigation={navigation} />
        );


        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => 'key' + index}
                />
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
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

    },
});

function mapStateToProps(decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(Decks)