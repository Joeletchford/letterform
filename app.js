var counter;


$('body').keypress(function(e) { //ditects weather I pressed a key
  console.log(e.keyCode); // keyCode is the actual key pressed


  if (counter < 8) { //see if the storage has less than 8 items in it
    counter ++;

    if (e.keyCode == 97) { // if any data is this # than ...	// console.log(data);
		$('#image').append('<img src="images/letter.png">');} //add image}
		if (e.keyCode == 98) {
		$('#image2').append('<img src="images/letter2.png">');}
    if (e.keyCode == 99) {
  		$('#image3').append('<img src="images/letter3.png">');}
    if (e.keyCode == 100) {
      $('#image4').append('<img src="images/letter4.png">');}
    if (e.keyCode == 101) {
      $('#image').append('<img src="images/letter5.png">');}
    if (e.keyCode == 102) {
      $('#image2').append('<img src="images/letter6.png">');}
    if (e.keyCode == 103) {
      $('#image3').append('<img src="images/letter7.png">');}
    if (e.keyCode == 104) {
      $('#image4').append('<img src="images/letter8.png">');}
    if (e.keyCode == 105) {
      $('#image').append('<img src="images/letter9.png">');}
    if (e.keyCode == 106) {
      $('#image2').append('<img src="images/letter10.png">');}
    if (e.keyCode == 107) {
      $('#image3').append('<img src="images/letter11.png">');}
    if (e.keyCode == 108) {
      $('#image4').append('<img src="images/letter12.png">');}
    if (e.keyCode == 109) {
      $('#image').append('<img src="images/letter13.png">');}
    if (e.keyCode == 110) {
      $('#image1').append('<img src="images/letter14.png">');}
      if (e.keyCode == 111) {
        $('#image2').append('<img src="images/letter.png">');}
      if (e.keyCode == 112) {
        $('#image3').append('<img src="images/letter2.png">');}
      if (e.keyCode == 113) {
        $('#image4').append('<img src="images/letter3.png">');}
      if (e.keyCode == 114) {
        $('#image').append('<img src="images/letter4.png">');}
      if (e.keyCode == 115) {
        $('#image2').append('<img src="images/letter5.png">');}
      if (e.keyCode == 116) {
        $('#image3').append('<img src="images/letter6.png">');}
      if (e.keyCode == 117) {
        $('#image4').append('<img src="images/letter7.png">');}
      if (e.keyCode == 118) {
        $('#image').append('<img src="images/letter8.png">');}
      if (e.keyCode == 119) {
        $('#image1').append('<img src="images/letter9.png">');}
        if (e.keyCode == 120) {
          $('#image4').append('<img src="images/letter10.png">');}
        if (e.keyCode == 121) {
          $('#image').append('<img src="images/letter11.png">');}
        if (e.keyCode == 122) {
          $('#image1').append('<img src="images/letter12.png">');}


  } else { // since not less than 8 .. reset
counter=0;
    $('#image').empty(); // clear all images in tag
		$('#image2').empty();
		$('#image3').empty();
		$('#image4').empty();
	}

});





//

// <img src = "" id="image">
//
// $('#image').attr('<img src="' +e.keyCode+ '.jpg">')
//
//
//


// 	var image = document.createElement("IMG");
// 	image.alt = "Alt information for image"
// 	image.setAttribute('class', 'image');
// 	image.src= "/images/letter5.png", "/images/letter6.png", "/images/letter7.png";
//
// 	if( e.keyCode == 97 )
// 		 $( "#image" ).prepend(image);
// 	console.log( "Handler for .keypress() called." );
// });
