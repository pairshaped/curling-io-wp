function resize_iframe_post(frame_id)
	{
	var target = parent.postMessage ? parent : (parent.document.postMessage ? parent.document : undefined);

	jQuery.postMessage(
		jQuery('body').outerHeight(true) + '',
		'*',
		target
		);
	}

jQuery('document').ready(function(){
	resize_iframe_post('stats-frame');
	});
