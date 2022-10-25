import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const createNew = async (content) => {
    const anecdote = { content, votes: 0 }
    const response = await axios.post(baseUrl, anecdote)
    return response.data
}

const update = async (obj) => {
    const updated = { content: obj.content, votes: obj.votes }
    const response = await axios.put(`${baseUrl}/${obj.id}`, updated, { new: true })
    return response.data
}

export default { 
    getAll, 
    createNew,
    update
}