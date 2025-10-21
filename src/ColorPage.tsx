import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ColorPage() {
	const { colorId } = useParams<{ colorId: string }>();
	const [color, setColor] = useState<any>({});

	useEffect(() => {
		const getColor = async () => {
			const response = await fetch(`/api/get-color.php?id=${colorId}`);
			const json = await response.json();
			console.log(json);

			if (json.error) {
				console.error(json.error);
			} else {
				setColor(json);
			}
		}

		getColor();
	}, []);

	return (<div className="color-page" style={{
		backgroundColor: color.color_string,
	}}>
		{color.color_string ?
			<div className="color-information">
				<p>Color #{colorId}</p>
				<p>{color.color_string}</p>
				<p><sub>Created at {color.created_at}</sub></p>
			</div>
			:
			<p>Couldn't find a color with ID #{colorId}</p>
		}
	</div>);
}

export default ColorPage;