import { produceWithPatches } from 'immer'
import { connect, useDispatch } from 'react-redux'
import { search } from '../reducers/filterReducer'

const Filter = (props) => {
    const style = {
      marginBottom: 10
    }
  
    return (
      <div style={style}>
        filter <input onChange={(event) => props.search(event.target.value)} />
      </div>
    )
  }

  const mapStateToProps = (state) => {
    return {
        filter: state.filter
    }
  }

  const mapDispatchToProps = {
    search
  }

  const ConnectedFilter = connect(mapStateToProps, mapDispatchToProps)(Filter)

  export default ConnectedFilter