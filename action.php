<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	$listStr = $_POST["list"];
	$subsetStr = $_POST["subset"];

	// Parse linked list from input string
	$listArr = explode(" ", $listStr);
	$list = array();
	foreach ($listArr as $val) {
		$list[] = intval($val);
	}

	// Parse subset from input string
	$subsetArr = explode(" ", $subsetStr);
	$subset = array();
	foreach ($subsetArr as $val) {
		$subset[] = intval($val);
	}

	// Find number of connected components in linked list subset
	$num_components = 0;
	for ($i = 0; $i < count($subset); $i++) {
		$val = $subset[$i];
		if (in_array($val, $list) && ($i == 0 || !in_array($subset[$i-1], $list) || $subset[$i-1] == $val-1)) {
			$num_components++;
		}
	}

	echo json_encode(["num_components" => $num_components]);
}
?>
