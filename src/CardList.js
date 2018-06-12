import React from 'react';
import Card from './card';


const CardList = ({ items, name }) => (
  <div>
    <h2>{name}</h2>
    <ul>
      { items.map( card => <Card key={card.id} question={card.question} answer={card.answer} complete={card.complete}/> )}
    </ul>
  </div>
)
export default CardList;  