import { createSelector } from "@reduxjs/toolkit"

export const contactsSelector = (state) => state.contacts.items

export const filterSelector = (state) => state.filter.filter

export const isLoading = (state) => state.contacts.isLoading

export const visibleItemsSelector = createSelector([contactsSelector, filterSelector], (contacts, filter) => contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  ))