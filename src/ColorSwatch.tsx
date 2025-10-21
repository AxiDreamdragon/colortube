import { Link } from "react-router-dom";

function ColorSwatch({ color, thumbnail = true }: { color: any, thumbnail?: boolean }) {
	return (
		<div className="color-cell">
			<Link
				className={thumbnail ? 'thumbnail color' : 'color color-large'}
				style={{ backgroundColor: color.color_string }} to={`/color/${color.id}`} />
		</div>
	)
}

export default ColorSwatch;