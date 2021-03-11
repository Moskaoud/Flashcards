import AsyncStorage from '@react-native-async-storage/async-storage'
import { decks } from './_Data'

const STORAGE_KEY = 'Flashcards'

function setInitData() {
  AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(decks))
  return decks
}
// get decks
export function getDecks() {
  return AsyncStorage.getItem(STORAGE_KEY)
    .then(data => (
      data ? JSON.parse(data) : setInitData()
    ))
}

// get deck
export function getDeck(title) {
  return getDecks.then((decks) => decks[title])
}
// deleteDeck
export function deleteDeck(title) {
  return AsyncStorage.getItem(STORAGE_KEY)
    .then((results) => {
      const decks = JSON.parse(results)
      decks[title] = undefined
      delete decks[title]
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(decks))
    })
}
// add deck
export function saveDeckTitle(deckTitle) {
  return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
    [deckTitle]: {
      title: deckTitle,
      questions: []
    }
  }))
}
// add card to deck
export function addCardToDeck(deckTitle, card) {
  return getDeck(deckTitle).then(deck =>
    AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
      [deckTitle]: {
        title: deckTitle,
        questions: [...deck.questions].concat(card)
      }
    }))
  )
}