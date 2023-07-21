<?php
$data_path = __DIR__ . '/../../../database/datas.json';

header('Content-Type: application/json');
$data_json = file_get_contents($data_path);

$tasks = json_decode($data_json, true);

$id = $_POST['id'] ?? null;
if ($id) {
    $filtered_tasks = [];

    foreach ($tasks as $task) {
        if ($task['id'] != $id) $filtered_tasks[] = $task;
    }

    $tasks = json_encode($filtered_tasks);
    file_put_contents($data_path, $tasks);
}

echo $tasks;
