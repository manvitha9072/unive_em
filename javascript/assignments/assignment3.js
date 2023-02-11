//fetch always works no matter what 
fetch('https://reqres.in/api/users',{
    method:"POST", //any one of the http methods
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify({
        name: 'User1'
    })
    //you can't send a java script object you need to send in a json object to the server for post request  
})
  .then(res=> {
    if(res.ok) {
      console.log("SUCCESFUL")
    }else {
      console.log("NOT SUCCESFUL")
    }
    return res.json()
  })
  .then(data=>console.log(data))
  .catch(error=>console.log("ERROR"))

//fetch returns a response object
//async

//see what header does