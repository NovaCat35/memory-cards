import { useEffect } from "react";
import loadingVideo from "../../assets/klee-trip-loading.mp4";
import "../../styles/LoadingPage.scss";

type LoadingPageProps = {
	setDifficultyActive: React.Dispatch<React.SetStateAction<boolean>>;
	setPageActive: React.Dispatch<React.SetStateAction<boolean>>;
};

function LoadingPage({ setPageActive, setDifficultyActive }: LoadingPageProps) {
   useEffect(() => {
      const intervalId = setInterval(() => {
        setPageActive(false);
        setDifficultyActive(true);
      }, 5000);
  
      return () => clearInterval(intervalId); // Cleanup the interval on unmount
    }, [setPageActive, setDifficultyActive]);

	return (
		<div className="loading-screen">
         <h1>Loading...</h1>
			<video autoPlay muted loop playsInline id="loadingVideo">
				<source src={loadingVideo} type="video/mp4" />
			</video>
		</div>
	);
}

export default LoadingPage;
