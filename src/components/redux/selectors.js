import { createSelector } from '@reduxjs/toolkit';

export const getTasks = state => state.contacts.items;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const getStatusFilter = state => state.filters.status;


export const visibleContacts = createSelector(
  [getStatusFilter, getTasks],
  (filter, contacts) => {
    const normalizedFilter = filter.trim().toLowerCase();

    return contacts.filter(contact =>
      contact.name.trim().toLowerCase().includes(normalizedFilter)
    );
  }
);