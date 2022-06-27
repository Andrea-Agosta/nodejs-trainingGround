export const getAge = (birthYear, currentYear) => currentYear - birthYear;

export const getAgeGroup = (age) => {
  let regExpAge = new RegExp("[0-1][0-3][0-9]|[0-9][0-9]|[0-9]");

  //return error if age is not a number or is < 0
  if (!regExpAge.test(age) || age < 0) {
    return "error";
  } else {
    //check age e return the value
    if (age < 4) return "toddler";
    if (age < 13) return "kid";
    if (age < 20) return "teenager";
    if (age < 39) return "adult";
    if (age === 50) return "prime";

    return "old";
  }
};

// this is not necessary, function created only for exsercise (can use directily getAge)
export const getAgeForPerson = (person, currentYear) =>
  getAge(person.birthYear, currentYear);

export const divide = (number1, number2) => {
  if (number2 === 0) {
    throw new Error(
      "Please... No division by zero... I cannot cope with that. /Your computer"
    );
  }
  return number1 / number2;
};
