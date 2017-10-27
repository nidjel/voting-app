import React from 'react'

export default (props) => (
  <div>
    {props.pair.map((entry, i) => (
      <button 
        key={i}
        style={{fontSize: 20, width: '30%', height: 100}}
        disabled={!!props.hasVoted}
        onClick={() => props.vote(entry)}
      >
        {entry}
        {props.hasVoted === entry && <span style={{fontSize: 10}} >Voted</span>}
      </button>
    ))}
  </div>
)