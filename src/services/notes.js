import axios from 'axios'

const baseUrl = 'http://localhost:3001/notes'

export const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

export const createNewNote = async (content) => {
  const note = { content, importanat: false }
  const response = await axios.post(baseUrl, note)
  return response.data
}

export const updateNote = async ({ id, important }) => {
  const response = await axios.patch(`${baseUrl}/${id}`, { important: !important })
  return response.data
}
