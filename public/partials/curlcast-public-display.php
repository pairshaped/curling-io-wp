<?php

$curlcast_widgets_api = get_option('curlcast_v2_widgets_api', 'http://widgets.curlcast.ca');
$curlcast_api_host = get_option('curlcast_v2_api_host', 'http://curlcast.ca');
$curlcast_api_key = get_option('curlcast_v2_api_key', '');

$uuid = uniqid();

$div_id = "curlcast-full-{$uuid}";
?>

<div id='<?php echo $div_id; ?>' class="curlcast-v2 curlcast-full"></div>

<script type="text/javascript">window.CurlcastV2 = window.CurlcastV2 || {mini: {}, full: {}}; CurlcastV2.full.widgets_api = "<?php echo $curlcast_widgets_api; ?>"; CurlcastV2.full.api_host = "<?php echo $curlcast_api_host; ?>"; CurlcastV2.full.api_key = "<?php echo $curlcast_api_key; ?>"; CurlcastV2.full.domTarget = "<?php echo $div_id; ?>";</script>

