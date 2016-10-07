import React from 'react';
import { render } from 'react-dom';

import adjectives from './adjectives';
import adverbs from './adverbs';
import nouns from './nouns';
import verbs from './verbs';
import structures from './structures';

class App extends React.Component {
  render () {
    return <p>Hello React!</p>;
  }
}

render(<App/>, document.getElementById('app'));
