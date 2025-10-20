import { useEffect, useState } from "react";
import ColorSwatch from "./ColorSwatch";


function Results() {
	const [colors, setColors] = useState<[]>([]);

	const getColors = async () => {
		const response = await fetch('/api/get-colors.php');
		const json = await response.json();
		setColors(json)
	}

	useEffect(() => {
		getColors();
	}, []);

	//TODO: Search for colors via the parameters in the URL
	return (
		<div className='color-container'>
			{colors.map((color, i) =>
				<ColorSwatch key={i} color={color} />)}
		</div>
	);
}

export default Results;