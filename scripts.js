document.getElementById("homeButton").onclick = function () {
      location.href = "index.html";
  };

  document.getElementById("aboutButton").onclick = function () {
      location.href = "/about/index.html";
  };

  document.getElementById("contactButton").onclick = function () {
      location.href = "/contact/index.html";
  };
/*
  function invokeCounter(){
      fetch("https://jqlxga5mc9.execute-api.us-east-1.amazonaws.com/default/visitorAdd", {
        method: "POST",
        body: JSON.stringify({
      
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
  
  }
*/

  async function retrieveCount(){

    let headers = new Headers([
      ['Content-Type', 'application/json'],
      ['Accept', 'application/json']
    ]);

    let request = new Request('https://zjivjm5gye.execute-api.us-east-1.amazonaws.com/default/resume-db', {
      method: 'GET',
      headers: headers
    });
    let result = await fetch(request);
    let response = await result.json();
    console.log(response)
    document.getElementById('response').innerHTML = JSON.stringify(response);
  }
