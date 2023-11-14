import { useState, useContext, createContext } from "react";
import useSound from "use-sound";
import cakesAndAle from "../assets/audio/cakes_and_ale_for_the_exiled.mp3";
import halcyonTimes from "../assets/audio/halcyon_times.mp3";
import catsTail from "../assets/audio/cats_tail.mp3";
import angelsShare from "../assets/audio/angels_share.mp3";
import pluieSurLaVille from "../assets/audio/pluie_sur_la_ville.mp3";
import bustlingAfternoon from "../assets/audio/bustling_afternoon_in_mondstadt.mp3";
import wreckOfEternalBane from "../assets/audio/wreck_of_eternal_bane.mp3";
import a1 from "../assets/audio/8GWVSCF-snap.mp3";
import a2 from "../assets/audio/K3RDDQG-coins.mp3";
import a3 from "../assets/audio/QKTA234-pop.mp3";

interface soundContextType  {
   soundFiles: string[];
   currentSoundIndex: number;
   setCurrentSoundIndex: React.Dispatch<React.SetStateAction<number>>;
   playMainTrack: () => void;
   stopMainTrack: () => void;
}

interface SoundProviderProps {
	children: React.ReactNode;
 }
 

export const SoundContext = createContext<soundContextType>({} as soundContextType);
export const useSoundContext = () => useContext(SoundContext);

export const SoundProvider = ({ children }: SoundProviderProps) => {
	const soundFiles = [a1, a2, a3, halcyonTimes, angelsShare, catsTail, cakesAndAle, pluieSurLaVille, bustlingAfternoon];

	const [currentSoundIndex, setCurrentSoundIndex] = useState(0);
	const [playMainTrack, { stop: stopMainTrack }] = useSound(soundFiles[currentSoundIndex], {
		onend: () => {
			const nextIndex = (currentSoundIndex + 1) % soundFiles.length;
			setCurrentSoundIndex(nextIndex);
		},
	});

	const value = {
		soundFiles,
		currentSoundIndex,
		setCurrentSoundIndex,
		playMainTrack,
		stopMainTrack,
	};

	return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>;
};
