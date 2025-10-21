<?php
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

$stmt = $pdo->prepare("INSERT INTO colors (color_string, red, green, blue) VALUES (?, ?, ?, ?)");

for ($i = 0; $i < 2500; $i++) {
	$r = rand(0, 255);
	$g = rand(0, 255);
	$b = rand(0, 255);
	$c = "rgb($r,$g,$b)";

	$stmt->execute([$c, $r, $g, $b]);
}

