
   document.querySelector("#local").addEventListener("click",handleLocal);
   document.querySelector("#session").addEventListener("click",handleSession);
   displayData(JSON.parse(localStorage.getItem("students")) || [],"#local_storage_data","Local Storage Data");
   displayData(JSON.parse(sessionStorage.getItem("students")) || [],"#session_storage_data","Session Storage Data");
//5 times
//local storage will have the array with 5 object
function handleSession(event){
    event.preventDefault();


    // To get the value from the form by passing id
      store(sessionStorage,"#session_storage_data","Session Storage Data");
   
 }  

function handleLocal(event){
      event.preventDefault();


      // To get the value from the form by passing id
        store(localStorage,"#local_storage_data","Local Storage Data");
     
   }

   function store(storage,id,heading){
    let name= document.querySelector("#name").value;
    let score= document.querySelector("#score").value;
    //truth value and the false value
    if(!name || !score){
        return;
    }
   
    let arr=JSON.parse(storage.getItem("students")) || [];
    let obj={
      n : name,
      s : score
    }
    arr.push(obj);
    //store the value into the local Storage
    storage.setItem("students", JSON.stringify(arr));


   //Display the result
    displayData(arr,id,heading);
   }


   function displayData(arr,id,heading){
    console.log("Display");
    document.querySelector(id).innerHTML="<div id='heading'><h3>"+heading+"</h3><div>";
    let table=document.createElement("table");
    let row=document.createElement("tr");
    let col1=document.createElement("th");
    let col2=document.createElement("th");
    col1.innerText="Name";
    col2.innerText="Score";
    
    table.appendChild(row);
    row.append(col1,col2);

    for(let i=0;i<arr.length;i++){
      //create a row
      row=document.createElement("tr");
      // Created 2 columns
      col1=document.createElement("td");
      col2=document.createElement("td");
      //I have added the data of the form to the column
      col1.innerText=arr[i].n;
      col2.innerText=arr[i].s;
      // I have linked row with these 2 columns
      row.append(col1,col2);
      console.log(row);
      //I linked the tbody with the row.
        (table).appendChild(row);
    }
    document.querySelector(id).appendChild(table);
   }
