import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addContactThunk, deleteContactThunk, getConstactsThunk } from "./operations";

const contactsInitialState = {
    items: [],
    isLoading: false,
    error: null
}
const thunksArr = [addContactThunk, deleteContactThunk, getConstactsThunk]

const thunhsTypes = (type) => thunksArr.map(thunk => thunk[type])

const handlePending = (state) => {
            state.isLoading = true
}

const handleFulfilled = (state) => {
            state.isLoading = false
            state.error = null
}

const handleRejected = (state, action) => {
            state.error = action.payload
}
             
const handleGetContactFullfild = (state, { payload }) => {
            state.isLoading = false
            state.error = null
            state.items = payload 
}

const handleAddContactFullfild = (state, { payload }) => {
            state.items.push(payload.data)
}

const handleDeleteContact = (state, { payload }) => {
            state.items = state.items.filter(item => item.id !== payload.data.id) 
            
}
            
const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    extraReducers: (builder) => {
        builder
            .addCase(getConstactsThunk.fulfilled, handleGetContactFullfild)
            .addCase(addContactThunk.fulfilled, handleAddContactFullfild)
            .addCase(deleteContactThunk.fulfilled, handleDeleteContact)
            .addMatcher(isAnyOf(...thunhsTypes('pending')), handlePending)
            .addMatcher(isAnyOf(...thunhsTypes('fulfilled')), handleFulfilled)
            .addMatcher(isAnyOf(...thunhsTypes('rejected')), handleRejected)
    }
})


export const contactsReducer = contactsSlice.reducer;
