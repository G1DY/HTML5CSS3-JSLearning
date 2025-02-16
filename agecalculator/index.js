const birthdayEl = document.getElementById("birthday");
const btnEl = document.getElementById("btn");
const ageEl = document.getElementById("age");

const calculateAge = () => {
  const birthdayvalue = birthdayEl.value;
  if (birthdayvalue === "") {
    alert("Please enter your birthday");
  } else {
    const age = getAge(birthdayvalue);
    ageEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"}`;
  }
};

const getAge = (birthdayvalue) => {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayvalue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();
  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }
  return age;
};
btnEl.addEventListener("click", calculateAge);
