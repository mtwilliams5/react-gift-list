/*eslint-disable no-unused-vars*/
import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises
const requestors = [
  {
    id: "matt-williams",
    firstName: "Matt",
    lastName: "Williams"
  },
  {
    id: "natasha-warnock",
    firstName: "Natasha",
    lastName: "Warnock"
  }
];

// This would be performed on the server in a real app. Just stubbing in.
const generateId = (requestor) => {
  return requestor.firstName.toLowerCase() + '-' + requestor.lastName.toLowerCase();
};

class RequestorsApi {
  static getAllrequestors() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], requestors));
      }, delay);
    });
  }

  static saverequestor(requestor) {
    requestor = Object.assign({}, requestor); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        //Simulate server-side validation
        const minRequestorNameLength = 2;
        if (requestor.firstName.length < minRequestorNameLength) {
          reject(`First Name must be at least ${minRequestorNameLength} characters.`);
        }

        if (requestor.lastName.length < minRequestorNameLength) {
          reject(`Last Name must be at least ${minRequestorNameLength} characters.`);
        }

        if (requestor.id) {
          const existingRequestorIndex = requestors.findIndex(a => a.id == requestor.id);
          requestors.splice(existingRequestorIndex, 1, requestor);
        } else {
          //Just simulating creation here.
          //The server would generate ids in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          requestor.id = generateId(requestor);
          requestors.push(requestor);
        }

        resolve(requestor);
      }, delay);
    });
  }

  static deleterequestor(requestorId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfRequestorToDelete = requestors.findIndex(requestor => {
          requestor.id == requestorId;
        });
        requestors.splice(indexOfRequestorToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default RequestorsApi;
