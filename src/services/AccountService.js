import { APIENDPOINT, getHeader } from '../app.config';
import axios from 'axios';

export default {
  login(value, cb) {
    return new Promise(function (resolve, reject) {
      axios.post(APIENDPOINT + '/login', value)
        .then(function (res) {
          resolve(res);
        })
        .catch(function (err) {
          reject(err.response.data)
        })
    });
  },
  register(value, cb) {
    return new Promise(function (resolve, reject) {
      axios.post(APIENDPOINT + '/register', value)
        .then(function (res) {
          resolve(res);
        })
        .catch(function (err) {
          reject(err.response.data)
        })
    });
  },
  updateUser(value, cb) {
    return new Promise(function (resolve, reject) {
      axios.post(APIENDPOINT + '/update/' + value.id, value)
        .then(function (res) {
          resolve(res);
        })
        .catch(function (err) {
          reject(err.response.data)
        })
    });
  }
}