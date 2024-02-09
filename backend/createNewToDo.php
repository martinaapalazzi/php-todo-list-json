<?php 

// var_dump($_POST);

// Recuperare tutti i To Dos esistenti (con file_get_contents):

$jsonStringAllToDos = file_get_contents('./databases/list.json');

// Trasformare il file list.json in una struttura (con decode):

$allToDos = json_decode($jsonStringAllToDos, true);

// Creare il nuovo ToDo:

$newToDo = [
    'toDo' => $_POST['toDo'],
    'done' => false
];

// Aggiungere all'array il nuovo To Do:

$allToDos[] = $newToDo;

//Ritrasformare la struttura in stringa json (con encode):

$allToDosWithNewToDoJson = json_encode($allToDos);

//Scrivere la stringa json nel file list.json (dove c'è il resto dei To Dos):

file_put_contents('./databases/list.json', $allToDosWithNewToDoJson);

//Stampo 

header('Content-Type: application/json');

echo json_encode($newToDo);