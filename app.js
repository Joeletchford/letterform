// $("image").keypress(function (e){
// console.log(e);
//
//
//
//
//   if (e.keyCode == 13) {
//       alert('and that key just so happened to be enter');
// 			var image = document.createElement("IMG");
// 			image.alt = "Alt information for image"
// 			image.setAttribute('class', 'photo');
// 			image.src="/images/letter.png";
// 			$("image").html(image);
//
//    }
// });


// var image = document.createElement("IMG");
// image.alt = "Alt information for image"
// image.setAttribute('class', 'photo');
// image.src="/images/letter.png";
// $(#TheDiv).html(image);
//
// $(document).keypress(function(e){
//    if( e.keyCode == 13 )
//       $( "#image" ).prepend('../images/image.png');
//
// 		});

$( "#target" ).keypress(function(e) {


	var image = document.createElement("IMG");
	image.alt = "Alt information for image"
	image.setAttribute('class', 'image');
	image.src= "/images/";
	var array = ["/images/letter5.png", "/images/letter6.png", "/images/letter7.png"]

	if( e.keyCode == 97 )
		 $( "#image" ).prepend(image [0]);
	console.log( "Handler for .keypress() called." );
});
