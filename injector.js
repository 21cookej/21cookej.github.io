// // URLs where the home button should NOT appear
// const HIDE_ON = [
//   '/',                    // homepage
//   '/name-match/',     // add more paths here
//   '/eaglerforge/',
//   '/1.12-Eaglerforge/',
//   '/about',
// ];

// if (!HIDE_ON.includes(location.pathname)) {
//   const btn = document.createElement('a');
//   btn.href = 'https://21cookej.github.io';
//   btn.innerText = '⬅ Home';
//   btn.style.cssText = `
//     position: fixed;
//     top: 10px;
//     left: 10px;
//     z-index: 99999;
//     background: #222;
//     color: #fff;
//     padding: 8px 14px;
//     border-radius: 6px;
//     text-decoration: none;
//     font-family: sans-serif;
//     font-size: 14px;
//     box-shadow: 0 2px 6px rgba(0,0,0,0.4);
//   `;
//   document.body.appendChild(btn);
// }
