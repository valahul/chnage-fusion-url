function change_URL() {
  const role = scriptElement.getAttribute('user_role');
  switch (role) {
    case "Sales":
      window.location.replace("http://www.w3schools.com");
      break;
    default:
      console.log("do nothing");
      break;
  }
}
      change_URL()
