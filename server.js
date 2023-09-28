const http = require("http");
const WishListController = require("./controllers/wishListController");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/wishlist" && req.method === "GET") {
    WishListController.getWishList(req, res);
    return;
  } else if (req.url === "/wishlist" && req.method === "POST") {
    WishListController.addItemToList(req, res);
    return;
  } else if (req.url.match(/\/wishlist\/([0-9]+)/) && req.method === "PUT") {
    const id = req.url.split("/")[2];
    WishListController.updateItem(req, res, id);
  } else {
    res.writeHead(404, { message: "Not found" });
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
