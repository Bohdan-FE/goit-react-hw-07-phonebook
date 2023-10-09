import { createAsyncThunk } from "@reduxjs/toolkit";
import { addContact, deleteContact, getContacts } from "api/api";

export const getConstactsThunk = createAsyncThunk('contacts/fetchContactsStatus', async (_, thunkAPI) => {
    try {
        return await getContacts()
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
    
})

export const deleteContactThunk = createAsyncThunk('contacts/deleteContactStatus', async (id, thunkAPI) => {
    try {
        return await deleteContact(id)
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
   
})

export const addContactThunk = createAsyncThunk('contacts/addContactStatus', async (contact, thunkAPI) => {
    try {
        return await addContact(contact)  
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message); 
    }
    
})