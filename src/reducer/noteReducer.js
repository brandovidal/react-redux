export const noteReducer = (state = [], action) => {
  if (action.type === '@notes/init') {
    return action.payload
  }
  if (action.type === '@notes/created') {
    return [...state, action.payload]
  }
  if (action.type === '@notes/toogle_important') {
    const { id } = action.payload

    return state.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          important: !note.important
        }
      }
      return note
    })
  }
  return state
}

const generateId = () => Math.floor(Math.random() * 9999999) + 1

export const createNote = (content) => {
  return {
    type: '@notes/created',
    payload: {
      content,
      important: false,
      id: generateId()
    }
  }
}

export const toggleImportantId = (id) => {
  return {
    type: '@notes/toogle_important',
    payload: { id }
  }
}

export const initNotes = (notes) => {
  return {
    type: '@notes/init',
    payload: notes
  }
}