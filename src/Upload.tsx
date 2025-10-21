import { useState } from "react";

// Pretty much the same as Search, tbh
function Upload() {
	const [color, setColor] = useState("#000000");

	const parseHex = (hex: string) => {
		const r = parseInt(hex.slice(1, 3), 16);
		const g = parseInt(hex.slice(3, 5), 16);
		const b = parseInt(hex.slice(5, 7), 16);
		return { r, g, b };
	}

	const onUpload = async () => {
		const { r, g, b } = parseHex(color);

		const params = new URLSearchParams({
			red: r.toString(),
			green: g.toString(),
			blue: b.toString(),
		});

		const response = await fetch(`/api/post-color.php?${params}`, { method: 'POST' });
		const json = await response.json();
		const newId = json.id;

		window.location.href = `/color/${newId}`;
	}

	return (<div className="upload">
		<label className="color-upload-label">Pick a color: <br />
			<input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
		</label>
		<button onClick={onUpload}>Upload</button>
	</div>);
}

export default Upload;