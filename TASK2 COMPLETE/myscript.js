form1 = () => {
  let lemail = document.getElementById("email").value;
  let lpassword = document.getElementById("password").value;

  // lemail = "login email" lpassword = "login password"

  if (lemail == "" || lpassword == "") {
    alert("One of field is empty");
    return false;
  }
  return emailfunc()

};


emailfunc = () =>{
  let email = document.getElementById("email").value;
  if ((/[@]/.test(email) == false) ||( /[.]/.test(email) == false)) {
    document.getElementById("email").style.backgroundColor = "red";
    return false;
  }
  else{
    document.getElementById("email").style.backgroundColor = "green"
    return true
  }
}

// part of form1 validation
passwordfun = () => {
  let lpassword = document.getElementById("password").value;
  if (lpassword.length < 10 || lpassword.length > 25) {
    document.getElementById("password").style.backgroundColor = "red"
    // alert(
    //   "Length should be greter or equal to 10 char  and less than  equal to 25 char "
    // );

    return false;
  }

  else if (/[A-Z]/.test(lpassword) == false || /[a-z]/.test(lpassword) == false || /[0-9]/.test(lpassword) == false) {
    document.getElementById("password").style.backgroundColor = "red"
    // alert(
    //   "Password require atleast one Uppercase, Lower case, and Numeric value"
    // );
    return false;
  }

  else {    document.getElementById("password").style.backgroundColor = "green"
  return true;
}
};








form2 = () => {
  var name = document.getElementById("name").value;
  var lname = document.getElementById("lname").value;
  var email1 = document.getElementById("email1").value;
  var conemail1 = document.getElementById("conemail1").value;
  var pass1 = document.getElementById("pass1").value;
  var conpass1 = document.getElementById("conpass1").value;

  if (
    name == "" ||
    lname == "" ||
    email1 == "" ||
    conemail1 == "" ||
    pass1 == "" ||
    conpass1 == ""
  ) {
    alert("Cant be empty");
    return false;
  }
};


fname123 = () => {
  var name = document.getElementById("name").value;
 
  for (var k = 0 ; k < name.length ;k++) {
    if (/[A-Z]/i.test(name[k]) == false) {
      document.getElementById("name").style.backgroundColor="red";
      // alert("name and last name will only contain Alphabets");
      break;
    }
    else {      
      document.getElementById("name").style.backgroundColor = "green";
      
    }
     
  }
};

lname123 = () => {
  var lname = document.getElementById("lname").value;
  for (var k = 0 ; k < lname.length ;k++) {
    if (/[A-Z]/i.test(lname[k]) == false) {
      document.getElementById("lname").style.backgroundColor = "red"
      // alert("name and last name will only contain Alphabets");
      
      break;
    }
    else {      
      document.getElementById("lname").style.backgroundColor = "green"
     
    }
     
  }
}
// password validation for form 2

emailfunc2 = () =>{
  let email = document.getElementById("email1").value;
  if ((/[@]/.test(email) == false) ||( /[.]/.test(email) == false)) {
    document.getElementById("email1").style.backgroundColor = "red"
    return false;
  }
  else{
    document.getElementById("email1").style.backgroundColor = "green"
    return true;
  }
}

conmail = () => {
  let conemail1 = document.getElementById("conemail1").value;
  let email1 = document.getElementById("email1").value;
  if (email1 != "" && conemail1 != email1) {
    document.getElementById("conemail1").style.backgroundColor = "red"
    // alert("Confirm email didn't match");
    return false;
  }
  else {
    document.getElementById("conemail1").style.backgroundColor = "green"
    return true;
  }
};




passwordfunc2 = () => {
  let pass1 = document.getElementById("pass1").value;

  if (pass1.length < 10 || pass1.length > 25) {
    document.getElementById("pass1").style.backgroundColor = "red"
    // alert(
    //   "Length should be greter or equal to 10 char  and less than  equal to 25 char "
    // );
    return false;
  }

  else if (
    /[A-Z]/.test(pass1) == false ||
    /[a-z]/.test(pass1) == false ||
    /[0-9]/.test(pass1) == false
  ) {
    document.getElementById("pass1").style.backgroundColor = "red"
    // alert(
    //   "Password require atleast one Uppercase, Lower case, and Numeric value"
    // );
    return false;
  }

  else  {
    document.getElementById("pass1").style.backgroundColor = "green"
    return true;

  }
}

// confirm password for form 2

conpassword = () => {
  let conpass1 = document.getElementById("conpass1").value;
  let pass1 = document.getElementById("pass1").value;
  if (pass1 != "" &&  conpass1 != pass1) {
    document.getElementById("conpass1").style.backgroundColor = "red"
    // alert("Password didn't match");
    return false;
  }
  else {
    document.getElementById("conpass1").style.backgroundColor = "green"
    return true;
  }

};

// confirm email for form 2




