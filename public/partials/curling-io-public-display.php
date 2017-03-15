<?php

$curling_io_widgets_api = CURLING_IO_DEFAULT_WIDGETS;
$curling_io_api_host = CURLING_IO_DEFAULT_API;
$curling_io_api_key = get_option('curling_io_api_key', '');

$page_id = get_option('curling_io_scoreboard_page');
$base_url = get_page_link($page_id);

$div_id = "curling-io-full";
?>

<!-- curling.io v<? echo $plugin_version ?> -->
<div id='<?php echo $div_id; ?>' class="curling-io curling-io-full curlcast-v2 curlcast-full"></div>
<script type="text/javascript">window.CurlcastWidgetsV2 = window.CurlcastWidgetsV2 || { LANGUAGE: "<?php echo $language ?>"}</script>
<script type="text/javascript">window.CurlCastWidgets.mountFull({widgetsApi: "<?php echo $curling_io_widgets_api; ?>", apiHost: "<?php echo $curling_io_api_host; ?>", apiKey: "<?php echo $curling_io_api_key; ?>", baseUrl: "<?php echo $base_url; ?>"}, document.getElementById("<?php echo "$div_id"; ?>"));</script>