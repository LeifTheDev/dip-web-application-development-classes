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
  isEmployed: false,
};

// Fix the ternary operator to correctly reflect the user's employment status so that:
// if they are employed and a student they are not looking for work.
// const employmentStatus = userObject.isEmployed
//   ? "Employed"
//   : "Unemployed"
//   ? "Looking for work"
//   : "Not looking";

const employmentStatus = userObject.isEmployed
  ? "Employed"
  : userObject.isStudent
  ? "not looking for work"
  : "looking for work";

console.log(
  `${userObject.firstName} ${userObject.lastName} is ${employmentStatus}`
);

// LEIF COMMENT: Unclear on "if they are employed and a student they are not looking for work." That would mean everyone employed who is NOT a student would be looking for work
// (although I can understand everyone always wanting a better job). For the purposes of the exercise assuming this is meant to mean "if you are a student you dont want a job, if you are employed you are employed so dont need a job"
