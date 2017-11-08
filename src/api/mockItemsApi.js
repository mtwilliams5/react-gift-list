/*eslint-disable no-unused-vars*/
import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises
const items = [
  {
    id: "playstation-vr",
    title: "Playstation VR",
    extraInfo: "",
    requestorId: "matt-williams",
    url: "https://www.amazon.co.uk/PlayStation-9827054-Sony-VR/dp/B076BTTZCG?th=1",
    claimed: false,
    claimedBy: "",
    lastUpdated: ""
  },
  {
    id: "la-noire",
    title: "LA Noire",
    extraInfo: "Nintendo Switch",
    requestorId: "matt-williams",
    url: "https://www.amazon.co.uk/Rockstar-Games-NS66976-Nintendo-Switch/dp/B075KFVY1V",
    claimed: false,
    claimedBy: "",
    lastUpdated: ""
  },
  {
    id: "funny-apron-and-oven-mitts",
    title: "Funny Apron and Oven Mitts",
    extraInfo: "",
    requestorId: "natasha-warnock",
    url: "",
    claimed: false,
    claimedBy: "",
    lastUpdated: ""
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

// This would be performed on the server in a real app. Just stubbing in.
const generateId = (item) => {
  return replaceAll(item.title.toLowerCase(), ' ', '-');
};

class ItemsApi {
  static getAllItems() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], items));
      }, delay);
    });
  }

  static getItemsByRequestor(requestor) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let requestorItems = items.map((item) => {
          if (item.requestorId == requestor.id) {
            return item;
          }
        });
        if (requestorItems) {
          resolve(Object.assign([], requestorItems));
        } else {
          reject(`No list items found for requestor ${requestor.firstName} ${requestor.lastName}.`);
        }
      }, delay);
    });
  }

  static saveItem(item) {
    item = Object.assign({}, item); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        //Simulate server-side validation
        const minItemTitleLength = 1;
        if (item.title.length < minItemTitleLength) {
          reject(`Title must be at least ${minItemTitleLength} characters.`);
        }

        if (item.id) {
          const existingItemIndex = items.findIndex(a => a.id == item.id);
          items.splice(existingItemIndex, 1, item);
        } else {
          //Just simulating creation here.
          //The server would generate ids in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          item.id = generateId(item);
          items.push(item);
        }

        resolve(item);
      }, delay);
    });
  }

  static deleteItem(itemId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfItemToDelete = items.findIndex(item => {
          item.id == itemId;
        });
        items.splice(indexOfItemToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default ItemsApi;
