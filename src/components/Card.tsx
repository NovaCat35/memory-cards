import React from 'react'

interface CardProps {
   charName: string;
}

function Card({charName} : CardProps) {
  return (
    <div>{charName}</div>
  )
}

export default Card