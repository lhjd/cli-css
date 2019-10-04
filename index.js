const inputs = process.argv;
console.log(inputs);

const hexColor = inputs[2];

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

//alert(hexToRgb("#0033ff").g); // "51";

const rgbColor = hexToRgb(hexColor);

console.log("rgb:",rgbColor);