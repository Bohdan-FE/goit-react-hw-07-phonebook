import { createAsyncThunk } from "@reduxjs/toolkit";
import { addContact, deleteContact, getContacts } from "api/api";

export const getConstactsThunk = createAsyncThunk('contacts/fetchContactsStatus', async () => {
    return await getContacts()
})

export const deleteContactThunk = createAsyncThunk('contacts/deleteContactStatus', async (id) => {
    return await deleteContact(id)
})

export const addContactThunk = createAsyncThunk('contacts/addContactStatus', async (contact) => {
    return await addContact(contact)
})