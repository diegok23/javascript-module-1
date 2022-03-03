function userChecker(userName, userType) {
  const firstLetter = userName.charAt(0);
  const userLength = userName.length;
  const validLength = userLength >= 5 && userLength <= 10;
  const superUser = userType === "amidn" || userType === "manager";
  if (superUser) {
    return "Username valid";
  } else if (firstLetter === firstLetter.toUpperCase() && validLength) {
    return "Username valid";
  } else {
    return "Username invalid";
  }
}

console.log(userChecker("Diego", "admin"));

/*  Alternativa

  if (superUser || (firstLetter === firstLetter.toUpperCase() && validLength)) {
    return "Username valid";
  } else {
    return "Username invalid";
  }


*/
