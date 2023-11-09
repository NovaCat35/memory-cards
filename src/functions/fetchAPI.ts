export default async function fetchCharacters() {
	try {
		const response = await fetch("https://genshin.jmp.blue/characters", {
			mode: "cors",
		});
		const result = await response.json();
      return result;
	} catch (err) {
		console.error(err);
	}
}
