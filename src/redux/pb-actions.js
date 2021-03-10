import { createAction } from "@reduxjs/toolkit";

export const fetchContactRequest = createAction("contacts/fetchContactRequest");
export const fetchContactSuccess = createAction("contacts/fetchContactsuccess");
export const fetchContactError = createAction("contacts/fetchContactError");

export const addContactRequest = createAction("contacts/addContactRequest");
export const addContactSuccess = createAction("contacts/addContactsuccess");
export const addContactError = createAction("contacts/addContactError");

export const deleteContactRequest = createAction(
  "contacts/deleteContactRequest"
);
export const deleteContactSuccess = createAction(
  "contacts/deleteContactsuccess"
);
export const deleteContactError = createAction("contacts/deleteContactError");

export const changeFilter = createAction("contact/Change_Filter");
