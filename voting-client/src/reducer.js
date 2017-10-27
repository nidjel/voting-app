function resetVote(hasVoted, newState) {
  if (hasVoted && newState.vote && !newState.vote.pair.includes(hasVoted)) return null
  return hasVoted
}

export default function(state = {
  vote: {pair: [], tally: {}},
  hasVoted: null,
  winner: null
}, action) {
  switch (action.type) {
    case 'SET_STATE': return {
      ...state,
      ...action.state,
      hasVoted: resetVote(state.hasVoted, action.state)
    }
    case 'VOTE': return {
      ...state,
      hasVoted: action.entry
    }
    default: return state
  }
}