var counter;


$('body').keypress(function(e) { //ditects weather I pressed a key
    console.log(e.keyCode); // keyCode is the actual key pressed


    if (counter < 8) { //see if the storage has less than 8 items in it
        counter++;

        if (e.keyCode == 97) { // if any data is this # than ...	// console.log(data);
            $('#image').append('<img src="images/letter.png">');
						$( 'img' ).css({"height":"60%","position":"fixed"} );
        } //add image}
        if (e.keyCode == 98) {
            $('#image2').append('<img src="images/letter2.png">');
							$( 'img' ).css({"height":"60%","position":"fixed"} );
        }
        if (e.keyCode == 99) {
            $('#image3').append('<img src="images/letter3.png">');
							$( 'img' ).css({"height":"60%","position":"fixed"} );
        }
        if (e.keyCode == 100) {
            $('#image4').append('<img src="images/letter4.png">');
							$( 'img' ).css({"height":"60%","position":"fixed"} );
        }
        if (e.keyCode == 101) {
            $('#image').append('<img src="images/letter5.png">');
							$( 'img' ).css({"height":"60%","position":"fixed"} );
        }
        if (e.keyCode == 102) {
            $('#image2').append('<img src="images/letter6.png">');
							$( 'img' ).css({"height":"60%","position":"fixed"} );
        }
        if (e.keyCode == 103) {
            $('#image3').append('<img src="images/letter7.png">');
							$( 'img' ).css({"height":"60%","position":"fixed"} );
        }
        if (e.keyCode == 104) {
            $('#image4').append('<img src="images/letter8.png">');
							$( 'img' ).css({"height":"60%","position":"fixed"} );
        }
        if (e.keyCode == 105) {
            $('#image').append('<img src="images/letter9.png">');
							$( 'img' ).css({"height":"60%","position":"fixed"} );
        }
        if (e.keyCode == 106) {
            $('#image2').append('<img src="images/letter10.png">');
							$( 'img' ).css({"height":"60%","position":"fixed"} );
        }
        if (e.keyCode == 107) {
            $('#image3').append('<img src="images/letter11.png">');
							$( 'img' ).css({"height":"60%","position":"fixed"} );
        }
        if (e.keyCode == 108) {
            $('#image4').append('<img src="images/letter12.png">');
							$( 'img' ).css({"height":"60%","position":"fixed"} );
        }
        if (e.keyCode == 109) {
            $('#image').append('<img src="images/letter13.png">');
							$( 'img' ).css({"height":"60%","position":"fixed"} );
        }
        if (e.keyCode == 110) {
            $('#image2').append('<img src="images/letter14.png">');
							$( 'img' ).css({"height":"60%","position":"fixed"} );
        }
        if (e.keyCode == 111) {
            $('#image3').append('<img src="images/letter15.png">');
							$( 'img' ).css({"height":"60%","position":"fixed"} );
        }
        if (e.keyCode == 112) {
            $('#image4').append('<img src="images/letter16.png">');
							$( 'img' ).css({"height":"60%","position":"fixed"} );
        }
        if (e.keyCode == 113) {
            $('#image').append('<img src="images/letter17.png">');
							$( 'img' ).css({"height":"60%","position":"fixed"} );
        }
        if (e.keyCode == 114) {
            $('#image2').append('<img src="images/letter18.png">');
							$( 'img' ).css({"height":"60%","position":"fixed"} );
        }
        if (e.keyCode == 115) {
            $('#image2').append('<img src="images/letter19.png">');
							$( 'img' ).css({"height":"60%","position":"fixed"} );
        }
        if (e.keyCode == 116) {
            $('#image3').append('<img src="images/letter20.png">');
							$( 'img' ).css({"height":"60%","position":"fixed"} );
        }
        if (e.keyCode == 117) {
            $('#image4').append('<img src="images/letter21.png">');
							$( 'img' ).css({"height":"60%","position":"fixed"} );
        }
        if (e.keyCode == 118) {
            $('#image').append('<img src="images/letter22.png">');
							$( 'img' ).css({"height":"60%","position":"fixed"} );
        }
        if (e.keyCode == 119) {
            $('#image2').append('<img src="images/letter23.png">');
							$( 'img' ).css({"height":"60%","position":"fixed"} );
        }
        if (e.keyCode == 120) {
            $('#image3').append('<img src="images/letter24.png">');
							$( 'img' ).css({"height":"60%","position":"fixed"} );
        }
        if (e.keyCode == 121) {
            $('#image4').append('<img src="images/letter25.png">');
							$( 'img' ).css({"height":"60%","position":"fixed"} );
        }
        if (e.keyCode == 122) {
            $('#image2').append('<img src="images/letter26.png">');
							$( 'img' ).css({"height":"60%","position":"fixed"} );
        }


    } else { // since not less than 8 .. reset
        counter = 0;
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
