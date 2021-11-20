import { useEffect } from 'react'

import { initNotes } from './reducer/noteReducer'
import { useDispatch } from 'react-redux'

import NewNote from './components/NewNote'
import VisibilityFilter from './components/VisibilityFilter'
import Notes from './components/Notes'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initNotes())
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
