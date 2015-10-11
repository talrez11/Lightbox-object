/*
	object for creating images lightbox	
	@ param object - Jquery element
*/

function lighthbox( container )  {
	var self = this;

	self.container = container;
	self.container_images = container.find('img');
	self.overlay = $('<div>');
	self.close_btn = $('<a>');
	self.btn_next = $('<a>');
	self.btn_previous = $('<a>');
	self.lightbox_image = $('<img>');
	self.image_title = $('<h3>');
	self.position = 0;


	// Initialize object
	self.init = function() {
		// configure lightbox container
		self.lightbox_container();
		// Attach event handler for gallery images
		self.container_images.on('click',self.handle_image);
		// Attach event handler for lightbox closing button
		self.close_btn.on('click',self.close_lightbox);
		// Attach event handler for lightbox next button
		self.btn_next.on('click',self.show_next);
		// Attach event handler for lightbox previous button
		self.btn_previous.on('click',self.show_previous);

	}

	// Create light box container element
	self.lightbox_container = function() {
		// Create lightbox div container
		
		self.overlay.attr('id','overlay')
		// Append light box container to document body
		$('body').append(self.overlay);

		// Append placeholder for image title(description)
		self.image_title.text('Lightbox Gallery Images');
		self.overlay.append(self.image_title);

		// append figure 
		var figure = $('<figure>');
		self.overlay.append(figure);

		// Append img to figure
		figure.append(self.lightbox_image);

		// Append lightbox controls (next,prev,close)
		 // close button
		self.close_btn.attr('href','javascript:void(0)');
		self.close_btn.addClass('close');
		self.overlay.append(self.close_btn);
		 // next button
		self.btn_next.attr('href','javascript:void(0)');
		self.btn_next.addClass('next');
		self.overlay.append(self.btn_next);
		 // prev button
		self.btn_previous.attr('href','javascript:void(0)');
		self.btn_previous.addClass('prev');
		self.overlay.append(self.btn_previous);
	}

	// Finction for handling item click 
	self.handle_image = function(event) {
		var image = $(this);
		// prevent default 
		event.preventDefault();
		self.overlay.addClass('open');

		// Retrieve src value of image
		var src = image.attr('src');
		self.lightbox_image.attr('src',src);

		// Retrieving title of image from image alt tag
		var title = image.attr('alt');
		self.image_title.text(title);


		// Retrieve index value(position of image in array)
		var index = self.container_images.index(image);
		self.image_position(index);

	}

	// Function displaying next image in lightbox
	self.show_next = function() {
		self.position = self.position + 1;

		if( self.position == self.container_images.length -1 ) {
			self.position = 0;
		}
		var src = self.container_images[self.position].src;
		var title = self.container_images[self.position].alt;
		self.lightbox_image.attr('src',src);
		self.image_title.text(title);
			
	}

	// Function displaying previous image in lightbox
	self.show_previous = function() {

		self.position = self.position - 1;
		if( self.position < 0 ) {
			self.position = self.container_images.length - 1;
		}		
		var src = self.container_images[self.position].src;
		var title = self.container_images[self.position].alt;

		self.lightbox_image.attr('src',src);
		self.image_title.text(title);
	}

	// Function returning index of image in array
	self.image_position = function( index ) {
		self.position = index;
	}

	// Handle closing overaly div
	self.close_lightbox = function() {
		self.overlay.removeClass('open');
	}
	

	// Initialize object
	self.init();
}

$(function(){

	light = new lighthbox($('div.imageContainer'));
})






