function getWinner(vote) {
  if (!vote) return []
  else if (vote.tally[vote.pair[0]] > vote.tally[vote.pair[1]]) {
    return [vote.pair[0]]
  } else if (vote.tally[vote.pair[0]] < vote.tally[vote.pair[1]]) {
    return [vote.pair[1]]
  } else {
    return [...vote.pair]
  }
}

export const INITIAL_STATE = {}

export function setEntries(state, entries) {
  return {
    ...state,
    entries
  }
}

export function next(state) {
  const winner = getWinner(state.vote)
  if (state.entries.length === 0 && winner.length === 1) {
    return {
      winner: winner[0]
    }
  } else {
    return {
      ...state,
      entries: state.entries.slice(2).concat(winner),
      vote: {
        pair: [...state.entries.slice(0, 2)],
        tally: {
          [state.entries[0]]: 0,
          [state.entries[1]]: 0,
        }
      }
    }
  }

}

export function vote(state, entry) {
  return {
    ...state,
    vote: {
      ...state.vote,
      tally: {
        ...state.vote.tally,
        [entry]: state.vote.tally[entry] + 1
      }
    }
  }
}