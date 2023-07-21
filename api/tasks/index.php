<?php
$data_path = __DIR__ . '/../../database/datas.json';

header('Content-Type: application/json');
$data_json = file_get_contents($data_path);

$tasks = json_decode($data_json, true);

$task_text = $_POST['task'] ?? null;
if ($task_text) {
    $tasks = json_decode($data_json, true);
    $new_task = ['text' => $task_text, 'done' => false, 'id' => count($tasks) + 1];
    $tasks[] = $new_task;
    $json_task = json_encode($tasks);
    file_put_contents($data_path, $json_task);

    echo json_encode($new_task);
} else


    echo json_encode($tasks);
