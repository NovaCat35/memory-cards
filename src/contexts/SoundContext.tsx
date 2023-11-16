import { useState, useContext, createContext } from "react";
import useSound from "use-sound";
import cakesAndAle from "../assets/audio/cakes_and_ale_for_the_exiled.mp3";
import halcyonTimes from "../assets/audio/halcyon_times.mp3";
import catsTail from "../assets/audio/cats_tail.mp3";
import angelsShare from "../assets/audio/angels_share.mp3";
import pluieSurLaVille from "../assets/audio/pluie_sur_la_ville.mp3";
import bustlingAfternoon from "../assets/audio/bustling_afternoon_in_mondstadt.mp3";
import lumidouceHarbor from "../assets/audio/lumidouce_harbor.mp3";
import dreamOfHomeland from "../assets/audio/dream_of_homeland.mp3";

interface soundContextType {
	soundFiles: string[];
	currentSoundIndex: number;
	currSoundActive: boolean;
	playMainTrack: () => void;
	playWinTrack: () => void;
	playDefeatTrack: () => void;
	stopMainTrack: () => void;
	stopWinTrack: () => void;
	stopDefeatTrack: () => void;
	setCurrSoundActive: React.Dispatch<React.SetStateAction<boolean>>;
	setCurrentSoundIndex: React.Dispatch<React.SetStateAction<number>>;
}

interface SoundProviderProps {
	children: React.ReactNode;
}

export const SoundContext = createContext<soundContextType>({} as soundContextType);
export const useSoundContext = () => useContext(SoundContext);

/**
 * The sound context below contains crucial pause, stop, and play functionality.
 * The context retains info and logic that can be called by the children.
 * @param children (this is whatever we will be wrapping around)
 * @returns
 */
export const SoundProvider = ({ children }: SoundProviderProps) => {
	const soundFiles = [angelsShare, catsTail, halcyonTimes, cakesAndAle, pluieSurLaVille, bustlingAfternoon];
	const defeatTrack = dreamOfHomeland;
	const winTrack = lumidouceHarbor;

	const [currSoundActive, setCurrSoundActive] = useState<boolean>(false);
	const [currentSoundIndex, setCurrentSoundIndex] = useState(0);
	const [playWinTrack, { stop: stopWinTrack }] = useSound(winTrack, { loop: true });
	const [playDefeatTrack, { stop: stopDefeatTrack }] = useSound(defeatTrack, { loop: true });
	const [playMainTrack, { stop: stopMainTrack }] = useSound(soundFiles[currentSoundIndex], {
		onend: () => {
			const nextIndex = (currentSoundIndex + 1) % soundFiles.length;
			setCurrentSoundIndex(nextIndex);
		},
	});

	const value = {
		currSoundActive,
		soundFiles,
		currentSoundIndex,
		setCurrSoundActive,
		setCurrentSoundIndex,
		playMainTrack,
		playWinTrack,
		playDefeatTrack,
		stopMainTrack,
		stopWinTrack,
		stopDefeatTrack,
	};

	return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>;
};
