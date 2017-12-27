(function() {

  window.get = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // defensive check
        if (typeof callback === "function") {
          // apply() sets the meaning of "this" in the callback
          callback(xhr.responseText);
        }
      }
    };
    xhr.send();
  }
// ----------------------------------------------------------------------------

  var url = "/data-1";

  // get() completes immediately...
  get(finalUrl, function(responseText) {
      console.log(responseText);
      window.responseText;
    }
  );



  function make_post(callback) {
    var xhr2 = new XMLHttpRequest();
    xhr2.open("POST", "/data-2", true);
    xhr2.onreadystatechange = function() {

      //if state is 4 get data
      if (xhr2.readyState == 4 && xhr2.status == 200) {
        if(typeof callback === "function") {
          console.log(xhr2.responseText);
        }
      } else {
        console.log(xhr2.statusText);
      }

    };

    xhr2.send('text');
  }


  make_post(function(){
    var data = this.responseText;
  })

})();
