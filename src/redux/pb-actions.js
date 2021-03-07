// import shortid from "shortid";
// import axios from "axios";
import { createAction } from "@reduxjs/toolkit";
// import { number } from "prop-types";

export const fetchContactRequest = createAction("contacts/fetchContactRequest");
export const fetchContactSuccess = createAction("contacts/fetchContactsuccess");
export const fetchContactError = createAction("contacts/fetchContactError");

export const addContactRequest = createAction("contacts/addContactRequest");
export const addContactSuccess = createAction("contacts/addContactsuccess");
export const addContactError = createAction("contacts/addContactError");

// const addContact = createAction("contact/Add", (name, number) => ({
//   payload: {
//     id: shortid.generate(),
//     name: name,
//     number: Number(number),
//   },
// }));

// export const deleteContact = createAction("contact/Delete");
export const deleteContactRequest = createAction(
  "contacts/deleteContactRequest"
);
export const deleteContactSuccess = createAction(
  "contacts/deleteContactsuccess"
);
export const deleteContactError = createAction("contacts/deleteContactError");

export const changeFilter = createAction("contact/Change_Filter");
// export const deleteContactRequest = createAction(
//   "contacts/deleteContactRequest"
// );
// export const deleteContactSuccess = createAction(
//   "contacts/deleteContactsuccess"
// );
// export const deleteContactError = createAction("contacts/deleteContactError");

// const actions = { deleteContact, changeFilter };

// export default actions;
