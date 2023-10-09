import axios from 'axios';

axios.defaults.baseURL = 'https://6523b63aea560a22a4e8b8d8.mockapi.io/contacts'

export const getContacts = async () => {
    const respons = await axios('/contacts')
    return respons.data
}

export const addContact = async (contact) => {
    const addedContact = await axios.post('/contacts', contact)
    return addedContact
}

export const deleteContact = async (id) => {
    const deletedContact = await axios.delete(`/contacts/${id}`)
    return deletedContact
}