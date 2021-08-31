const cors = require("micro-cors")();
import generateRandomCoordinate from "./util/util";

function generateObject() {
  let i;
  let obj = new Array();

  for (i = 0; i < 8; i++) {
    obj.push(generateRandomCoordinate());
  }

  return obj;
}

const handler = (request, response) => {
  if (request.method === "OPTIONS") {
    return response.status(200).send("ok");
  }

  const objCoord = generateObject();

  response.status(200).json({ data: objCoord });
};

export default cors(handler);
