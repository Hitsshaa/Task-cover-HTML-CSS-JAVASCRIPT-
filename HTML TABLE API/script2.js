window.onload = () =>{
    console.log(typeof document.location.href.split("=")[1]);
    let value_for_post = document.location.href.split("=")[1]
    fetch(`https://jsonplaceholder.typicode.com/posts/${value_for_post}`)
  .then((response) => response.json())
  .then((json) => {
    let json_obj = json;
        str = ` <tr">
        <td>${json_obj.userId}</td>
        <td>${json_obj.id}</td>
        <td>${json_obj.title}</td>
        <td>${json_obj.body}</td>
      </tr>`
       document.getElementById("UserId").value = json_obj.userId ;
         document.getElementById("ID").value  = json_obj.id ;
         document.getElementById("Title").value   = json_obj.title ;
         document.getElementById("Body").value =json_obj.body   ;

      
    document.getElementById("tbody2").innerHTML = str;
});
  
    };


    

    const submit1 = () =>{
    
        let valueUserId = Number.parseFloat(document.getElementById("UserId").value);
        let valueID =  Number.parseFloat(document.getElementById("ID").value);
        let valueTitle =  document.getElementById("Title").value;
        let valueBody =  document.getElementById("Body").value;
        
        console.log(typeof valueUserId)
    
        if (valueUserId =="" || valueID == "" || valueTitle == "" ||valueBody == ""){
        alert("One of the field is empty")
        return false;
        };
    
    
        if (isNaN(valueUserId)){
          document.getElementById("pUserId").innerHTML = "It should contain only numeric value"
          document.getElementById("pUserId").style.color = "red"
          if (isNaN(valueID)){
            document.getElementById("pID").innerHTML = "It should contain only numeric value"
            document.getElementById("pID").style.color = "red"
            
          };
          return false
          
        };
       
        if (isNaN(valueID)){
          document.getElementById("pID").innerHTML = "It should contain only numeric value"
          document.getElementById("pID").style.color = "red"
          return false;
        };
    
        const emp_obj = {};
        emp_obj.userId = valueUserId;
        emp_obj.id  = valueID;
        emp_obj.title = valueTitle;
        emp_obj.body = valueBody;
        console.log("JSON.stringify(a)")
        console.log(JSON.stringify(emp_obj))
    
        fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: 'PUT',
      body: JSON.stringify(emp_obj),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
      let b = json;
      console.log(JSON.stringify(b))
      // document.getElementById("after").innerHTML =  JSON.stringify(b) +"    " + '(Updated Response)';
      alert("User UPDATE is successful");
      document.location.href = "INDEX.html"
      });
    };
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    