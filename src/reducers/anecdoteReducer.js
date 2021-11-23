import noteService from '../services/notes'

const reducer = (state = [], action) => {
  if(action.type === 'voting'){
    console.log(action.data)
    const id = action.data.id

    const anecToChange = state.find(an => an.id === id)

    const ChangedAnec = {...anecToChange, votes: anecToChange.votes + 1}
    const newState = state.map(anec=>
      anec.id !== id ? anec : ChangedAnec) 
    return newState
    }
  else if(action.type==='INIT_NOTES'){
    return action.data
  }
  else if(action.type === 'newAnec'){
    return [...state, action.data]
  }
  else{
  return state
  }
}

export const newAnec = content => {
  return async dispatch => {
    const newNote = await noteService.createNew(content)
    dispatch({
      type: 'newAnec',
      data: newNote,
    })
  }
}


export const voting = (id) =>{
  return async dispatch => {
    const updatedNote = await noteService.update(id)
    dispatch({
      type: 'voting',
      data: updatedNote,
    })
  }
}

export const initializeNotes = () => {
  return async dispatch => {
    const notes = await noteService.getAll()
    dispatch({
      type: 'INIT_NOTES',
      data: notes,
    })
  }
}


export default reducer