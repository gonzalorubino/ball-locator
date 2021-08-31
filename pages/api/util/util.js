function generateValue(amount){
    var num = (Math.random() * amount).toFixed(3);
    var posorneg = Math.random() < 0.5;
    if (posorneg == 0) {
      num = num * -1;
    }
    return num;
}

// LONGITUDE -180 to + 180
function generateRandomLong() {
  var num = generateValue(180);
  return num;
}

// LATITUDE -90 to +90
function generateRandomLat() {
  var num = generateValue(90);
  return num;
}

export default function generateRandomCoordinate(){
    const coordinate = {
        'latitude': generateRandomLat(),
        'longitude': generateRandomLong()
    }

    return coordinate;
}