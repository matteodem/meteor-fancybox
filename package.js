Package.describe({
	summary : "Responsive media / lightbox repackaged for meteor"
});

Package.on_use(function(api) {
	api.use('jquery', 'client');
	api.add_files([
		'lib/jquery.fancybox.css',
        'lib/jquery.fancybox.pack.js',
        'lib/fancybox_loading.gif',
        'lib/fancybox_overlay.png',
        'lib/fancybox_sprite.png',
        'lib/blank.gif']
		, 'client');
});