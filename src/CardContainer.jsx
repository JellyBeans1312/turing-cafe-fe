import React from 'react';
import Card from './Card'

const CardContainer = ({ props }) => {

  const card = props.map(person => {
   return ( 
    <Card 
      name={person.name} 
      date={person.date} 
      time={person.time} 
      guests={person.number} 
      key={person.id}
    />
    )
  })
  console.log(card)
  return (
    <section>
      {card}
    </section>
  )
}

export default CardContainer;