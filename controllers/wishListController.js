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

async function addItemToList(req, res) {
  let reqBody = "";
  req.on("data", (chunk) => {
    reqBody = reqBody + chunk;
  });

  req.on("end", async () => {
    const { name, quantity } = JSON.parse(reqBody);

    const item = { name, quantity };

    const response = await WishListModel.addToList(item);

    res.writeHead(201, { "Content-Type": "application/json" });
    res.write(JSON.stringify(response));
    res.end();
  });
}

module.exports = { getWishList, addItemToList };
