function resize_iframe_receive(frame_id)
	{
	jQuery.receiveMessage(function(event){
		jQuery('#'+frame_id).css({
			height: event.data*1 + 100 + 'px'
		});
	console.log(event);
	});
	}

jQuery('document').ready(function(){
	resize_iframe_receive('stats-frame');
	});