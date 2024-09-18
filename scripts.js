document.getElementById("homeButton").onclick = function () {
      location.href = "index.html";
  };

  document.getElementById("aboutButton").onclick = function () {
      location.href = "/about/index.html";
  };

  document.getElementById("contactButton").onclick = function () {
      location.href = "/contact/index.html";
  };

  function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

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
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("highlight");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}


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
