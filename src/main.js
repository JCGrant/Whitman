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


const parseRow = (row) => {
  return row
    .split(' ')
    .map((token) => {
      if (TYPES_MAP.hasOwnProperty(token)) {
        return choice(TYPES_MAP[token]);
      }
      return token;
    })
    .join(' ');
}


const App = () => {
  let structure = choice(structures).split('\n');
  let parsedStructure = structure.map((row, i) => <div key={i}>{parseRow(row)}</div>);
  return <div>{parsedStructure}</div>;
};


render(<App/>, document.getElementById('app'));
