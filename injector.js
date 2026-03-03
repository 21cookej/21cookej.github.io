// Don't show home button on the main homepage
if (location.hostname !== '21cookej.github.io' || location.pathname !== '/') {
  const btn = document.createElement('a');
  btn.href = 'https://21cookej.github.io';
  btn.innerText = '⬅ Home';
  btn.style.cssText = `
    position: fixed;
    top: 10px;
    left: 10px;
    z-index: 99999;
    background: #222;
    color: #fff;
    padding: 8px 14px;
    border-radius: 6px;
    text-decoration: none;
    font-family: sans-serif;
    font-size: 14px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.4);
  `;
  document.body.appendChild(btn);
}
