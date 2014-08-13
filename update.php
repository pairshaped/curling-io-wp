<?php
if (isset($_POST['action']))
	{
	switch ($_POST['action'])
		{
		case 'version':
			echo '1.0.1';
			break;
		case 'info':
			$obj = new stdClass();
			$obj->slug = 'curlcast.php';
			$obj->plugin_name = 'curlcast.php';
			$obj->new_version = '1.0.1';
			$obj->requires = '3.0';
			$obj->tested = '3.9.2';
			$obj->downloaded = 12540;
			$obj->last_updated = '2014-14-08';
			$obj->sections = array(
			'description' => 'The new version of the Curlcast plugin',
			'another_section' => 'New version',
			'changelog' => 'Dropdown added'
			);
			$obj->download_link = 'http://localhost/update.php';
			echo serialize($obj);
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
	readfile('update.zip');
	}
?>