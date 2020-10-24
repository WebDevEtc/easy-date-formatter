<?php

// Use this file to generate test cases.

$date = new DateTime('2020-12-31 00:00:00', new DateTimeZone('UTC'));

// All formats in PHP
$formats = ['d','D','j','l','N','S','w','z','W','F','M','m','n','t','L','o','Y','y','a','A',
    'B','g','G','h','H','i','s','u','v','e','I','O','P','T','Z','c','r','U',];

// Formats not supported in this package
$unsupported = ['B', 'o', 'Z', 'T', 'P', 'O', 'e', 'c', 'u', 'r', 'c', 'I'];

$supportedFormats = array_filter($formats, static function($format) use ($unsupported){
    return !in_array($format, $unsupported);
});

// Format for "each" syntax (see index.test.ts)
echo "Main tests: \n\n\n\n";
foreach($supportedFormats as $format) {
    echo '${"'.$format.'"}    |    ${"'. $date->format($format) .'"}' . "\n";
}

echo "\n";

echo "Unsupported tests: \n";
echo json_encode($unsupported);
echo "\n";
