let wishListArray = require("../data/datastore");

let __ID = 10;

function getWishList() {
  return new Promise((resolve, reject) => {
    resolve(wishListArray);
  });
}

function addToList(item) {
  const newItem = { id: __ID + 1, ...item };
  __ID++;
  console.log("Adding item to aray");
  console.log(newItem);

  wishListArray.push(newItem);

  return new Promise((resolve, reject) => {
    resolve(newItem.id);
  });
}

function search(id) {
  const searchResult = wishListArray.find((item) => item.id === Number(id));

  return new Promise((resolve, reject) => {
    resolve(searchResult);
  });
}

function update(id, item) {
  const index = wishListArray.findIndex((item) => item.id === Number(id));
  wishListArray[index] = item;

  return new Promise((resolve, reject) => {
    resolve(wishListArray[index]);
  });
}

function deleteItem(id) {
  return new Promise((resolve, reject) => {
    const deleteIndex = wishListArray.findIndex(
      (item) => item.id === Number(id)
    );
    const deletedItem = wishListArray[deleteIndex];
    wishListArray.splice(deleteIndex, 1);

    resolve(deletedItem);
  });
}

module.exports = { getWishList, addToList, search, update, deleteItem };
