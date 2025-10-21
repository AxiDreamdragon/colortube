import { useEffect, useState } from "react";
import ColorSwatch from "./ColorSwatch";
import { useParams } from "react-router-dom";

function Results() {
	const { red, green, blue } = useParams<{ red: string, green: string, blue: string }>();
	const [colors, setColors] = useState<[]>([]);

	useEffect(() => {
		const getColors = async () => {
			if (red && green && blue) {
				const params = new URLSearchParams({
					red: red,
					green: green,
					blue: blue,
					count: "1000",
				});
				const response = await fetch(`/api/get-similar-colors.php?${params}`);
				const json = await response.json();
				setColors(json);
			} else {
				const response = await fetch('/api/get-colors.php');
				const json = await response.json();
				setColors(json);
			}
		}

		getColors();
	}, [red, green, blue]);

	return (
		<div className='color-container'>
			{colors && colors.map((color, i) =>
				<ColorSwatch key={i} color={color} />)}
		</div>
	);
}

export default Results;