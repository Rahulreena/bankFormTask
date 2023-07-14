

//addressEditPopUp
$('.AddessPrimaryBtn').click(function(e){
    e.preventDefault();
    $('.EditAddessPopUp').fadeIn();
    $('.shimmer').fadeIn();
})

$('.CancelBtn').click(function(e){
    e.preventDefault();
    $('.EditAddessPopUp').fadeOut();
    $('.shimmer').fadeOut();
})


