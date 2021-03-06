import {INITIAL_STATE, setEntries, next, vote} from './core'

export default function(state=INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_ENTRIES': return setEntries(state, action.entries)
    case 'NEXT': return next(state)
    case 'VOTE': return vote(state, action.entry)
    default: return state
  }
}