<?php
$dbFile = __DIR__ . '/colortube.db';
$pdo = new PDO("sqlite:$dbFile");

$id = $_GET["id"] ?? null;

if (!$id) {
	http_response_code(400);
	echo json_encode(["error" => "No ID provided"]);
	exit;
}

$stmt = $pdo->prepare("SELECT * FROM colors WHERE id = ?");
$stmt->execute([$id]);
$color = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$color) {
	http_response_code(404);
	echo json_encode(['error' => 'Color not found']);
	exit;
}

echo json_encode($color);