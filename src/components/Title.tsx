import GenshinLogo from "../assets/genshin_impact_logo.svg";
import TCGLogo from "../assets/tcg_logo.webp";
import TextLogo from "../assets/text_logo.svg";
import "../styles/Header.scss";

function Title() {
	return (
		<div className="main-title-container">
			<div className="logo-container">
				<img id="genshin-logo" src={GenshinLogo} alt="genshin logo" />
				<div className="divide">X</div>
				<div className="tcg-logo-container">
					<a href="https://github.com/NovaCat35/memory-cards">
						<img id="tcg-logo" src={TCGLogo} alt="tcg cards logo" />
					</a>
					<img id="text-logo" src={TextLogo} alt="text logo" />
				</div>
			</div>
			<p>A fan-made project inspired by Genshin's TCG.</p>
		</div>
	);
}

export default Title;
