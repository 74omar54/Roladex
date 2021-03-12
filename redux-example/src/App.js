import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../home'
import About from '../about'

const App = () => (
  <div>
    <header>
      <Link to='/'>HOME</Link>
      <Link to='/about-us'>ABOUT</Link>
    </header>

    <Main>
      <Route exact path='/' component={Home} />
      <Route exact path='/about-us' component={About} />
    </Main>
  </div>
)

export default App;