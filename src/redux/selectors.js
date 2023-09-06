export const selectContacts = state => state.storeContacts.contacts.items;

export const selectIsLoading = state => state.storeContacts.contacts.isLoading;

export const selectError = state => state.storeContacts.contacts.error;

export const selectFilter = state => state.storeContacts.filter;
