// {/* <p style= "color: black;">Don't have an account?<a href="registerform.html" id="">Register Form</a></p> */}
const update_table = (data) =>{
  let json_obj = data;
  // console.log(a[0].userId);
  str = ``;
  for (let i = 0; i < json_obj.length; i++) {
    str =
      str +
      ` <tr class = "${i + 1}" name = "${json_obj[i].userId}">
    <td>${json_obj[i].userId}</td>
    <td>${json_obj[i].id}</td>
    <td>${json_obj[i].title}</td>
    <td>${json_obj[i].body}</td>
    <td>    <input type="button" class="blue btn btn-success"  id = "${
      i + 1
    }" value="Edit" onclick = "edit(this)">    <input type="button" value="Delete" class= " btn btn-success red" id = "${
        i + 1
      }" onclick = "del(this)"></td>
  </tr>`;
  }
  document.getElementById("tbody").innerHTML = str;
}


window.onload = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => {
     update_table(json);
    });
};





const search = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => {
      update_table(json);

      let valueOfId = document.getElementById("Search").value;
      let c = document.getElementsByClassName(valueOfId)[0];
      if (c == undefined && valueOfId != '' ) {
        alert("Id not exist");
        return false;
      }
      let b = document.getElementsByClassName(valueOfId)[0].outerHTML;
      console.log(b);
      document.getElementById("tbody").innerHTML = b;
    });
  };

  // let valueOfId = document.getElementById("Search").value;
  // console.log(valueOfId);
  // fetch(`https://jsonplaceholder.typicode.com/posts/${valueOfId}`)
  // .then((response) => response.json())
  // .then((json) => {
  //   let a = json;
  //       str = ` <tr" class = "${valueOfId}">
  //       <td>${a.userId}</td>
  //       <td>${a.id}</td>
  //       <td>${a.title}</td>
  //       <td>${a.body}</td>
  //       <td>    <input type="button" class="blue"  id = "${valueOfId}" value="Edit" onclick = "edit(this)">    <input type="button" value="Delete" class= "red" id = "${valueOfId}" onclick = "del(this)"></td>
  //     </tr>`

  //   document.getElementById("tbody").innerHTML = str;
  // });
  // let a = document.getElementsByClassName(valueOfId)[0].outerHTML;
  // document.getElementById("tbody").innerHTML = a;


const searchByUserId = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => {
      update_table(json);
      let valueOfId = document.getElementById("Search1").value;
      console.log(valueOfId);
      let c = document.getElementsByName(valueOfId);
      console.log(c[valueOfId]);
      if (c[valueOfId - 1] == undefined) {
        alert("userId not exist");
        return false;
      }
      let b = "";

      for (let j = 0; j < c.length; j++) {
        console.log(j);
        console.log("hellow");

        b = b + c[j].outerHTML;
        console.log(b);
      }

      document.getElementById("tbody").innerHTML = b;
    });
};

const searchByTitle = () => {
  let title = document.getElementById("Search2").value;

  console.log(title);
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((res) => {
      update_table(res);
if (title!=""){
      for (i = 0; i < res.length; i++) {
        console.log(res[i]["title"]);
        const regex = new RegExp(title);
        if (regex.test(res[i]["title"])) {
          // console.log(res)
          valueOfId = i + 1;
          let part_of_table = document.getElementsByClassName(valueOfId)[0].outerHTML;
          console.log(part_of_table);
          document.getElementById("tbody").innerHTML = part_of_table;

          break;
        }
      }
    }
    });
};

// let userList = document.getElementById("userList");
// userList.addEventListener("click",runUser);       //we run get method in that segment

const del = (a) => {
  console.log(a.id);
  let b = a.id;
  console.log(document.getElementsByClassName(b));
  console.log(document.getElementsByClassName(b)[0]);
  document.getElementsByClassName(b)[0].innerHTML = "";
};

const edit = (c) => {
  console.log(c.id);
  let d = c.id;
  console.log(document.getElementsByClassName(d));
  console.log(document.getElementsByClassName(d)[0]);
  let e = document.getElementsByClassName(d)[0];
  // let value1 = document.getElementsByClassName(d)[0].childNodes[1];
  let value2 = document.getElementsByClassName(d)[0].childNodes[3].textContent;

  // let [value1,value2,value3,value4] = [document.getElementsByClassName(d)[0].childNodes[1].textContent,document.getElementsByClassName(d)[0].childNodes[3].textContent,document.getElementsByClassName(d)[0].childNodes[5].textContent,document.getElementsByClassName(d)[0].childNodes[7].textContent];
  window.location.href = `edit.html?ID=${value2}`;
};

const submit1 = () => {
  let valueUserId = Number.parseFloat(document.getElementById("UserId").value);
  let valueID = Number.parseFloat(document.getElementById("ID").value);
  let valueTitle = document.getElementById("Title").value;
  let valueBody = document.getElementById("Body").value;

  console.log(typeof valueUserId);

  if (
    valueUserId == "" ||
    valueID == "" ||
    valueTitle == "" ||
    valueBody == ""
  ) {
    alert("One of the field is empty");
    return false;
  }

  if (isNaN(valueUserId)) {
    document.getElementById("pUserId").innerHTML =
      "It should contain only numeric value";
    document.getElementById("pUserId").style.color = "red";
    if (isNaN(valueID)) {
      document.getElementById("pID").innerHTML =
        "It should contain only numeric value";
      document.getElementById("pID").style.color = "red";
    }
    return false;
  }

  if (isNaN(valueID)) {
    document.getElementById("pID").innerHTML =
      "It should contain only numeric value";
    document.getElementById("pID").style.color = "red";
    return false;
  }

  const a = {};
  a.userId = valueUserId;
  a.id = valueID;
  a.title = valueTitle;
  a.body = valueBody;
  console.log("JSON.stringify(a)");
  console.log(JSON.stringify(a));

  fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: "POST",
    body: JSON.stringify(a),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      let b = json;
      // document.getElementById("after").innerHTML =  JSON.stringify(b) +"    " + '(Updated Response)';
      alert("User ADD is successful");
      document.location.href = "INDEX.html";
    });
};

// const del = () =>{
//   let valueID =  document.getElementById("ID").value;
//   console.log(typeof valueID)
//   console.log(Number(valueID))

//   fetch(`https://jsonplaceholder.typicode.com/posts/${valueID}`, {
//     method: 'DELETE',
//   }).then((response) => response.json())
//   .then((json) => {
//     console.log(json);
//     document.getElementById("after").innerHTML = JSON.stringify(json) + "    " + '(Delete Response)';
//   });

// };
