$(function(){

  var yearsCoding, currentAge, cYearsElement, aYearsElement, months, days, enabled;

  $("document").ready(
    enabled = $('#javascriptTest');
    enabled.text("");
    console.log("Javascript Initialized.");

    months = new Date.getMonth();
    days = new Date.getDate();

    yearsCoding = new Date.getFullYear();
    yearsCoding = yearsCoding - 2010;

    currentAge = new Date().getFullYear();
    currentAge = currentAge - 1999;
    if (months === 12) {
      if (days >=28) {
        currentAge += 1;
      }
      else {
        currentAge += 0;
      }
    }
    else {
      currentAge += 0;
    }
    console.log(months);
    console.log(days);
    console.log(currentAge);
    console.log(yearsCoding);

    cYearsElement = $('#timeCoding');
    cYearsElement.text(yearsCoding);
    aYearsElement = $('#variableAge');
    aYearsElement.text(currentAge);


  );

});
