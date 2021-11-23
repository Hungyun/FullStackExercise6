const filterReducer = (state='', action)=>{
    if(action.type === 'filter'){
        return action.data.content
    }
    return state
}

export const changeFilter=(content)=>{
    const action = {
        type: 'filter',
        data: {content}
    }
    return action
}
export default filterReducer