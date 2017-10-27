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

function getEntries(entries, winner) {
  if (entries.length === 1 && winner.length === 1) return []
  return entries.slice(2).concat(winner)
}

function getVote(entries, winner) {
  if (entries.length === 1 && winner.length === 1) return {
    pair: [...entries].concat(winner),
    tally: {
      [entries[0]]: 0,
      [winner[0]]: 0,
    }
  }
  return {
    pair: [...entries.slice(0, 2)],
    tally: {
      [entries[0]]: 0,
      [entries[1]]: 0,
    }
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
      entries: getEntries(state.entries, winner),
      vote: getVote(state.entries, winner)
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