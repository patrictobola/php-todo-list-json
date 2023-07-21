<?php
$data_path = __DIR__ . '/../../../database/datas.json';

header('Content-Type: application/json');
$data_json = file_get_contents($data_path);

$tasks = json_decode($data_json, true);

$id = $_POST['id'] ?? null;
if ($id) {
    $toggle_tasks = [];

    foreach ($tasks as $task) {
        if ($task['id'] == $id) $task['done'] = !$task['done'];
        $toggle_tasks[] = $task;
    }

    $tasks = json_encode($toggle_tasks);
    file_put_contents($data_path, $tasks);
}

echo $tasks;
