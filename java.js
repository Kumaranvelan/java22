document.getElementById("myForm")
document.addEventListener("submit", function (event) {
    event.preventDefault();
    const form  = event.target; 
    const formData = new FormData(form)
    var data = {}
    for(let x of formData.entries()){
        data[x[0]] = x[1]
console.log(x[1]);
    }
    console.log(data,'data')
    localStorage.setItem('data', JSON.stringify(data))

  });


document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('myForm');
  const tableBody = document.getElementById('tableBody'); 




  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior


    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phonenumber = document.getElementById('number').value;
    const web = document.getElementById('website').value;
    const contact = document.getElementById('contact').value;
    const phone = document.getElementById('phone').value;
    const another  = document.getElementById('another').value;
    const notes = document.getElementById('notes').value;
    const type = document.getElementById('small').value;
    const category = document.getElementById('category').value;
    const comm = document.getElementById('commission').value;
    const  active = document.getElementById('date').value;
    const file = document.getElementById('file').value;
    const critic = document.getElementById('yes').value;
    const payment = document.getElementById('payment').value;
    const del =  document.getElementsByClassName("delete").value;



    // Create a new table row
    const newRow = document.createElement('tr');
    const nameCell = document.createElement('td');
    const emailCell = document.createElement('td');
    const list3cell= document.createElement('td'); 
    const list4cell = document.createElement('td');
    const list5cell = document.createElement('td');
    const list6cell = document.createElement('td');
    const list7cell = document.createElement('td');
    const list8cell = document.createElement('td');
    const list9cell = document.createElement('td');
    const list10cell = document.createElement('td');
    const list11cell = document.createElement('td');
    const list12cell = document.createElement('td');
    const list13cell = document.createElement('td');
    const list14cell = document.createElement('td');
    const list15cell = document.createElement('td');
    const list16cell = document.createElement('td');





    nameCell.textContent = name;
    emailCell.textContent = email;
    list3cell.innerHTML = phonenumber;
    list4cell.innerHTML = web;
    list5cell.innerHTML = contact;
    list6cell.innerHTML = phone;
    list7cell.innerHTML = another;
    list8cell.innerHTML = notes;
    list9cell.textContent = type;
    list10cell.textContent = category;
    list11cell.innerHTML = comm;
    list12cell.innerHTML = active;
    list13cell.innerHTML = file;
    list14cell.innerHTML = critic;
    list15cell.innerHTML = payment;
    list16cell.innerHTML =del; 
    list16cell.innerHTML =`<button onClick = "onEdit(this)">Edit</button>
                            <button onClick = "deleteRow(this)">Delete</button>`; //""''""


    newRow.appendChild(nameCell);
    newRow.appendChild(emailCell);
    newRow.appendChild(list3cell);
    newRow.appendChild(list4cell);
    newRow.appendChild(list5cell);
    newRow.appendChild(list6cell);
    newRow.appendChild(list7cell);
    newRow.appendChild(list8cell);
    newRow.appendChild(list9cell);
    newRow.appendChild(list10cell);
    newRow.appendChild(list11cell);
    newRow.appendChild(list12cell);
    newRow.appendChild(list13cell);
    newRow.appendChild(list14cell);
    newRow.appendChild(list15cell);
    newRow.appendChild(list16cell);




    tableBody.appendChild(newRow); 

  });


  });

  function deleteRow(button) {
         var row = button.parentNode.parentNode; 
         row.parentNode.removeChild(row); 
       }



// document.getElementById("myForm")
// document.addEventListener("submit", function (event) {
//     event.preventDefault();
//     const form  = event.target; 
//     const formData = new FormData(form)
//     var data = {}
//     for(let x of formData.entries()){
//         data[x[0]] = x[1]
// console.log(x[1]);
//     }
//     console.log(data,'data')
//     localStorage.setItem('data', JSON.stringify(data))

//   });


// document.addEventListener('DOMContentLoaded', function() {
//   const form = document.getElementById('myForm');
//   const tableBody = document.getElementById('tableBody'); 

  


//   form.addEventListener('submit', function (event) {
//     event.preventDefault(); // Prevent the default form submission behavior


//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const phonenumber = document.getElementById('number').value;
//     const web = document.getElementById('website').value;
//     const contact = document.getElementById('contact').value;
//     const phone = document.getElementById('phone').value;
//     const another  = document.getElementById('another').value;
//     const notes = document.getElementById('notes').value;
//     const type = document.getElementsById('small' ).value;
//     const category = document.getElementById('category').value;
//     const comm = document.getElementById('commission').value;
//     const  active = document.getElementById('date').value;
//     const file = document.getElementById('file').value;
//     const critic = document.getElementById('yes').value;
//     const payment = document.getElementById('payment').value;
//     const del =  document.getElementsByClassName("delete").value;

    

//     // Create a new table row
//     const newRow = document.createElement('tr');
//     const nameCell = document.createElement('td');
//     const emailCell = document.createElement('td');
//     const list3cell= document.createElement('td'); 
//     const list4cell = document.createElement('td');
//     const list5cell = document.createElement('td');
//     const list6cell = document.createElement('td');
//     const list7cell = document.createElement('td');
//     const list8cell = document.createElement('td');
//     const list9cell = document.createElement('td');
//     const list10cell = document.createElement('td');
//     const list11cell = document.createElement('td');
//     const list12cell = document.createElement('td');
//     const list13cell = document.createElement('td');
//     const list14cell = document.createElement('td');
//     const list15cell = document.createElement('td');
//     const list16cell = document.createElement('td');
  
    



//     nameCell.textContent = name;
//     emailCell.textContent = email;
//     list3cell.innerHTML = phonenumber;
//     list4cell.innerHTML = web;
//     list5cell.innerHTML = contact;
//     list6cell.innerHTML = phone;
//     list7cell.innerHTML = another;
//     list8cell.innerHTML = notes;
//     list9cell.innerHTML = type;
//     list10cell.textContent = category;
//     list11cell.innerHTML = comm;
//     list12cell.innerHTML = active;
//     list13cell.innerHTML = file;
//     list14cell.innerHTML = critic;
//     list15cell.innerHTML = payment;
//     list16cell.innerHTML =del; 
//     list16cell.innerHTML =`<button onClick = "onEdit(this)">Edit</button>
//                             <button onclick = "deleteRow(this)">Delete</button>`;
    

//     newRow.appendChild(nameCell);
//     newRow.appendChild(emailCell);
//     newRow.appendChild(list3cell);
//     newRow.appendChild(list4cell);
//     newRow.appendChild(list5cell);
//     newRow.appendChild(list6cell);
//     newRow.appendChild(list7cell);
//     newRow.appendChild(list8cell);
//     newRow.appendChild(list9cell);
//     newRow.appendChild(list10cell);
//     newRow.appendChild(list11cell);
//     newRow.appendChild(list12cell);
//     newRow.appendChild(list13cell);
//     newRow.appendChild(list14cell);
//     newRow.appendChild(list15cell);
//     newRow.appendChild(list16cell);
    
    

    
//     tableBody.appendChild(newRow); 

//   });
   

//   function deleteRow(button) {
//     var row = button.parentNode.parentNode; // Get the row element
//     row.parentNode.removeChild(row); // Remove the row from the table
//   }
  
  
  
//   });





