import { useState, useEffect } from "react";
import loadingVideo from "../../assets/klee-trip-loading.mp4";
import "../../styles/LoadingPage.scss";

type LoadingPageProps = {
	setDifficultyActive: React.Dispatch<React.SetStateAction<boolean>>;
	setPageActive: React.Dispatch<React.SetStateAction<boolean>>;
};

function LoadingPage({ setPageActive, setDifficultyActive }: LoadingPageProps) {
	const [loadingText, setLoadingText] = useState("Loading");

	/**
	 * While I understand a loader should be set to start and finish after fetching API, this decision to keep a static loading time is for experimentation only.
	 */
	useEffect(() => {
		const intervalId = setInterval(() => {
			setPageActive(false);
			setDifficultyActive(true);
		}, 4500);

		return () => clearInterval(intervalId); // Cleanup the interval on unmount
	}, [setPageActive, setDifficultyActive]);
	
	useEffect(() => {
		const textIntervalId = setInterval(() => {
			setLoadingText((prevText) => (prevText.length < 11 ? prevText + "." : "Loading"));
		}, 500);

		return () => clearInterval(textIntervalId); // Cleanup the interval on unmount
	}, []);

	return (
		<div className="loading-screen">
			<h1>{loadingText}</h1>
			<video autoPlay muted loop playsInline id="loadingVideo">
				<source src={loadingVideo} type="video/mp4" />
			</video>
		</div>
	);
}

export default LoadingPage;
