const determinePrice = (material, capacity) => {
  const glassBasePrice = 17;
  const steelBasePrice = 45;
  const alumBasePrice = 15;

  material = capitalizeFirstLetter(material);
  
  if (material === "Glass") {
    if (capacity >= 2) {
      const price = 2 * glassBasePrice;
      return price; //> $34
    } else if (capacity > 1.5) {
      const price = glassBasePrice + glassBasePrice * 0.65;
      return price; //> $31.45
    } else if (capacity >= 1 || capacity <= 1.5) {
      const price = glassBasePrice + glassBasePrice * 0.55;
      return price; //> $28.05
    } else if (capacity <= 0) {
      return;
    }
  }

  if (material === "Steel") {
    if (capacity >= 4) {
      const price = 2 * steelBasePrice;
      return price; //> $90.00
    } else if (capacity > 3.5) {
      const price = steelBasePrice + steelBasePrice * 0.85;
      return price; //> $83.25
    } else if (capacity >= 1 || capacity <= 1.5) {
      const price = steelBasePrice + steelBasePrice * 0.95;
      return price; //> $74.25
    } else if (capacity <= 0) {
      return;
    }
  }

  if (material === "Aluminum") {
    if (capacity >= 4) {
      const price = 2 * alumBasePrice;
      return price; //> $90.00
    } else if (capacity > 1.5) {
      const price = alumBasePrice + alumBasePrice * 0.35;
      return price; //> $83.25
    } else if (capacity >= 1 || capacity <= 1.5) {
      const price = alumBasePrice + alumBasePrice * 0.25;
      return price; //> $74.25
    } else if (capacity <= 0) {
      return;
    }
  }
};

  function capitalizeFirstLetter(string){

    if(!string) return '';

    return string[0].toUpperCase() + string.slice(1);
};



module.exports = { determinePrice, capitalizeFirstLetter };
