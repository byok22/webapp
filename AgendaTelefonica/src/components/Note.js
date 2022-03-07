import React from 'react'

const Note = ({ note }) => {
  return (
    <li>{note.title} {note.author}</li>
  )
}

export default Note