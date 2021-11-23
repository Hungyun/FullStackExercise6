const notificationInitial= 'Welcome'


const notificationReducer = (state = notificationInitial, action) =>{
    switch (action.type){
      case 'removeNotifi':
        console.log('in removeNotifi setting null')
          return null
      case 'setNotifi':
        console.log('in setNotifi action.data:', action.data)
          return action.data
      default:
          return state
    }
}


export const setNotification = (content, waitTime, timeoutOldId) => {
  return async dispatch => {
    clearTimeout(timeoutOldId)
    dispatch({
      type: 'clearTimeout',
    })
    const timeoutNewId = setTimeout(()=>{dispatch({type: 'removeNotifi'})}, waitTime*1000)
    dispatch({
      type: 'setNotifi',
      data: content,
      timeoutId: timeoutNewId
      })
  }
}
export const setNo = (content, time)=>{
  return async dispatch =>{
    dispatch({
      type: 'setNotifi',
      data: content,
      timeoutId: 100
    })
    setTimeout(()=>{dispatch({type: 'removeNotifi'})}, time*1000)
  }
}


export const removeNotification = () => {
    return(
      {
      type: 'removeNotifi',
      }
    )
  }
export default notificationReducer