import microCors from 'micro-cors';
import generateRandomCoordinate from './util/util';

const cors = microCors();

function generateObject(){
  let i;
  let obj = new Array();

  for(i=0; i<8; i++){
    obj.push(generateRandomCoordinate());
  }

  return obj;
}

const handler = (request, response) => {
  if (request.method === 'OPTIONS') {
    return response.status(200).send('ok');
  }

  const objCoord = generateObject();
  
  res.status(200).json({ data: objCoord });
};

export default cors(handler);