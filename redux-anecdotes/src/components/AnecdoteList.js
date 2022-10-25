import { useSelector, useDispatch } from 'react-redux'
import { vote, voteAnecdote } from '../reducers/anecdoteReducer'
import { notify, setNotification } from '../reducers/notificationReducer'

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
    

    const addVote = (obj) => {
        dispatch(voteAnecdote(obj))
        dispatch(setNotification(`you voted for ${obj.content}`, 5))
    }

    return (
        <div>
            {anecdotesToShow.map(anecdote =>
                <Anecdote key={anecdote.id} anecdote={anecdote} handleClick={() => addVote(anecdote)} />
            )}
        </div>
    )    
}

export default AnecdoteList