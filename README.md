# Memory Cards
A fun fan-project that draws inspiration from Genshin Impact's TCG card game, infused with the challenge of a memory-based brain teaser. See if you can beat the game at the insane level! 

Link: https://memory-cards.pages.dev/ 🧩

<img width="982" alt="Screenshot 2023-11-17 at 1 27 10 PM" src="https://github.com/NovaCat35/weather-app/assets/54908064/58fed792-1756-4c45-b8fe-5ca14901b49e">

## Disclaimers ⚠️
This is a fan-made project base on the game Genshin Impact. This project features materials protected by the Fair Use guidelines of Section 107 of the Copyright Act. All rights reserved to the copyright owners. <br>
Game premise is created based on this [React course](https://www.theodinproject.com/lessons/node-path-react-new-memory-card) from The Odin Project. Much appreciation to this great source.

## Features 🎯
- Loading screen (API fetching)
- Level Difficulty Selector
- 3D Card styling 
- Sound Option & Playlist

## Challenges 😖
Creator's note: this project was a deep dive into React, exploring hooks, contexts, and API integration for a complete game experience.

Somewhere along the project, a key lesson learned involved managing large file uploads. After grappling with GitHub's LFS and upload issues with large videos and images, I ultimately had to re-optimize the way my file is set up, trim and rework larger uploads. While this is a cautionary tale of painstaking hours spent trying to make the game flow better I learned a lot about handling uploads and optimization for game flow.

Another key takeaway is understanding rerendering, mount, and unmounting within child contexts and moving states up. For example, there was some issue each individual card state never being set properly since the card component is constantly remounted when clicked on. These problems helped me better understand using effects and contexts for the future.

## Libraries 📚
```
   npm install uuidv4 
   npm install use-sound
   npm install react-parallax-tilt
```

## Sources and References 🖌️
> API
- https://genshin.dev/
> Artworks
- https://moewalls.com/anime/raiden-shogun-meditating-genshin-impact-live-wallpaper/
- https://wallpaperwaifu.com/pixel-art/klee-walking-pixel-genshin-impact-live-wallpaper/
- https://tenor.com/view/genshin-impact-gif-24086945
> Tools
- https://cssgradient.io/
- https://codepen.io/sosuke/pen/Pjoqqp
- https://wave.video/convert/youtube-to-mp4-300
- https://pixabay.com/sound-effects/search/card%20flip/