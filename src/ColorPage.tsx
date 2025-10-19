import { useParams } from "react-router-dom";

function ColorPage() {
	const { colorId } = useParams<{ colorId: string }>();

	return <div>ColorPage - Color ID is {colorId}</div>;
}

export default ColorPage;