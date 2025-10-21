<?php

$red = $_GET["red"] ?? null;
$green = $_GET["green"] ?? null;
$blue = $_GET["blue"] ?? null;
$color_string = $_GET["color_string"] ?? null;
$count = $_GET["count"] ?? 10;

if (!$red || !$green || !$blue || !$color_string) {
	http_response_code(400);
	echo json_encode(["error" => "Missing parameters"]);
	exit;
}

$dbFile = __DIR__ . '/colortube.db';
$pdo = new PDO("sqlite:$dbFile");

$stmt = $pdo->prepare("SELECT * FROM colors WHERE color_string != ? ORDER BY 
	((red - ?) * (red - ?) + (green - ?) * (green - ?) + (blue - ?) * (blue - ?)) ASC LIMIT ?");
$stmt->execute([$color_string, $red, $red, $green, $green, $blue, $blue, $count]);
$similarColors = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($similarColors);