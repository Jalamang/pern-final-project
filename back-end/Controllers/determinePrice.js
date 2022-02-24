const determinePrice = (product) => {
  let { price, capacity, material } = product;

  capacity <= 0 && "";

  const glassBasePrice = 17;
  const steelBasePrice = 45;
  const alumBasePrice = 15;

  material = material[0].toUpperCase() + material.slice(1).toLowerCase();

  if (material === "Glass") {
    if (capacity >= 2) {
      price = 2 * glassBasePrice;
      return price; //> $34
    } else if (capacity > 1.5) {
      price = glassBasePrice + glassBasePrice * 0.85;
      return price; //> $31.45
    } else if (capacity >= 1 || capacity <= 1.5) {
      price = glassBasePrice + glassBasePrice * 0.65;
      return price; //> $28.05
    }
  }

  if (material === "Steel") {
    if (capacity >= 2) {
      price = 2 * steelBasePrice;
      return price; //> $90.00
    } else if (capacity > 1.5) {
      price = steelBasePrice + steelBasePrice * 0.85;
      return price; //> $83.25
    } else if (capacity >= 1 || capacity <= 1.5) {
      price = steelBasePrice + steelBasePrice * 0.65;
      return price; //> $74.25
    }
  }

  if (material === "Aluminum") {
    if (capacity >= 2) {
      price = 2 * alumBasePrice;
      return price; //> $90.00
    } else if (capacity > 1.5) {
      price = alumBasePrice + alumBasePrice * 0.85;
      return price; //> $83.25
    } else if (capacity >= 1 || capacity <= 1.5) {
      price = alumBasePrice + alumBasePrice * 0.65;
      return price; //> $74.25
    }
  }
};
const formatProductName = (material) => {
  material = material[0].toUpperCase() + material.slice(1).toLowerCase();
  return material;
};

module.exports = { determinePrice, formatProductName };
