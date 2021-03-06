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

  const first = {name: 'Max'};
  const second = {job: 'Instructor'};

  const combined = {...first,...second, location: 'America'};
  console.log(combined);

  const clone = {...first};

// Classes

   class Person {
       constructor(name){
           this.name = name;

       }

      walk(){
          console.log("Walk");
      }
   }

   const person = new Person ('Max');
   person.
   
// Rest Params
  function sum (){
      return arguments.reduce((total, el)=> total + el);
  }

  sum(3,4,5,6,5,4,5,4,3)

  function sum(...nums){
      console.log(nums)
  }

  function raceResults (gold, silver, ...everyoneElse) {
      console.log(`GOLD METAL GOES TO ${gold}`)
      console.log(`SILVER METAL GOES TO ${silver}`)
      console.log(`NO METAL GOES TO ${everyoneElse}`)
  }

// Destructuring Arrays
    const scores = [32223,323232,324564,21453]

    const [score1, socre2, score3, score4] = scores;
