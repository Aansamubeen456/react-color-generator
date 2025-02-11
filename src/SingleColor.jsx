import React from 'react'
import { toast } from 'react-toastify'

const SingleColor = ({ color, index }) => {
  const { weight, hex } = color

  const saveToClipBoard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`)
        toast.success('Successfully copied to clipboard')
      } catch (error) {
        toast.error('Failed to copy to clipboard')
      }
    } else {
      toast.error('clipboard access not available')
    }
  }
  return (
    <article
      className={index > 10 ? 'color color-light' : 'color'}
      style={{
        background: `#${hex}`,
      }}
      onClick={saveToClipBoard}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  )
}

export default SingleColor
