import React from 'react';
import { render } from 'react-dom';

import adjectives from './adjectives';
import adverbs from './adverbs';
import nouns from './nouns';
import verbs from './verbs';
import structures from './structures';


const TYPES_MAP = {
  '/adjective': adjectives,
  '/adverb': adverbs,
  '/noun': nouns,
  '/verb': verbs,
};


const choice = (list) => list[Math.floor(Math.random() * list.length)];


const handleVerb = (verb) => {
  if (verb.endsWith('s')) {
    verb += 'e';
  }
  verb += 's';
  return verb;
};


const handleToken = (token) => {
  if (TYPES_MAP.hasOwnProperty(token)) {
    let word = choice(TYPES_MAP[token]);
    if (token === '/verb') {
      word = handleVerb(word);
    }
    return word;
  }
  return token;
};


const parseRow = (row) => {
  return row
    .split(' ')
    .map(handleToken)
    .join(' ');
};


const App = () => {
  let structure = choice(structures).split('\n');
  let parsedStructure = structure.map((row, i) => <div key={i}>{parseRow(row)}</div>);
  return <div>{parsedStructure}</div>;
};


render(<App/>, document.getElementById('app'));
