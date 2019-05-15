(function() {
  // menuBtnState holds 0 when the topics is not displayed and 1 otherwise
  let menuBtnState = 0;
  document.getElementById("menu-btn").addEventListener("click", function(){
      if (menuBtnState == 0) {
        document.getElementById("topics").style.display = 'block';
        menuBtnState = 1;
      }
      else {
        document.getElementById("topics").style.display = 'none';
        menuBtnState = 0;
      }
  });

})();
