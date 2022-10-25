import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const notificationSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        notify(state = initialState, action) {
            return action.payload
        }
    }
})

export const { notify } = notificationSlice.actions

export const setNotification = (message, timeout) => {
    return dispatch => {
        dispatch(notify(message))
        setTimeout(() => {
            dispatch(notify(''))
        }, timeout * 1000)
    } 
}

export default notificationSlice.reducer