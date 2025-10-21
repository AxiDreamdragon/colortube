<?php

$red = $_GET["red"] ?? null;
$green = $_GET["green"] ?? null;
$blue = $_GET["blue"] ?? null;

if (!isset($red) || !isset($green) || !isset($blue)) {
	http_response_code(400);
	echo json_encode(["error" => "Missing parameters"]);
	exit;
}

$dbFile = __DIR__ . '/colortube.db';
$pdo = new PDO("sqlite:$dbFile");
$stmt = $pdo->prepare("INSERT INTO colors (color_string, red, green, blue) VALUES (?, ?, ?, ?)");
$stmt->execute(["rgb($red,$green,$blue)", $red, $green, $blue]);
$newId = $pdo->lastInsertId();
echo json_encode(["id" => $newId]);