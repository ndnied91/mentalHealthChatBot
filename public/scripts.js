//
$('#mainInput').on('click' , ()=>{
  //add css
  $( "#mainInput" ).css( "background-color", "green" )
  $( "#mainInput" ).css( "width", "50%" )
  $( "#mainInput" ).css( "height", "400px" )
})

$(".item").on("click", function() {
  $(".item").removeClass("active");
  $(this).addClass("active");
});





// console.log('export js')
