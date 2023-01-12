import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import counterReducer from './reducers/counterReducer'
import orderReducer from './reducers/orderReducer'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        orders: orderReducer
    },
    middleware: [thunk]
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch