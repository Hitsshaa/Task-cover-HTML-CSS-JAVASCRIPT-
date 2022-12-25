insert = (num) => {
  document.form1.answer.value = document.form1.answer.value + num;
};

equal12 = () => {
  let exp = document.form1.answer.value;
  if (exp) {
    document.form1.answer.value = eval(exp);
  }
};

AC12 = () => {
  let exp = document.form1.answer.value;
  if (exp) {
    document.form1.answer.value = "";
  }
};


// if AC is not a function at HTMLInputElement.onclick (mean  you write some func that already exist)