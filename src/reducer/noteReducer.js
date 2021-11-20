import { createNewNote, getAll, updateNote } from '../services/notes'

export const noteReducer = (state = [], action) => {
  if (action.type === '@notes/init') {
    return action.payload
  }
  if (action.type === '@notes/created') {
    return [...state, action.payload]
  }
  if (action.type === '@notes/toogle_important') {
    const updatedNote = action.payload

    return state.map((note) => {
      if (note.id === updatedNote.id) {
        return { ...updatedNote }
      }
      return note
    })
  }
  return state
}

export const createNote = (content) => {
  return async (dispatch) => {
    const note = await createNewNote(content)
    return dispatch({
      type: '@notes/created',
      payload: note
    })
  }
}

export const toggleImportantOf = ({ id, important }) => {
  return async (dispatch) => {
    const note = await updateNote({ id, important })
    return dispatch({
      type: '@notes/toogle_important',
      payload: note
    })
  }
}

export const initNotes = () => {
  return async (dispatch) => {
    const notes = await getAll()
    dispatch({
      type: '@notes/init',
      payload: notes
    })
  }
}
