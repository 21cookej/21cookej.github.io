(function () {
  // ==========================================
  // CONFIG - edit these
  const HIDDEN_LETTER_INDEX = 3; // which word in the blocked message reveals the page (0 = first)
  const SECRET_CLICKS_NEEDED = 3; // how many times to click the letter
  // ==========================================

  let clickCount = 0;

  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    z-index: 99999;
    background: white;
    font-family: Segoe UI, Open Sans, Roboto, sans-serif;
    font-size: 14px;
    color: #423f37;
    text-align: center;
    overflow-y: auto;
  `;

  overlay.innerHTML = `
    <div style="margin-top: 25px;">
      <img src='https://fp.sn.ifl.net/filterpageimages/accessBlockedtopImage.gif' style="max-width:100%;">
      <br>
      <img src='https://fp.sn.ifl.net/filterpageimages/buzz/shaking-head.gif' style="max-width:100%;">
      <br>
      <img src='https://fp.sn.ifl.net/filterpageimages/accessBlockedbottomImage.gif' style="max-width:100%;">

      <p style="margin-top: 30px;">
        <span id="sn-word-0">The </span><span id="sn-word-1">site </span><span id="sn-word-2">was </span><span id="sn-word-3" style="cursor:default;">blocked </span><span id="sn-word-4">by </span><span id="sn-word-5">restriction </span><span id="sn-word-6">list.</span>
      </p>

      <p>Contact <a href="mailto:helpdesk@roundwoodpark.co.uk">helpdesk@roundwoodpark.co.uk</a> for queries regarding filtering.</p>

      <p style="font-size:11px;">
        <img src='https://fp.sn.ifl.net/filterpageimages/rm-logo-small.png' alt="RM Education" style="vertical-align:middle">
        &nbsp;Copyright &copy; RM ${new Date().getFullYear()}
        &nbsp;<a href="http://www.ifl.net/safetynet/terms.htm" style="color:#2581dc;">Terms</a>
      </p>
    </div>
  `;

  document.body.appendChild(overlay);

  // Attach secret click listener to the chosen word
  const secretWord = overlay.querySelector(`#sn-word-${HIDDEN_LETTER_INDEX}`);
  secretWord.addEventListener('click', function () {
    clickCount++;
    if (clickCount >= SECRET_CLICKS_NEEDED) {
      overlay.remove();
    }
  });
})();
