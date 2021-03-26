// Whenever want to render list of items use .map

const colors = ['red','green','blue'];
const items = colors.map(color => `<li>${color}</li>`);
console.log(items);
