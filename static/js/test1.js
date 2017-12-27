(function(){

  window.displayAlert = function(){
      alert("This is working!");
  }

  window.DisplayDate = function(){
     document.getElementById("demo").innerHTML =
       Date();
  }

})();