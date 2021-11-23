import React from 'react'
import { useSelector } from 'react-redux'
import { connect } from 'react-redux'
import { newAnec } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props)=>{
  const timeoutId = useSelector(state=>state.timeout)

  const addNew = async (event) => {
    event.preventDefault()
    const content = event.target.an.value
    event.target.an.value = ''
    // const anecode = await dispatch(newAnec(content))
    // console.log('anecode: ', anecode)
    await props.newAnec(content)
    // dispatch(setNotification(`you created '${content}'`, 3))
    props.setNotification(`you created '${content}'`, 5, timeoutId)
  }
  return(
      <>
    <h2>create new</h2>
    <form onSubmit={addNew}>
    <div><input name="an" /></div>
    <button type="submit">create</button>
   </form>
   </>
 )
}



// export default AnecdoteForm

const mapDispatchToProps = dispatch => {
  return {
    newAnec: value => {
      dispatch(newAnec(value))
    },
    setNotification: (message, time, oldId)=>{
      dispatch(setNotification(message, time, oldId))
    }
  }
}



export default connect(
  null,
  mapDispatchToProps
)(AnecdoteForm)