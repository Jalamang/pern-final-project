const determinePrice = (product) => {
  let { price, capacity, material } = product;

  capacity <= 0 && ("")
  const basePrice = 17;
  material = material[0].toUpperCase() + material.slice(1).toLowerCase();

  if (material === "Steel" && (capacity >= 1 || capacity <= 1.5)) {
    price = basePrice + basePrice * .75;
    return price;
  } 
  else
  if (material === "Steel" &&  capacity > 1.5) {
    price = basePrice + basePrice * .95;
    return price;
  } 
  if (material === "Glass" && (capacity >= 1 || capacity <= 1.5)) {
    price = basePrice + basePrice * .69;
    return price;
  } 
  else
  if (material === "Glass" &&  capacity > 1.5) {
    price = basePrice + basePrice * .85;
    return price;
  } 
  
  
//   else
//   if (material === "Glass" && (capacity >= 1 || capacity <= 1.5)) {
//     price = basePrice + basePrice * .87;
//     return price;
//   }
// else
//   if (material === "Steel" && (capacity > 1.5 && capacity <= 2)) {
//     price = basePrice + basePrice * 1.5;
//     return price;
//   } else {
//     price =  price = basePrice * 1.5;
//   }
};

module.exports = determinePrice;
