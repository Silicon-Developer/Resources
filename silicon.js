function vlc_player() {
  const videolink = window.location.href;
  const streamlink = videolink.replace("/watch/", "/download/").replace(/^https?:\/\//, "");
  window.location.href = `vlc://${streamlink}`;
}

function mx_player() {
  const videolink = window.location.href;
  const streamlink = videolink.replace("/watch/", "/download/").replace(/^https?:\/\//, "");
  window.location.href = `intent://${streamlink}#Intent;scheme=https;package=com.mxtech.videoplayer.ad;action=android.intent.action.VIEW;end`;
}

function playit_player() {
  const videolink = window.location.href;
  const streamlink = videolink.replace("/watch/", "/download/").replace(/^https?:\/\//, "");
  window.location.href = `intent://${streamlink}#Intent;package=com.playit.videoplayer;action=android.intent.action.VIEW;end`;
}

function shareButton() {
  if (navigator.share) {
    navigator.share({
      title: document.title,
      text: `Watch high-quality videos on this streaming platform.\n\n${document.title}\n`,
      url: window.location.href
    })
    .then(() => console.log("Thanks for sharing!"))
    .catch(e => console.log(`Couldn't share because of ${e.message}`));
  } else {
    alert("Sorry, sharing isn't supported in this browser. Try Google Chrome or copy the link manually.");
  }
}

function copyStreamLink() {
  const streamlink = window.location.href.replace("/watch/", "/download/");
  navigator.clipboard.writeText(streamlink)
    .then(() => showToast("Link copied to clipboard!"))
    .catch(err => console.error('Failed to copy: ', err));
}

function showToast(message) {
  const toast = document.getElementById('copy-toast') || createToast();
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2000);
}

function createToast() {
  const toast = document.createElement('div');
  toast.id = 'copy-toast';
  toast.className = 'toast';
  toast.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: #6366f1;
    color: white;
    padding: 0.8rem 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    z-index: 1000;
    opacity: 0;
    transition: opacity 0.3s ease;
  `;
  document.body.appendChild(toast);
  
  // Add CSS for show class
  const style = document.createElement('style');
  style.textContent = '.toast.show { opacity: 1; }';
  document.head.appendChild(style);
  
  return toast;
}

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Plyr if available
  if (typeof Plyr !== 'undefined') {
    new Plyr('.player', {
      controls: ['play-large', 'play', 'progress', 'current-time', 'duration', 'mute', 'volume', 'settings', 'pip', 'airplay', 'fullscreen'],
      settings: ['quality', 'speed'],
      hideControls: false,
      autoplay: false
    });
  }

  // Add copy button event listener
  const copyBtn = document.getElementById('copy-link-btn');
  if (copyBtn) copyBtn.addEventListener('click', copyStreamLink);

  // Add touch effects to action buttons
  document.querySelectorAll('.action-btn').forEach(btn => {
    btn.addEventListener('touchstart', function() {
      this.style.transform = 'translateY(2px)';
      this.style.boxShadow = '0 2px 15px rgba(99, 102, 241, 0.4)';
    });

    btn.addEventListener('touchend', function() {
      this.style.transform = '';
      this.style.boxShadow = '';
    });
  });
});
