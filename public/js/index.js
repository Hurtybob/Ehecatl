$(".glyphicon-plus").click(function(){
  var link = $('#link');
  link.focus()

  var key = link.val();
  if (key.substr(key.length - 1) === "/"){
    key = key.slice(0,-1);
    key = key.substr(key.length - 11)
  } else {
    key = key.substr(key.length - 11)
  }

  $(".youtube").append("<div class=\"iframe\"> <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/" + key + "?version=3&autoplay=1&loop=1&playlist=" + key + "\" frameborder=\"0\"></iframe><button class=\"remove-iframe btn btn-default\" name=\"r\" type=\"button\" onclick=\"r(this); return false;\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button></div>");
})

function r(e){
  e.parentElement.remove();
}
