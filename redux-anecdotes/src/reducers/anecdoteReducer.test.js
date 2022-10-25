import reducer from './anecdoteReducer'
import deepFreeze from 'deep-freeze'
import anecdoteReducer, { createAnecdote, vote } from './anecdoteReducer'

describe('anecdoteReducer', () => {
    test('returns new state when new anecdote is added', () => {
        const state = []
        const action = {
            type: 'anecdotes/createAnecdote',
            payload: 'something'
        }

        deepFreeze(state)
        const newState = anecdoteReducer(state, action)

        expect(newState).toHaveLength(1)
        expect(newState.map(s => s.content)).toContain(action.payload)
    })

    test('returns new state when voted', () => {
        const state = [
            {
                content: 'testing',
                votes: 0,
                id: 1
            }]

        const action = {
            type: 'anecdotes/vote',
            payload: 1
        }

        deepFreeze(state)

        const anecdote = {...state[0], votes: 1}
        const newState = reducer(state, action)

        expect(newState).toHaveLength(1)
        expect(newState).toContainEqual(anecdote)
    })
})