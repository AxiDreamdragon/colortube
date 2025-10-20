import { Link } from "react-router-dom";

function ColorSwatch({ color, thumbnail = true }: { color: any, thumbnail?: boolean }) {
	return (
		<Link
			className={thumbnail ? 'thumbnail color' : 'color'}
			style={{ backgroundColor: color.color_string }} to={`/color/${color.id}`} />
	)
}

export default ColorSwatch;