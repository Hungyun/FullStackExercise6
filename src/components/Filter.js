import React from 'react'
import { connect } from 'react-redux'
import { changeFilter } from '../reducers/filterReducer'
// import { useDispatch } from 'react-redux'

const Filter = (props) =>{
    // const dispatch = useDispatch()

    const handleChange=(event)=>{
        const content = event.target.value
        // dispatch(changeFilter(content))
        props.changeFilter(content)
    }
    const style = {
        marginBottom: 10
      }
    return (
        <div style={style}>
          filter <input onChange={handleChange} />
        </div>
      )
}

// export default Filter

const mapDispatchToProps = dispatch => {
  return {
    changeFilter: value => {
      dispatch(changeFilter(value))
    }
  }
}

const ConnectedFilter = connect(
  null,
  mapDispatchToProps
)(Filter)
export default ConnectedFilter