const data = require('../assets/data');

function getProducts(query) {
  let resData = data;
  if(query){
    resData = resData.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
  }
  return resData;
}

module.exports = { getProducts };
