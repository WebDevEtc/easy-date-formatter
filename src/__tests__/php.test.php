<?php

$date = new DateTime('2020-12-31 00:00:00', new DateTimeZone('UTC'));

$formats = ['d','D','j','l','N','S','w','z','W','F','M','m','n','t','L','o','Y','y','a','A',
    'B','g','G','h','H','i','s','u','v','e','I','O','P','T','Z','c','r','U',];

$unsupported = ['B', 'o', 'Z', 'T', 'P', 'O', 'e', 'c', 'u', 'r', 'c', 'I'];

$filteredFormats = array_filter($formats, function($format) use ($unsupported){
    return !in_array($format, $unsupported);
});

echo "Main tests: \n\n\n\n";
foreach($filteredFormats as $format) {
    echo '${"'.$format.'"}    |    ${"'. $date->format($format) .'"}' . "\n";
}

echo "\n\n\n\n";

echo "Unsupported tests: \n\n\n\n";
echo json_encode($unsupported);

echo "\n\n\n\n";
