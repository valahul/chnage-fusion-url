function change_URL() {
  // Check if the script has already run this session
  if (sessionStorage.getItem("scriptHasRun")) {
    console.log("The script has already run this session. Skipping...");
    return;
  }

  const fullURL = window.location.href;
  console.log(fullURL);

  if (fullURL.includes("fndThemeName=Light Blue")) {
    console.log("The string contains 'fndThemeName=Light Blue'");
  } else {
    console.log("The string does not contain 'fndThemeName=Light Blue'");
    window.location.replace("https://fa-eqjw-dev10-saasfademo1.ds-fa.oraclepdemos.com/crmUI/faces/FuseWelcome?fndThemeName=Light%20Blue");
  }

  // Set the flag indicating the script has run
  sessionStorage.setItem("scriptHasRun", "true");
}

change_URL();
