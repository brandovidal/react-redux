import { useDispatch, useSelector } from 'react-redux'

import { toggleImportantOf } from '../reducer/noteReducer'

function Note({ note, toggleImportant }) {
  const { id, content, important } = note
  return (
    <li key={id} onClick={() => toggleImportant({ id, important })}>
      {content}
      <strong>{important ? 'important' : 'not important'}</strong>
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
  const notes = useSelector((state) => state.notes)
  const dispatch = useDispatch()

  // TODO: Update note
  const toggleImportant = async ({ id, important }) => {
    dispatch(toggleImportantOf({ id, important }))
  }
  return <Notes notes={notes} toggleImportant={toggleImportant} />
}
