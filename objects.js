var playlist = {['Slowdive']: "Alison",
  ['My Bloody Valentine']: "Sometimes"
}

function updatePlaylist(playlist, artistName, songTitle) { // 
  Object.assign({}, playlist, {['Phil Ochs']: "Here's to the State of Mississippi"})
  return Object.assign();
}

function removeFromPlaylist(playlist, artistName) { // 
  delete playlist.artistName;
  return playlist;
}

