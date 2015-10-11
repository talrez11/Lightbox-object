/*
	object for creating images lightbox	
	@ param object - Jquery element
*/

function lighthbox( container )  {
	var self = this;

	self.container = container;
	self.container_images = container.find('img');


	// Initialize object
	self.init = function() {
		self.lightbox_container();
		console.log(self.container_images);

	}

	// Create light box container element
	self.lightbox_container = function() {
		// Create lightbox div container
		var overlay = $('<div>');
		overlay.attr('id','overlay')
		// Append light box container to document body
		$('body').append(overlay);

		// Append placeholder for image title(description)
		var title = $('<h3>');
		overlay.append(title);

		// append figure 
		var figure = $('<figure>');
		overlay.append(figure);

		// Append img to figure
		var image = $('<img>');
		image.attr('src','images/350.GIF');
		figure.append(image);

		// Append lightbox controls (next,prev,close)
		 // close button
		var close_btn = $('<a>');
		close_btn.attr('href','javascript:void(0)');
		close_btn.addClass('close');
		overlay.append(close_btn);
		 // next button
		var next = $('<a>');
		next.attr('href','javascript:void(0)');
		next.addClass('next');
		overlay.append(next);
		 // prev button
		var prev = $('<a>');
		prev.attr('href','javascript:void(0)');
		prev.addClass('prev');
		overlay.append(prev);
	}

	// Finction for handling item click 
	self.handle_image = function() {

	}

	// Function displaying next image in lightbox
	self.show_next = function() {

	}

	// Function displaying previous image in lightbox
	self.show_next = function() {
		
	}

	// Function returning index of image in array
	self.image_position = function() {
		
	}

	

	// Initialize object
	self.init();
}

$(function(){

	light = new lighthbox($('div.imageContainer'));
})






