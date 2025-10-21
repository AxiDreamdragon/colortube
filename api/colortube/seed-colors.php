<?php

$count = 100;

if ($argc > 1) {
	$count = (int) $argv[1];
}

$dbFile = __DIR__ . '/colortube.db';
$pdo = new PDO("sqlite:$dbFile");

$pdo->exec("CREATE TABLE IF NOT EXISTS colors (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	color_string TEXT,
	red INTEGER CHECK(red >= 0 AND red <= 255),
	green INTEGER CHECK(green >= 0 AND green <= 255),
	blue INTEGER CHECK(blue >= 0 AND blue <= 255),
	created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)");

$stmt = $pdo->prepare("INSERT INTO colors (color_string, red, green, blue, created_at) VALUES (?, ?, ?, ?, ?)");

for ($i = 0; $i < $count; $i++) {
	$r = rand(0, 255);
	$g = rand(0, 255);
	$b = rand(0, 255);
	$c = "rgb($r,$g,$b)";
	$timestamp = time() - rand(0, 10800); // Random timestamp within last 3 hours
	$createdAt = date("Y-m-d H:i:s", $timestamp);

	$stmt->execute([$c, $r, $g, $b, $createdAt]);
}

