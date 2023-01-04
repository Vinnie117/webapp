import React, {useState, useEffect} from 'react'
import {LandingPage} from './Pages/LandingPage'

function App() {

  const [data, setData] = useState([{}])


  useEffect(() => {

    fetch('/members').then(      // fetch backend route with useEffect()
        res => res.json()        // response of route is put in json
    ).then(
        data => {
          setData(data)          // data inside json is assigned to variable "data"
          console.log(data)      // check 'data' variable
        }
    ).then(

      
    fetch('/api').then( response => {
      if(response.ok){
        return response.json()
      }
    }).then(data => {console.log(data)}
    )

    )
  // ).then(

  //   fetch('/add', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       data: data
  //     })
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //     })

  // )




// ChatGPT
// When the user submits the form, the main.js file sends a 
// POST request to the /sum route on the backend with the input numbers. 
// The backend calculates the sum and returns it to the frontend, which 
// displays the result in the result div.


// const form = document.getElementById('form');
// const table = document.getElementById('table');
// const resultDiv = document.getElementById('result');

// form.addEventListener('submit', e => {
//   e.preventDefault();
//   const formData = new FormData(form);
//   const numbers = [];
//   for (const [key, value] of formData.entries()) {
//     numbers.push(Number(value));
//   }
//   fetch('/sum', {
//     method: 'POST',
//     body: JSON.stringify({ numbers }),
//     headers: { 'Content-Type': 'application/json' }
//   })
//     .then(res => res.json())
//     .then(data => {
//       resultDiv.textContent = `The sum is: ${data.result}`;
//     })
//     .catch(err => {
//       console.error(err);
//       resultDiv.textContent = 'An error occurred, please try again.';
//     });
// });


  }, [])                         // empty array so useEffect only runs once

  return (
    <div className='App'>        

      {(typeof data.members === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        data.members.map((member, i) => (
          <p key = {i}>{member}</p>
        ))
      )}

    <div>
          <LandingPage />
    </div>

    </div>
    
  );
}

export default App;
