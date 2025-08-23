function openReport() {
  document.getElementById("myForm").style.display = "block";
}
function closeReport() {
  document.getElementById("myForm").style.display = "none";
}
function closeLinkModal() {
  document.getElementById("link-modal").style.display = "none";
}
function shareButton() {
  if (navigator.share) {
    const url = window.location.href;
    const title = document.title;
    navigator.share({
      title: title,
      text: "You can watch high-quality videos on this Stream page, one of the most powerful streaming platforms.\n\n" + title + "\n",
      url: url
    })
    .then(() => console.log("Thanks for sharing!"))
    .catch(e => console.log(`Couldn't share because of ${e.message}`));
  } else {
    alert("Sorry, sharing isn't supported in this browser. Try Google Chrome or copy the link manually.");
  }
}
function showAdsLinkModal(url) {
  const modal = document.getElementById("link-modal");
  const timerEl = document.getElementById("link-timer");
  modal.style.display = "block";
  let timeLeft = 5;
  const countdown = setInterval(() => {
    timeLeft--;
    timerEl.innerHTML = timeLeft;
    if (timeLeft === 0) {
      clearInterval(countdown);
      timerEl.innerHTML = "";
      window.location.href = url;
      closeLinkModal();
    }
  }, 1000);
}
document.addEventListener("DOMContentLoaded", () => {
  Plyr.setup("#myVideo", {
    controls: ["play-large", "rewind", "audio", "play", "fast-forward", "progress", "current-time", "duration", "captions", "settings", "pip", "airplay", "fullscreen"]
  });

  const themeBtn = document.getElementById("theme-toggle-btn");
  let theme = localStorage.getItem("theme") || "dark";

  const applyTheme = mode => {
    if (mode === "light") {
      document.body.classList.remove("bg-dark", "text-light");
      document.body.classList.add("bg-light", "text-dark");
      themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i> Dark Mode';
      themeBtn.classList.replace("btn-light", "btn-dark");
    } else {
      document.body.classList.remove("bg-light", "text-dark");
      document.body.classList.add("bg-dark", "text-light");
      themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i> Light Mode';
      themeBtn.classList.replace("btn-dark", "btn-light");
    }
  };

  themeBtn.addEventListener("click", () => {
    const current = document.body.classList.contains("bg-dark") ? "light" : "dark";
    localStorage.setItem("theme", current);
    applyTheme(current);
  });

  applyTheme(theme);
});

function Open_Link(url) {
  if (url) window.open(url, "_blank");
}
function showLinkModal(url) {
  window.open(url, "_blank");
}
function Open_DL(url) {
  window.location.href = url.replace("replace", "dl");
}
function Open_TG(url) {
  window.location.href = url.replace("replace", "tg");
}

const videolink = window.location.href;
const streamlink = videolink.replace("/watch/", "/dl/");

function vlc_player() {
  const clean = streamlink.replace(/^https?:\/\//, "");
  window.location.href = `vlc://${clean}`;
}
function mx_player() {
  const clean = streamlink.replace(/^https?:\/\//, "");
  window.location.href = `intent://${clean}#Intent;scheme=https;package=com.mxtech.videoplayer.ad;action=android.intent.action.VIEW;end`;
}
function playit_player() {
  const clean = streamlink.replace(/^https?:\/\//, "");
  window.location.href = `intent://${clean}#Intent;package=com.playit.videoplayer;action=android.intent.action.VIEW;end`;
}
function streamDownload() {
  window.location.href = streamlink;
}

document.addEventListener("DOMContentLoaded", () => {
  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes devBounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-4px); }
    }
    .dev-icon {
      display: inline-block;
      animation: devBounce 1.2s infinite;
      color: #0dcaf0;
      margin-left: 6px;
    }
    .footer-text {
      color: #0dcaf0;
      text-decoration: none;
    }
  `;
  document.head.appendChild(style);

  const footer = document.createElement("footer");
  footer.className = "py-2 text-center border-top border-secondary bg-dark text-light";

  const para = document.createElement("p");
  para.className = "mb-0";

  const link = document.createElement("a");
  link.href = "tg://resolve?domain=ABMovieHouse";
  link.target = "_blank";
  link.className = "footer-text";

  const icon = document.createElement("i");
  icon.className = "fa-solid fa-robot me-2";

  const text = document.createTextNode("Made with by ABMovieHouse");
  const devIcon = document.createElement("i");
  devIcon.className = "fa-solid fa-laptop-code dev-icon";

  link.appendChild(icon);
  link.appendChild(text);
  link.appendChild(devIcon);
  para.appendChild(link);
  footer.appendChild(para);
  document.body.appendChild(footer);
});
