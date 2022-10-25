import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { notify } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote, handleClick }) => {
    return (
        <div>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                <button onClick={handleClick}>vote</button>
            </div>
        </div>
    )
}

const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state.anecdotes)
    const filter = useSelector(state => state.filter)
    const anecdotesToShow = anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter))
    anecdotesToShow.sort((a, b) => b.votes - a.votes)
    

    const addVote = (id, content) => {
      dispatch(vote(id))
      dispatch(notify(`you voted for ${content}`))
      setTimeout(() => {
        dispatch(notify(''))
      }, 5000)
    }

    return (
        <div>
            {anecdotesToShow.map(anecdote =>
                <Anecdote key={anecdote.id} anecdote={anecdote} handleClick={() => addVote(anecdote.id, anecdote.content)} />
            )}
        </div>
    )    
}

export default AnecdoteList