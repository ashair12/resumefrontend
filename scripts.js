document.getElementById("homeButton").onclick = function () {
      location.href = "index.html";
  };

  document.getElementById("aboutButton").onclick = function () {
      location.href = "about.html";
  };

  document.getElementById("contactButton").onclick = function () {
      location.href = "contact.html";
  };

  function invokeCounter(){
    fetch("https://jqlxga5mc9.execute-api.us-east-1.amazonaws.com/default/visitorAdd", {
  method: "POST",
  body: JSON.stringify({
    userId: 1,
    title: "Fix my bugs",
    completed: false
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
});
  }