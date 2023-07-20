<?php
$data_path = __DIR__ . '/../../database/datas.json';

$data_json = file_get_contents($data_path);

$tasks = json_decode($data_json);

header('Content-Type: application/json');

echo json_encode($tasks);
