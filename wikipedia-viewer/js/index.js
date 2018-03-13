$(function() {
  $('#search').on('click',function(){
    var searchItem = $('#searchItem').val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchItem+"&format=json&callback=?";
    $.ajax({
      url: url,
      type: 'GET',
      contentType: 'application/json; charset=utf-8',
      async: false,
      dataType: "json",
      success: function(data, status, jqXHR){
        console.log(data);
        $('ul').html("");
        for (var i = 0; i < data[1].length; i++) {
          $('ul').append("<li><div class='itemBox'><a href='"+data[3][i]+"'>"+data[1][i]+"</a><p>"+data[2][i]+"</div></li>");
          
        }
      }
    })
    .done(function(){
      console.log('Success');
    })
    .fail(function(){
      console.log('Error');
      $('ul').append("<li>Sorry! Something went wrong :\(</li>")
    })
    .always(function(){
      console.log('Complete');
    })
  });
});