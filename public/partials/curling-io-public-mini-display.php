<?php

$curling_io_widgets_api = CURLING_IO_DEFAULT_WIDGETS;
$curling_io_api_host = CURLING_IO_DEFAULT_API;
$curling_io_api_key = get_option('curling_io_api_key', '');

$page_id = get_option('curling_io_scoreboard_page');
$base_url = get_page_link($page_id);

$div_id = "curling-io-mini";

$javascript = <<<JS
<script type="text/javascript">
  window.CurlcastWidgetsV2 = window.CurlcastWidgetsV2 || { LANGUAGE: "$language" };
  window.CurlCastWidgets.mountMini({
    widgetsApi: "$curling_io_widgets_api",
    apiHost: "$curling_io_api_host",
    apiKey: "$curling_io_api_key",
    baseUrl: "$base_url"
  }, document.getElementById("$div_id"));
</script>
JS;
?>

<div id='<?php echo $div_id; ?>' class="curling-io curling-io-mini curlcast-v2 curlcast-mini"></div>
<?php echo $javascript; ?>
