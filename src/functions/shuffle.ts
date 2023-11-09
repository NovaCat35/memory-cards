interface shuffleProps {
   charList: string[];
   setCharList: React.Dispatch<React.SetStateAction<string[]>>;
}
export default function shuffle({charList, setCharList} : shuffleProps) {
   const currList = [...charList]

   for (let i = currList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [currList[i], currList[j]] = [currList[j], currList[i]];
   }
   setCharList(currList)
}

