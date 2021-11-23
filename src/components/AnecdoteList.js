import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voting } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'


const AnecdoteList = () =>{
    const anecdotes = useSelector(state => state.anecdotes)
    const filterString = useSelector(state => state.filter)
    const timeoutId = useSelector(state => state.timeout)
    const dispatch = useDispatch()

    const dataArray = [...anecdotes]
    function compare(a, b){
      return b.votes - a.votes
    }

    const sortedData = dataArray.sort(compare)
    const filteredData = sortedData.filter(note=> note.content.includes(filterString))
    
    const vote = async (id, content) => {
        await dispatch(voting(id))
        dispatch(setNotification(`you voted '${content}'`, 5, timeoutId))
      }
  return(
    <>
    {filteredData.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList