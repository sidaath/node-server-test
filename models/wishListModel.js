let wishListArray = require("../data/datastore");

function getWishList() {
  return new Promise((resolve, reject) => {
    resolve(wishListArray);
  });
}

module.exports = { getWishList };
