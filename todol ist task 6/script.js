    let add = document.getElementById("add");

    add.addEventListener("click", () => {
      let todo = document.getElementById("todo").value;
      // console.log(todo + "hi");
      if (localStorage.getItem("itemjson") == null) {
        Jsonarray = [];
        Jsonarray.push(todo);
        localStorage.setItem("itemjson", JSON.stringify(Jsonarray));
      } else {
        Jsonarraystr = localStorage.getItem("itemjson");
        Jsonarray = JSON.parse(Jsonarraystr);
        Jsonarray.push(todo);
        localStorage.setItem("itemjson", JSON.stringify(Jsonarray));
      }

      let ulofhtml = document.getElementById("list1");
      let str = "";
      Jsonarray.forEach((element, index) => {
        str += `<li>${
          index + 1
        } ${element} <button type="button" onclick = "deleted(${index})" class = "delete" ><i class="material-icons">delete</i></button> </li><br>`;
      });
      // console.log(str);
      ulofhtml.innerHTML = str;
    });

    deleted = (itemindex) => {
     
      Jsonarraystr = localStorage.getItem("itemjson");
      Jsonarray = JSON.parse(Jsonarraystr);
      // console.log(Jsonarray);
      Jsonarray.splice(itemindex,1);
      localStorage.setItem("itemjson", JSON.stringify(Jsonarray));
      let ulofhtml = document.getElementById("list1");
      let str = "";
      Jsonarray.forEach((element, index) => {
        str += `<li>${
          index + 1
        } ${element} <button type="button" onclick = "deleted(${index})" class = "delete" ><i class="material-icons">delete</i></button> </li><br>`;
      });
      // console.log(str);
      ulofhtml.innerHTML = str;
      // console.log(Jsonarray);

    };
