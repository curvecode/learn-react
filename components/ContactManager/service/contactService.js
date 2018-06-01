import React from 'react';
const API_URL = 'http://192.168.60.131:9090';
const CONTACT_SERVICE_URI = '/users/';


class ContactService {
    constructor() {

    }

    checkLogin(userObj) {
        let dataConfig = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userObj)
        }
        return new Promise((resolve, reject) => {
            fetch(`${API_URL}${CONTACT_SERVICE_URI}login`, dataConfig).then((data) => {
                resolve(data.json());
            }).catch((error) => {
                reject(error);
            })
        });
    }

    getContacts(obj) {
        let dataConfig = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }
        return new Promise((resolve, reject) => {
            fetch(`${API_URL}${CONTACT_SERVICE_URI}`, dataConfig).then((data) => {
                resolve(data.json());
            }).catch((error) => {
                reject(error);
            })
        });
    }


}
let contactService = new ContactService();
export default contactService;