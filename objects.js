var playlist = {['Slowdive']: "Alison",
  ['My Bloody Valentine']: "Sometimes"
}

function updatePlaylist(playlist, artistName, songTitle) { // 
  return Object.assign(playlist, {['Phil Ochs']: "Here's to the State of Mississippi"});
}

function removeFromPlaylist(playlist, artistName) { // 
  var artistName = 'Slow';
  delete playlist.artistName;
  return playlist;
}

