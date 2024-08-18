import axios from "axios";

const API_URL = "http://localhost:8080/api/contacts";

class ContactService {

    fetchContacts() {
        return axios.get(API_URL);
    }

    addContact(contact) {
        return axios.post(API_URL, contact);
    }

    fetchContactById(id) {
        return axios.get(API_URL + '/' + id);
    }

    updateContact(id, contact) {
        return axios.put(API_URL + '/' + id, contact);
    }

    deleteContact(id) {
        return axios.delete(API_URL + '/' + id);
    }
}

export default new ContactService();