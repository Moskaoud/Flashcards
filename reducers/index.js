import { ADD_CARD, ADD_DECK, DELETE_DECK, RECEIVE_DECKS } from '../actions'

export default function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks,
      }
    case ADD_DECK:
      return {
        ...state,
        ...{
          [action.deckTitle]: {
            title: action.deckTitle,
            questions: []
          }
        }
      }
    case DELETE_DECK:
      const next = { ...state }
      delete next[action.deckTitle]
      return next

    case ADD_CARD:
      return {
        ...state,
        ...{
          [action.deckTitle]: {
            title: action.deckTitle,
            questions: state[action.deckTitle].questions.concat(action.card)
          }
        }
      }
    default:
      return state
  }
}