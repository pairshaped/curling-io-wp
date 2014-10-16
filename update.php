<?php
$version = '1.1.0';
$description = 'The new version of the Curlcast plugin';
$changelog = '';

if (isset($_POST['action']))
  {
  switch ($_POST['action'])
    {
    case 'version':
      echo $version;
      break;

    case 'info':
      $obj = new stdClass();
      $obj->slug = 'curlcast.php';
      $obj->plugin_name = 'curlcast.php';
      $obj->new_version = $version;
      $obj->requires = '3.0';
      $obj->tested = '3.9.2';
      $obj->downloaded = 1;
      $time = filemtime('update.zip');
      $obj->last_updated = date('Y-d-m', $time);
      $obj->sections = array(
        'description' => $description,
        'changelog' => $changelog
      );
      $obj->download_link = 'http'.(!empty($_SERVER['HTTPS'])?'s':'').'://'.$_SERVER['SERVER_NAME'].$_SERVER['REQUEST_URI'];
      echo serialize($obj);
      break;

    case 'license':
      echo 'false';
      break;
    }
  }
else
  {
  header('Cache-Control: public');
  header('Content-Description: File Transfer');
  header('Content-Type: application/zip');
  header('Content-Disposition: attachment; filename="update.zip"');
  readfile('update.zip');
  }
