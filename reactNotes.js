// Whenever want to render list of items use .map

const colors = ['red','green','blue'];
const items = colors.map(color => `<li>${color}</li>`);
console.log(items);

// Object Destructuring

  const address = {
      street: '',
      city: '',
      country: '',
  };

  const street = address.street;
  const city = address.city;
  const country = adress.country;

  // Destructuring Syntax
  const {street, city, country} = address;

  // Saves constant in new constant 'st';
  const {street: st} = address;
