import React from 'react'
import { connect } from 'react-redux'

import Winner from './Winner'
import {next} from '../action_creators'

const mapStateToProps = (state) => ({
  pair: state.vote.pair,
  tally: state.vote.tally,
  winner: state.winner
})

const mapDispatchToProps = (dispatch) => ({
  next: () => dispatch(next())
})

let Results = (props) => (
  <div>
    {props.winner ? <Winner winner={props.winner} /> : (
     <div>
        {props.pair.map((entry, i) => (
          <div key={i}>{entry}:{props.tally[entry]}</div>
        ))}
        <button onClick={props.next}>next</button>
      </div>
     )}
  </div>
)

Results = connect(mapStateToProps, mapDispatchToProps)(Results)

export default Results