import generateRandomCoordinate from './util/util';

function generateObject(){
  let i;
  let obj = new Array();

  for(i=0; i<8; i++){
    obj.push(generateRandomCoordinate());
  }

  return obj;
}

export default function handler(req, res) {
  const objCoord = generateObject();
  
  res.status(200).json({ data: objCoord });
}
