import { createSlice } from '@reduxjs/toolkit'

type State = {
    [id: number]: boolean
}
const initialState: State = {
    1: true,
}

export const likeReducer = createSlice({
    name: 'like',
    initialState,
    reducers: {
        toggleLike: (state, action) => ({
            ...state,
            [action.payload]: !state[action.payload],
        }),
    },
})

export const { toggleLike } = likeReducer.actions

export default likeReducer.reducer
