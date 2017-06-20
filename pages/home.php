<?php 

foreach($db->query('SELECT * FROM Name_list') as $obj):
  $names_array = explode(";", $obj->name_list);

endforeach;

?>
<p id=textDiv></p>
<div class="buttonBox">
	<button id="yes_button">Yes</button>
	<button id="no_button">No</button>
	<button id="restart_button">Restart</button>

</div>