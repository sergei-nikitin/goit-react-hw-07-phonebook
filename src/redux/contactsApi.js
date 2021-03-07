import axios from "axios";

axios.defaults.baseURL = "http://localhost:4040";

export const fetchContacts = () => {
  return axios.get("/contacts").then((res) => res.data);
};

export const addContact = (text) => {
  return axios.post("/contacts", text).then(({ data }) => data);
};

export const deleteContact = (contactID) => {
  return axios.delete(`/contacts/${contactID}`);
};

// export default { fetchContacts, addContact };
