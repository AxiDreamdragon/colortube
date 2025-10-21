import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ColorSwatch from "./ColorSwatch";

function ColorPage() {
	const { colorId } = useParams<{ colorId: string }>();
	const [color, setColor] = useState<any>({});
	const [similarColors, setSimilarColors] = useState<any[]>([]);

	useEffect(() => {
		const getColors = async () => {
			const response = await fetch(`/api/get-color.php?id=${colorId}`);
			const json = await response.json();

			if (json.error) {
				console.error(json.error);
				return;
			}

			setColor(json);

			const params = new URLSearchParams({
				red: json.red,
				green: json.green,
				blue: json.blue,
				color_string: json.color_string,
				count: "10",
			})

			const simResponse = await fetch(`/api/get-similar-colors.php?${params}`);
			const simJson = await simResponse.json();
			setSimilarColors(simJson);
		}

		getColors();
	}, [colorId]);

	if (!color.color_string) {
		return <p>Couldn't find a color with ID #{colorId}</p>;
	}

	return (
		<div className="color-page">
			<div className="color-fill" style={{
				backgroundColor: color.color_string,
			}}>
				<div className="color-information">
					<p>Color #{colorId}</p>
					<p>{color.color_string}</p>
					<p><sub>Created at {color.created_at}</sub></p>
				</div>
			</div>
			<div className="color-suggestions">
				<h2 style={{ marginTop: 0 }}>Similar colors</h2>
				<div>
					{similarColors.map((simColor, i) =>
						<ColorSwatch key={i} color={simColor} />
					)}
				</div>
			</div>
		</div>);
}

export default ColorPage;