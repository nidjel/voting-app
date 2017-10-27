import React from 'react'
import {Route} from 'react-router-dom'

import Voting from './components/Voting'
import Results from './components/Results'

const App = () => (
  <div className="App">
    <Route exact path="/" component={Voting} />
    <Route path="/results" component={Results} />
  </div>
)

export default App
