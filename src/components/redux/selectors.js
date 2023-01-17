/* import { createSelector } from '@reduxjs/toolkit'; */

/* export const getTasks = state => state.contacts.items;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const getStatusFilter = state => state.filter;


export const visibleContacts = createSelector(
  [getStatusFilter, getTasks],
  (filter, contacts) => {
    const normalizedFilter = filter.trim().toLowerCase();

    return contacts.filter(contact =>
      contact.name.trim().toLowerCase().includes(normalizedFilter)
    );
  }
); */


export function selectContacts(state) {
  return state.contacts.items;
}
export function selectFilter(state) {
  return state.filter;
}

export function selectIsLoading(state) {
  return state.contacts.isLoading;
}

export function selectError(state) {
  return state.contacts.error;
}

/* export const visibleContacts = createSelector(
  [selectFilter, selectContacts],
  (filter, contacts) => {
    const normalizedFilter = filter.trim().toLowerCase();

    return contacts.filter(contact =>
      contact.name.trim().toLowerCase().includes(normalizedFilter)
    );
  }
); */