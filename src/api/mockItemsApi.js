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
    lastUpdated: ""
  },
  {
    id: "la-noire",
    title: "LA Noire",
    extraInfo: "Nintendo Switch",
    requestorId: "matt-williams",
    url: "https://www.amazon.co.uk/Rockstar-Games-NS66976-Nintendo-Switch/dp/B075KFVY1V",
    claimed: false,
    lastUpdated: ""
  },
  {
    id: "funny-apron-and-oven-mitts",
    title: "Funny Apron and Oven Mitts",
    extraInfo: "",
    requestorId: "joint-house-stuff",
    url: "",
    claimed: false,
    lastUpdated: ""
  },
  {
    id: "niche",
    title: "Niche",
    extraInfo: "PC Game",
    requestorId: "natasha-warnock",
    url: "",
    claimed: false,
    lastUpdated: ""
  },
  {
    id: "origins",
    title: "Origins",
    extraInfo: "by Dan Brown",
    requestorId: "matt-williams",
    url: "",
    claimed: false,
    lastUpdated: ""
  },
  {
    id: "street-fighter-2",
    title: "Street Fighter 2",
    extraInfo: "Nintendo Switch",
    requestorId: "joint-house-stuff",
    url: "",
    claimed: false,
    lastUpdated: ""
  },
  {
    id: "beer-stein",
    title: "Beer Stein",
    extraInfo: "",
    requestorId: "matt-williams",
    url: "",
    claimed: false,
    lastUpdated: ""
  },
  {
    id: "dragon-ball-super-season-1",
    title: "Dragon Ball Super Season 1",
    extraInfo: "Blu-Ray",
    requestorId: "joint-house-stuff",
    url: "",
    claimed: false,
    lastUpdated: ""
  },
  {
    id: "japanese-sake-cup-set",
    title: "Japanese Sake Cup Set",
    extraInfo: "",
    requestorId: "natasha-warnock",
    url: "https://www.amazon.co.uk/dp/B01J1TWSMS/_encoding=UTF8?coliid=IGQCL9NEK3CUX&colid=31OW834ZOHF8K",
    claimed: false,
    lastUpdated: ""
  },
  {
    id: "helsing-ultimate-vol-9-and-10",
    title: "Helsing Ultimate Vol 9 and 10",
    extraInfo: "Blu-Ray",
    requestorId: "natasha-warnock",
    url: "",
    claimed: false,
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
