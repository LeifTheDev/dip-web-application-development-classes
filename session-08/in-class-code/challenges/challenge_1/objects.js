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
};

// This function does not navigate the userObject correctly
function updateAddress(
  user,
  newStreet = null,
  newCity = null,
  newZipCode = null
) {
  // console.log(user, newStreet)
  user.address = {
    street: newStreet ?? user.address.street,
    city: newCity ?? user.address.city,
    zipCode: newZipCode ?? user.address.zipCode,
  };
}

// Fix the object property assignment.
updateAddress(userObject, "25 Aberdeen Street");
console.log(userObject);

// LEIF COMMENT: Complete override of address, for now just letting the user specify which to change.. potentially give the option to pass in an object later on?
