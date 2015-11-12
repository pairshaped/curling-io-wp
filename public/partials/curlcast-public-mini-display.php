<?php

$curlcast_widgets_api = get_option('curlcast_v2_widgets_api', 'http://widgets.curlcast.ca');
$curlcast_api_host = get_option('curlcast_v2_api_host', 'http://curlcast.ca');
$curlcast_api_key = get_option('curlcast_v2_api_key', '');

$page_id = get_option('curlcast_v2_scoreboard_page');
$base_url = get_page_link($page_id);

$uuid = uniqid();

$div_id = "curlcast-mini-{$uuid}";

?>

<aside class="curlcast-mini__container widget">
  <?php if ($title) { ?>
    <h3 class="widget-title"><?php echo $title; ?></h3>
  <?php } ?>
    <div id='<?php echo $div_id; ?>' class="curlcast-v2 curlcast-mini"></div>
</aside>

<script type="text/javascript">window.CurlcastV2 = window.CurlcastV2 || {mini: {}, full: {}}; CurlcastV2.mini.widgets_api = "<?php echo $curlcast_widgets_api; ?>"; CurlcastV2.mini.api_host = "<?php echo $curlcast_api_host; ?>"; CurlcastV2.mini.api_key = "<?php echo $curlcast_api_key; ?>"; CurlcastV2.mini.domTarget = "<?php echo $div_id; ?>";</script>

