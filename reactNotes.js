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

// Spread operator

  const first = [1,2,3];
  const second = [4,5,6];

  const combined = first.concat(second);
  const combined = [...first, 'a', ...second, 'b'];

  const clone = [...first];
  console.log(clone);
  console.log(first);
