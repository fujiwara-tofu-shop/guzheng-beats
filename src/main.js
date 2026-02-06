import { audioManager } from './audio/AudioManager.js';
import { tracks } from './audio/tracks.js';

let currentTrackId = null;

const tracksContainer = document.getElementById('tracks');

// Play icon SVG
const playIcon = '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>';
// Stop icon SVG
const stopIcon = '<svg viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12"/></svg>';

function renderTracks() {
  tracksContainer.innerHTML = tracks.map((track, i) => `
    <div class="track" data-id="${track.id}">
      <div class="track-header">
        <div style="display: flex; align-items: center;">
          <span class="track-number">0${track.id}</span>
          <span class="track-title">${track.title}</span>
          <span class="track-title-cn">${track.chinese}</span>
        </div>
        <button class="play-btn">${playIcon}</button>
      </div>
      <div class="track-meta">
        <span>${track.bpm} BPM</span>
        <span>${track.key}</span>
        <span>Pentatonic</span>
      </div>
    </div>
  `).join('');
  
  // Add click handlers
  tracksContainer.querySelectorAll('.track').forEach(el => {
    el.addEventListener('click', (e) => {
      const id = parseInt(el.dataset.id);
      toggleTrack(id);
    });
  });
}

function toggleTrack(id) {
  const track = tracks.find(t => t.id === id);
  
  // If same track is playing, stop it
  if (currentTrackId === id) {
    stopAll();
    return;
  }
  
  // Stop any current track
  stopAll();
  
  // Play new track
  currentTrackId = id;
  updateUI();
  audioManager.playTrack(track.pattern);
}

function stopAll() {
  audioManager.stop();
  currentTrackId = null;
  updateUI();
}

function updateUI() {
  document.querySelectorAll('.track').forEach(el => {
    const id = parseInt(el.dataset.id);
    const isPlaying = id === currentTrackId;
    el.classList.toggle('playing', isPlaying);
    el.querySelector('.play-btn').innerHTML = isPlaying ? stopIcon : playIcon;
  });
}

// Initialize
renderTracks();
