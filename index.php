<?php 

require 'app/Autoloader.php';
App\Autoloader::register();
$db = new \App\Database('name');

ob_start();
require 'pages/home.php';
$content = ob_get_clean();
require 'pages/templates/default.php';


 ?>