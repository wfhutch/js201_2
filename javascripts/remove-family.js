define(["jquery", "firebase"], function($, _firebase) {

  $("body").on("click", "#disown", function(e) {
    e.preventDefault();
    console.log("disown clicked");
    var retVal = confirm("This will delete your family member. Click ok to continue");
      if (retVal === true) {
        var getKey = $(this).closest(".family").attr("data-key");
        console.log(getKey);
      } else {
         return false;
        }

    
    // $.ajax({
    //   url: "https://js201-family.firebaseio.com/family.json",
    //   method: "POST",
    //   data: JSON.stringify(addFamObj)
    // }).done(function () {
    //     console.log("posted");
    //     location.reload();
    // });
  });
});