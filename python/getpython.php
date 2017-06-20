<?php 

$output = shell_exec("python find_my_name.py");
$text = json_encode($output);

echo $text;

 ?>