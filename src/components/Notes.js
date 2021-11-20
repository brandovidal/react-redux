import { useDispatch, useSelector } from 'react-redux'

import { toggleImportantId } from '../reducer/noteReducer'

function Note({ note, toggleImportant }) {
  return (
    <li key={note.id} onClick={() => toggleImportant(note.id)}>
      {note.content}
      <strong>{note.important ? 'important' : 'not important'}</strong>
    </li>
  )
}

function Notes({ notes, toggleImportant }) {
  return (
    <ul>
      {notes.map((note) => (
        <Note key={note.id} note={note} toggleImportant={toggleImportant} />
      ))}
    </ul>
  )
}

export default function NotesContainer() {
  const notes = useSelector(state => state.notes)
  const dispatch = useDispatch()

  const toggleImportant = (id) => {
    dispatch(toggleImportantId(id))
  }
  return <Notes notes={notes} toggleImportant={toggleImportant} />
}
