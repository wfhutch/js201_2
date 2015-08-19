define(["jquery", "firebase"], function($, _firebase) {

  $("#add-family").click(function(e) {
    e.preventDefault();
    console.log("click");

    var addFamObj = 
    { 
    "name": $("#name").val(),
    "age": $("#age").val(),
    "gender": $("#gender").val(),
    "skills": [$("#skills").val().split(" ")]   
    };

    console.log(addFamObj);
    
    $.ajax({
      url: "https://js201-family.firebaseio.com/family.json",
      method: "POST",
      data: JSON.stringify(addFamObj)
    }).done(function () {
        console.log("posted");
        location.reload();
    });
  });
});