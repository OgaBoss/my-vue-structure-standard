import api from '../api/index';

const authentication = {
  register(content) {
    return new Promise((resolve, reject) => {
      api.post('register', content, (data) => {
        resolve(data);
      }, (error) => {
        reject(error);
      });
    });
  },
};


export default authentication;
