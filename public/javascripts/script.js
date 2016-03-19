function getTinyURL(){
  var originalURL = $('#originalURL').val();
  alert(originalURL);
  $.ajax({
    type : 'post',
    url : 'getTinyURL',
    data : {
      'originalURL' : originalURL
    },
    success: function(response){
      $('#tinyURL').val(response);
    }
  });
}
