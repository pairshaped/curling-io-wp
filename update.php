<?php
include_once('./includes/version.php');

$description = 'Latest stable version of the Curlcast statistics plugin';

if (isset($_POST['action'])) {
    switch ($_POST['action']) {
      case 'version':
          echo CURLCAST_V2_RELEASE;
          break;

      case 'info':
          $obj = new stdClass();
          $obj->slug = 'curlcast.php';
          $obj->plugin_name = 'curlcast.php';
          $obj->new_version = CURLCAST_V2_RELEASE;
          $obj->requires = '3.0';
          $obj->tested = '4.3.1';
          $obj->downloaded = 1;
          $time = filemtime('update.zip');
          $obj->last_updated = date('Y-d-m', $time);
          $obj->sections = array(
              'description' => $description
          );
          $obj->download_link = 'http'.(!empty($_SERVER['HTTPS'])?'s':'').'://'.$_SERVER['SERVER_NAME'].$_SERVER['REQUEST_URI'];
          echo serialize($obj);
          break;

      case 'license':
          echo 'false';
          break;
    }
} else {
    header('Cache-Control: public');
    header('Content-Description: File Transfer');
    header('Content-Type: application/zip');
    header('Content-Disposition: attachment; filename="update.zip"');
    readfile('update.zip');
}
