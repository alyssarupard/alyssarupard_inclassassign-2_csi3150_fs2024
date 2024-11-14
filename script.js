function showFeature(letter) {
  const display = document.getElementById("feature-display");

  // Check if the feature is already displayed to prevent duplication
  if (document.getElementById(`feature-${letter}`)) return;

  let content = "";

  switch (letter) {
    case "a":
      content = `
                <div id="feature-a" class="feature-card">
                    <img src="img/css-letter-a.png" alt="A is for Aspect Ratio">
                    <div class="description">
                        <h2>A is for Aspect Ratio</h2>
                        <p>Does this aspect-ratio make me look fat?</p>
                    </div>
                </div>
            `;
      break;
    case "b":
      content = `
                <div id="feature-b" class="feature-card">
                    <img src="img/css-letter-b.png" alt="B is for Border">
                    <div class="description">
                        <h2>B is for Border</h2>
                        <p>Enter your text here for 'B' feature.</p>
                    </div>
                </div>
            `;
      break;
    case "c":
      content = `
                <div id="feature-c" class="feature-card">
                    <img src="img/css-letter-c.png" alt="C is for Colors">
                    <div class="description">
                        <h2>C is for Colors</h2>
                        <p>I have so many colors that Florida banned me from entry.</p>
                    </div>
                </div>
            `;
      break;
  }

  // Append the new feature card to the display area
  display.innerHTML += content;
}
