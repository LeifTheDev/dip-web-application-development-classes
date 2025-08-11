const userObject = {
<<<<<<< HEAD
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
=======
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
>>>>>>> 82c5095 (feat: session 3 and OOP update)
};

// Fix the ternary operator to correctly reflect the user's employment status so that:
// if they are employed and a student they are not lookingfor work.
const employmentStatus = userObject.isEmployed
<<<<<<< HEAD
  ? userObject.isStudent
    ? "not looking for work"
    : "employed"
  : "unemployed";

userObject.isStudent ? "not looking for work" : "employed";
userObject.isEmployed ? "employed" : "employed";

console.log(`${userObject.name} is ${employmentStatus}`);
=======
    ? userObject.isStudent ? "not looking for work" : 'employed'
    : 'unemployed';

// userObject.isStudent ? "not looking for work" : 'employed';
// userObject.isEmployed ? 'employed' : 'employed';


console.log(`${userObject.name} is ${employmentStatus}`);
>>>>>>> 82c5095 (feat: session 3 and OOP update)
