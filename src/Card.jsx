import React from 'react';

const Card = ({name, date, time, guests }) => {
  return (
    <article className='cards'>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time} pm</p>
      <p>Number of Guests: {guests}</p>
    </article>

  )
}

export default Card;