// var buttonTags = document.querySelectorAll('button');
// var length = buttonTags.length;

// for(buttonTag of buttonTags) {
// 	buttonTag.onclick = function() {
// 		var buttonActive = document.querySelector('button.active');
// 		buttonActive.classList.remove('active');


// 		this.classList.add('active');
// 		var data = this.getAttribute('data');
// 		// var imgPath = 'img/' + data + '.png';
// 		var imgPath = `img/${data}.png`;
// 		var imgTag = document.querySelector('img');
// 		imgTag.src = imgPath;
// 	}

// }

var buttonTags = document.querySelectorAll('button');
var length = buttonTags.length;
for(buttonTag of buttonTags) {
	
	buttonTag.onclick = function() {
		var buttonActive = document.querySelector('button.active');
		buttonActive.classList.remove('active');
		
		this.classList.add('active');
		var data = this.getAttribute('data');
		imgPath = document.querySelector('img');
		imgTag = `img/${data}.png`;
		imgPath.src = imgTag;

	}
}






	




