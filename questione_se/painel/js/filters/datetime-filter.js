app.filter('mydatetime', function()
{
 return function(input)
 {
  if(input == null){ return ""; } 

  var _date = input.split(' ');
  var dateForm = _date[0].split("-")

  return dateForm[2]+"/"+dateForm[1]+"/"+dateForm[0];

 };
});