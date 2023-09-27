const WishListModel = require("../models/wishListModel");
const RequestUtils = require("../utils/requestHandlingUtil");

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

async function addItemToList(req, res) {
  try {
    const { name, quantity } = await RequestUtils.parseReqBody(req);
    const newItem = { name, quantity };
    const itemId = await WishListModel.addToList(newItem);
    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(JSON.stringify(itemId));
  } catch (error) {
    console.error(error);
  }
}

module.exports = { getWishList, addItemToList };
