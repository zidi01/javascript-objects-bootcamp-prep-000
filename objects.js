var playlist = {['Slowdive']: "Alison",
  ['My Bloody Valentine']: "Sometimes"
}

function updatePlaylist(playlist, artistName, songTitle) { // 
  return Object.assign(playlist, {['Phil Ochs']: "Here's to the State of Mississippi"});
}

function removeFromPlaylist(playlist, artistName) { // 
  var out = 'Slowdive';
  delete playlist.out;
  return playlist;
}

