// (async () => {
//   const deFaultWord = ["H", "E", "L", "L", "O", "W", "O", "R", "L", "D"];
//   let letters;
//   async function fetchAlphabetData() {
//     try {
//       const response = await fetch(
//         "https://flavioherrera.com/ascii/alphabet.json"
//       );
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log("Fetched data:", data); // Debugging step

//       // Ensure data is an array
//       if (!Array.isArray(data)) {
//         throw new Error("Expected an array but received something else.");
//       }

//       letters = data;
//     } catch (error) {
//       console.error("Error fetching alphabet data:", error);
//     }
//   }

//   await fetchAlphabetData();

//   for (i = 0; i < deFaultWord.length; i++) {
//     let id = "w" + (i + 1);
//     console.log(id);
//     for (j = 0; j < letters[0][deFaultWord[i]].length; j++) {
//       document.getElementById(id).innerHTML += `<div>${
//         letters[0][deFaultWord[i]][j]
//       }</div>`;
//     }
//   }
// })();

(async () => {
  const defaultWord = "HELLOWORLD".split(""); // Default preview word
  let letters = {};

  async function fetchAlphabetData() {
    try {
      const response = await fetch(
        "https://flavioherrera.com/ascii/alphabet.json"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Fetched data:", data); // Debugging step

      if (!Array.isArray(data)) {
        throw new Error("Expected an array but received something else.");
      }

      letters = data[0]; // Assuming the first object contains letter mappings
    } catch (error) {
      console.error("Error fetching alphabet data:", error);
    }
  }

  await fetchAlphabetData();

  function updateAsciiPreview(inputText) {
    // Convert to uppercase and remove invalid characters
    let cleanText = inputText
      .toUpperCase()
      .replace(/[^A-Z]/g, "")
      .slice(0, 12);
    document.getElementById("wordInput").value = cleanText; // Ensure input box only contains valid characters

    // Clear all letter containers first
    for (let i = 1; i <= 12; i++) {
      document.getElementById(`w${i}`).innerHTML = "";
    }

    // Populate letters in preview
    cleanText.split("").forEach((char, index) => {
      if (letters[char] && index < 12) {
        document.getElementById(`w${index + 1}`).innerHTML = letters[char]
          .map((line) => `<div>${line}</div>`)
          .join("");
      }
    });
  }

  // Initialize with default preview
  updateAsciiPreview(defaultWord.join(""));

  // Listen for input changes and update preview
  document.getElementById("wordInput").addEventListener("input", (e) => {
    updateAsciiPreview(e.target.value);
  });
})();
