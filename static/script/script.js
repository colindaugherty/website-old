function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

var COLINSITE = (function() {

  var yearsCoding, currentAge, cYearsElement, aYearsElement, months, days, enabled;

  function settingUp() {
    enabled = $('#javascriptTest');
    enabled.text("");
    console.log("Javascript Initialized.");

    months = new Date().getMonth()
    days = new Date().getDate();

    yearsCoding = new Date().getFullYear();
    yearsCoding = yearsCoding - 2010;

    currentAge = new Date().getFullYear();
    currentAge = currentAge - 1999;
    if (months !== 11) {
      if (days <= 28) {
        currentAge -= 1;
      }
      else {
        currentAge -= 1;
      }
    }
    else {
      currentAge += 1;
    }
    console.log(months);
    console.log(days);
    console.log(currentAge);
    console.log(yearsCoding);

    cYearsElement = $('#timeCoding');
    cYearsElement.text(yearsCoding);
    aYearsElement = $('#variableAge');
    aYearsElement.text(currentAge);
  }

  function init() {
    settingUp();
  }

  return {
    init : init,
  };
})();

ready(COLINSITE.init);
