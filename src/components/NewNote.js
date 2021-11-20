import { useDispatch } from 'react-redux'

import { createNote } from '../reducer/noteReducer'

export default function NewNote() {
  const dispatch = useDispatch()

  const addNote = (evt) => {
    evt.preventDefault()

    const { target } = evt
    const content = target.note.value
    target.note.value = ''

    dispatch(createNote(content))
  }

  return (
    <form onSubmit={addNote}>
      <input name="note" />
      <button>add</button>
    </form>
  )
}
