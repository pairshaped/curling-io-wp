<?php

$curlcast_widgets_api = CURLCAST_V2_DEFAULT_WIDGETS;
$curlcast_api_host = CURLCAST_V2_DEFAULT_API;
$curlcast_api_key = get_option('curlcast_v2_api_key', '');

$page_id = get_option('curlcast_v2_scoreboard_page');
$base_url = get_page_link($page_id);

$div_id = "curlcast-mini";
?>

<!-- curling.io v<? echo CURLCAST_V2_RELEASE; ?> -->
<div id='<?php echo $div_id; ?>' class="curlcast-v2 curlcast-mini"></div>
<script type="text/javascript">window.CurlcastWidgetsV2 = window.CurlcastWidgetsV2 || { LANGUAGE: "<?php echo $curlcast_language ?>"}</script>
<script type="text/javascript">window.CurlCastWidgets.mountMini({widgetsApi: "<?php echo $curlcast_widgets_api; ?>", apiHost: "<?php echo $curlcast_api_host; ?>", apiKey: "<?php echo $curlcast_api_key; ?>", baseUrl: "<?php echo $base_url; ?>"}, document.getElementById("<?php echo "$div_id"; ?>"));</script>
