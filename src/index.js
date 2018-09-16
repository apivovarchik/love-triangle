/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var loveTrianglesCount=0;
  for (var index = 0; index < preferences.length; index++) {
    var firstLove = preferences[index];
    if (firstLove == 0 || firstLove == index + 1) {
      continue;
    } else {
      var secondLove = preferences[firstLove - 1];
      if (secondLove == 0 || secondLove == firstLove) {
        continue;
      } else {
        var thirdLove = preferences[secondLove - 1];
        if (index + 1 == thirdLove) {
        loveTrianglesCount++;
        }
      }
    }
  }
  return loveTrianglesCount/3;
};
