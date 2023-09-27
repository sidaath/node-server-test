let wishListArray = require("../data/datastore");

let __ID = 10;

function getWishList() {
  return new Promise((resolve, reject) => {
    resolve(wishListArray);
  });
}

function addToList(item) {
  const newItem = { id: __ID + 1, ...item };
  console.log("Adding item to aray");
  console.log(newItem);

  wishListArray.push(newItem);

  return new Promise((resolve, reject) => {
    resolve(newItem.id);
  });
}

module.exports = { getWishList, addToList };
