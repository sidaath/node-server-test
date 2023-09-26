const WishListModel = require("../models/wishListModel");

async function getWishList(req, res) {
  try {
    const items = await WishListModel.getWishList();

    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(items));
    res.end();
  } catch (error) {
    console.error(error);
  }
}

module.exports = { getWishList };
