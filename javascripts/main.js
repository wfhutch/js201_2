
requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'firebase': '../bower_components/firebase/firebase',
    'hbs': '../bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min',
  },
  shim: {
    'bootstrap': ['jquery'],
    'firebase': {
      exports:'Firebase'
    }
  }
});

requirejs(["jquery", "hbs", "bootstrap","firebase", "add-family", "remove-family"], 
  function($, Handelbars, bootstrap, _firebase, addFamily, removeFamily) {

  var myFirebaseRef = new Firebase("https://js201-family.firebaseio.com/");
    myFirebaseRef.child("family").on("value", function(snapshot) {

    var family = snapshot.val();

    // console.log(family);

    var familyArray = [];

    for (var i in family) {
      familyArray[familyArray.length] = family[i];
    }
    // console.log(familyArray);

    var familyObject = {family: familyArray};
    // console.log(familyObject);

    require(['hbs!../templates/family'], function(familyTemplate) {
      $("#family").html(familyTemplate(familyObject));
    });
  });
});



