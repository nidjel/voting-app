import React from 'react'
import { connect } from 'react-redux'

import Winner from './Winner'
import Vote from './Vote'
import {vote} from '../action_creators'

const mapStateToProps = (state) => {
  return {
    pair: state.vote.pair,
    hasVoted: state.hasVoted,
    winner: state.winner
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    vote: (entry) => dispatch(vote(entry))
  }
}

let Voting = (props) => (
  <div>
   {props.winner ? <Winner winner={props.winner} /> : <Vote {...props} />}
  </div>
)

Voting.defaultProps = {
  pair: []
}

Voting = connect(mapStateToProps, mapDispatchToProps)(Voting)

export default Voting