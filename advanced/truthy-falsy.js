const products = ['eggs'];
const product = products[0];

//Truthy - values that resolve to true in a boolean context
//Arrays and objects are awlays going to be true regardless of content 
// Falsy - values that resolve to false in a boolean context
// Falsy values - false, 0, empty string, null, undefined, NaN
//if something exists or doesn't

if(products) {
    console.log('Product found');
} else {
    console.log('product not found');
}

console.log(product ? 'Product found' : 'Product not found');