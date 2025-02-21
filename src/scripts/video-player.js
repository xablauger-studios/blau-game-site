// # module: video-player
//
// Handles the media player - which plays the game teaser.

;(() => {

  'use strict';

  document.addEventListener('DOMContentLoaded', () => {

    const playerElement = document.getElementById("player");

    const player = new Clappr.Player({
      source: './../videos/blau-teaser.mp4',
      baseUrl: '/latest',
      poster: './../videos/blau-teaser-poster.png',
      height: "100%",
      width: "100%",
      mediacontrol: {seekbar: "#000000", buttons: "#000000"}
    });

    player.attachTo(playerElement); 
    
  });

})();
