$(document).ready(function(){
   // $.getJSON('db.json', function(data){
       // $.each(data, function(i, value){
       //  $('ul#Listing').append('<li>'+Listings.Location+'</li>');
      //  });
   // })
    $.ajax({
        method: 'GET',
        url: 'http://localhost:3000/Listing',
        // dataType: 'json'
    }).done(function(data){
        // console.log(data);
        $.map(data, function(post, i){
            $('#Listing').append('<li>'+post.description+'</li>' + '<br>'+'<li>'+post.location+'</li>' +'</br>'+'<li>'+post.address+'</li>'+'<br>'+'<li>'+post.contant+'</li>')
            // console.log(post)
        })
    })


    // $.getJSON( "ajax/db.json", function( data ) {
    //     var items = [];
    //     $.each( data, function( key, val ) {
    //       items.push( "<li id='" + key + "'>" + val + "</li>" );
    //     });
       
    //     $( "<ul/>", {
    //       "class": "my-new-list",
    //       html: items.join( "" )
    //     }).appendTo( "body" );
    //   });
});