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

async function getItemById(id) {
  const item = await WishListModel.search(id);
  return item;
}

async function updateWishlistItem(req, res, id) {
  const oldItem = await getItemById(id);

  if (oldItem === undefined) {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end("Item not in wishlist");
  } else {
    const body = await RequestUtils.parseReqBody(req);

    const updatedItem = {
      id: id,
      name: body.name || oldItem.name,
      quantity: body.quantity || oldItem.quantity,
    };

    const updateResponse = await WishListModel.update(id, updatedItem);

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(updateResponse));
  }
}

async function deleteWishlistItem(req, res, id) {
  try {
    const deletedItem = await WishListModel.deleteItem(id);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(deletedItem));
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getWishList,
  addItemToList,
  updateItem: updateWishlistItem,
  deleteWishlistItem,
};
