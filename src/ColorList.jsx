import React from 'react'
import { nanoid } from 'nanoid'
import SingleColor from './SingleColor'

const ColorList = ({ colors }) => {
  return (
    <section>
      <div className="colors">
        {colors.map((color, index) => {
          return <SingleColor key={nanoid()} color={color} index={index} />
        })}
      </div>
    </section>
  )
}

export default ColorList
