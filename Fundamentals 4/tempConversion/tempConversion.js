const ftoc = function(temperatureFarehneit) {
  let temperatureCelsius;
    temperatureCelsius=(temperatureFarehneit-32)*(5/9);
    temperatureCelsius=Math.round(temperatureCelsius*10)/10;
    return temperatureCelsius;

}

const ctof = function(temperatureCelsius) {
  let temperatureFarehneit;
  temperatureFarehneit=temperatureCelsius*9/5+32;
  temperatureFarehneit=Math.round(temperatureFarehneit*10)/10;
  return temperatureFarehneit;

}

module.exports = {
  ftoc,
  ctof
}
