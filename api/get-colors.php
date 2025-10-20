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

$stmt = $pdo->query("SELECT * FROM colors ORDER BY created_at");
$colors = $stmt->fetchAll(PDO::FETCH_ASSOC);
error_log("" . count($colors) . "");
echo json_encode($colors);