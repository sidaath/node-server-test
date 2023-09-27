function parseReqBody(req) {
  return new Promise((resolve, reject) => {
    let reqBody = "";
    try {
      req.on("data", (chunk) => {
        reqBody = reqBody + chunk;
      });

      req.on("end", async () => {
        const bodyObject = JSON.parse(reqBody);
        resolve(bodyObject);
      });

      req.on("error", (error) => {
        throw new Error(error);
      });
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = { parseReqBody };
