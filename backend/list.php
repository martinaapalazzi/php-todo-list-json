<?php
/* 
    Prendo i dati li prendo dal file JSON (list.json)
*/

// Recupero il contenuto del file contenente i dati
$jsonStringFromDatabases = file_get_contents('./databases/list.json');

// Trasformo la stringa in una struttura dati utilizzabile in PHP, per effettuare una manipolazione di dati (ad esempio aggiungere una chiave, con un for per esempio)
$list = json_decode($jsonStringFromDatabases, true); // true -> ti da un arrey associativo di array; false -> ti da un array di objects che non abbiamo ancora visto.

/* for ($i = 0; $i < count($list); $i++) {
    $list[$i]['used'] = rand(0, 10);
} --> Ho aggiunto la chiave used */

// Poi lo ritrasformo in stringa per stamparlo 
// echo json_encode($list);

// Dico al client che la risposta contiene un json
header('Content-Type: application/json');

// Rispondo con il json preso dal file
echo json_encode($list); // == echo $jsonStringFromDatabases

?>