<?php

$data = file_get_contents(__DIR__ . "/../data/data.json");
header('Content-type: application/json');
echo $data;