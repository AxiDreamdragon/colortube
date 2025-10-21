import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
	const [color, setColor] = useState("#000000");
	const navigate = useNavigate();

	const parseHex = (hex: string) => {
		const r = parseInt(hex.slice(1, 3), 16);
		const g = parseInt(hex.slice(3, 5), 16);
		const b = parseInt(hex.slice(5, 7), 16);
		return { r, g, b };
	}

	const onSearch = () => {
		const { r, g, b } = parseHex(color);
		navigate(`/search/${r}/${g}/${b}`);
	}

	return (<div className="search">
		<label className="color-search-label">Pick a color: <br />
			<input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
		</label>
		<button onClick={onSearch}>Search</button>
	</div>);
}

export default Search;