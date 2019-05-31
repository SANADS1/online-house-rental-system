$('document').ready(function(){

  
  
    $("#submit").click(function(e){
     console.log(e);
     e.preventDefault()
    var description = $('#description').val()
    var location = $('#location').val()
     var address = $('#address').val()
    var contact = $('#contacts').val()

    
    var url = "http://localhost:3000/Listings"

     $.post(url,{description,location,address,contact}).done(function(data){
      console.log("Saved Data");
       console.log(data)
  })

    // const listing = {
    //   Description: description,
    //   Location: location,
    //   Address: address,
    //   "Contact-Number": contact
    // }

    // console.log(listing)
    // alert('hello')

    // $.ajax({
    //   type: 'POST',
    //   url:"http://localhost:3000/Listings",
    //   data: listing,
    //   success: function(data){
    //     console.log(data)
    //   }
    // })
  })


})
