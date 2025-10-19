import { useState } from "react";

function Results() {
	const [colors, setColors] = useState<string[]>([
		'#4821ae',
		'#4abf81',
		'#bdb52cff',
		'#ffae21',
		'#20134a',
		'#4821ae',
		'#9e690dff',
		'#ff0000ff',
		'#0f4428ff',
		'#eee212',
		'#563f95ff',
		'#20134a',
		'#ff0000ff',
		'#4abf81',
		'#8279a0ff',
		'#eee212',
		'#ffae21',
		'#7d62c0ff',
		'#4abf81',
		'#eee212',
		'#20134a',
		'#ff0000ff',
		'#8279a0ff',
		'#ff0000ff',
		'#0f4428ff',
		'#eee212',
		'#563f95ff',
		'#20134a',
		'#ff0000ff',
		'#4abf81',
	]);

	//TODO: Search for colors via the parameters in the URL
	return (
		<div className='color-container'>
			{colors.map((color, i) =>
				<div key={i} className='color' style={{ backgroundColor: color }}></div>)}
		</div>
	);
}

export default Results;