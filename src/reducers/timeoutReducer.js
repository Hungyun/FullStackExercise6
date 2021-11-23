const timeoutReducer = (state=null, action) =>{
    switch (action.type){
        case 'clearTimeout':
            return null
        case 'setNotifi':
            return action.timeoutId
        default:
            return state
    }
}

export default timeoutReducer