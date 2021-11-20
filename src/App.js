import { useEffect } from 'react'

import { getAll } from './services/notes'
import { initNotes } from './reducer/noteReducer'

import NewNote from './components/NewNote'
import VisibilityFilter from './components/VisibilityFilter'
import Notes from './components/Notes'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    getAll().then((notes) => dispatch(initNotes(notes)))
  }, [dispatch])

  return (
    <div>
      <NewNote />
      <VisibilityFilter />
      <Notes />
    </div>
  )
}

export default App
