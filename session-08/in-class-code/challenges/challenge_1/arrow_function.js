// // Convert the following code to an arrow function assigned to a getFull name variable
// function getFullName(user) {
//   return user.firstName + " " + user.lastName;
// }

// const userObject = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   isStudent: false,
//   address: {
//     street: "123 Main St",
//     city: "Perth",
//     zipCode: "6000",
//   },
//   skills: ["JavaScript", "HTML", "CSS"],
//   socialProfiles: {
//     twitter: "@johndoe",
//     linkedIn: "linkedin.com/in/johndoe",
//   },
//   isEmployed: true,
// };

// // Fix this code using an arrow function.
// console.log(getFullName(userObject));

//LEIF COMMENTS: Arrow function not really required to fix this, simply adding the user to the function was enough (commented code above)

// Convert the following code to an arrow function assigned to a getFull name variable

const userObject = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: false,
  address: {
    street: "123 Main St",
    city: "Perth",
    zipCode: "6000",
  },
  skills: ["JavaScript", "HTML", "CSS"],
  socialProfiles: {
    twitter: "@johndoe",
    linkedIn: "linkedin.com/in/johndoe",
  },
  isEmployed: true,

  getFullName: () => {
    return `${this.firstName} ${this.lastName}`;
  },
};

const getFullName = (user) => {
  return `${user.firstName} ${user.lastName}`;
};

// Fix this code using an arrow function.
console.log(getFullName(userObject));
