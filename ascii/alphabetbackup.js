// (async () => {
//   const defaultWord = "HELLOWORLD".split(""); // Default preview word
//   let letters = {};

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

//       if (!Array.isArray(data)) {
//         throw new Error("Expected an array but received something else.");
//       }

//       letters = data[0]; // Assuming the first object contains letter mappings
//     } catch (error) {
//       console.error("Error fetching alphabet data:", error);
//     }
//   }

//   await fetchAlphabetData();

//   function updateAsciiPreview(inputText) {
//     // Convert to uppercase and remove invalid characters
//     let cleanText = inputText
//       .toUpperCase()
//       .replace(/[^A-Z]/g, "")
//       .slice(0, 12);
//     document.getElementById("wordInput").value = cleanText; // Ensure input box only contains valid characters

//     // Clear all letter containers first
//     for (let i = 1; i <= 12; i++) {
//       document.getElementById(`w${i}`).innerHTML = "";
//     }

//     // Populate letters in preview
//     cleanText.split("").forEach((char, index) => {
//       if (letters[char] && index < 12) {
//         document.getElementById(`w${index + 1}`).innerHTML = letters[char]
//           .map((line) => `<div>${line}</div>`)
//           .join("");
//       }
//     });
//   }

//   // Initialize with default preview
//   updateAsciiPreview(defaultWord.join(""));

//   // Listen for input changes and update preview
//   document.getElementById("wordInput").addEventListener("input", (e) => {
//     updateAsciiPreview(e.target.value);
//   });
// })();

(async () => {
  const defaultWord = "HELLOWORLD".split(""); // Default preview word
  let letters = {};

  // Fetch the ASCII data
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

      letters = data[0]; // Assuming the first object contains the ASCII dictionary
    } catch (error) {
      console.error("Error fetching alphabet data:", error);
    }
  }

  await fetchAlphabetData();

  // ------------------------------------------------------
  //    MAIN LOGIC: Update DOM + Build 5 Partitions
  // ------------------------------------------------------
  async function saveJsonToServer(jsonData) {
    try {
      const response = await fetch("http://localhost:4050/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jsonData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      console.log("✅ JSON successfully sent to server and saved.");
    } catch (error) {
      console.error("❌ Error sending JSON to server:", error);
    }
  }
  // function updateAsciiPreview(inputText) {
  //   // 1) Clean the user input: uppercase, letters only, 12-char max
  //   let cleanText = inputText
  //     .toUpperCase()
  //     .replace(/[^A-Z]/g, "") // remove invalid characters
  //     .slice(0, 12); // max 12 letters

  //   // Ensure input box only contains valid characters
  //   document.getElementById("wordInput").value = cleanText;

  //   // 2) Clear the existing 12 preview containers
  //   for (let i = 1; i <= 12; i++) {
  //     document.getElementById(`w${i}`).innerHTML = "";
  //   }

  //   // 3) Render letters (same as before)
  //   cleanText.split("").forEach((char, index) => {
  //     if (letters[char] && index < 12) {
  //       // Each char in 'letters' is an array of lines
  //       document.getElementById(`w${index + 1}`).innerHTML = letters[char]
  //         .map((line) => `<div>${line}</div>`)
  //         .join("");
  //     }
  //   });

  //   // --------------------------------------------------
  //   //  4) Build a data structure with 5 partitions
  //   //     each partition must have 14 lines before moving on
  //   // --------------------------------------------------
  //   const partitions = {
  //     1: new Array(14).fill(""),
  //     2: new Array(14).fill(""),
  //     3: new Array(14).fill(""),
  //     4: new Array(14).fill(""),
  //     5: new Array(14).fill(""),
  //   };

  //   let partitionIndex = 1;
  //   let lineCounter = 0;

  //   cleanText.split("").forEach((char) => {
  //     if (!letters[char]) return; // Skip if no ASCII data for character

  //     letters[char].forEach((line) => {
  //       if (lineCounter >= 14) {
  //         // Move to next partition
  //         partitionIndex++;
  //         lineCounter = 0;
  //       }
  //       if (partitionIndex > 5) return; // Stop if we have filled 5 partitions

  //       partitions[partitionIndex][lineCounter] = line;
  //       lineCounter++;
  //     });
  //   });

  //   // ✅ Convert partitions into JSON structure
  //   const finalJsonStructure = [partitions];

  //   // Debug output
  //   console.log("📂 Partitions Output:", finalJsonStructure);
  //   // ✅ Save JSON to local file
  //   saveJsonToServer(finalJsonStructure);
  // }

  // Initialize with default word

  function updateAsciiPreview(inputText) {
    // 1) Clean the user input: uppercase, letters only, 12-char max
    let cleanText = inputText
      .toUpperCase()
      .replace(/[^A-Z]/g, "") // Remove invalid characters
      .slice(0, 12); // Max 12 letters

    // Ensure input box only contains valid characters
    document.getElementById("wordInput").value = cleanText;

    // 2) Clear the existing 12 preview containers
    for (let i = 1; i <= 12; i++) {
      document.getElementById(`w${i}`).innerHTML = "";
    }

    // 3) Render letters (same as before)
    cleanText.split("").forEach((char, index) => {
      if (letters[char] && index < 12) {
        document.getElementById(`w${index + 1}`).innerHTML = letters[char]
          .map((line) => `<div>${line}</div>`)
          .join("");
      }
    });

    // --------------------------------------------------
    //  4) Build a data structure with 5 partitions
    //     - Each partition must have 14 lines before moving on
    //     - Partition 1 starts with "-------" and shifts letter lines down
    //     - Stop adding if no more cleanText lines exist
    //     - Exclude empty partitions
    // --------------------------------------------------

    let partitions = {};
    let partitionIndex = 1;
    let lineCounter = 1; // Start from 1 because we add "-------" first
    const maxPartitions = 5;
    let hasContent = false;

    // Iterate over the cleanText and build ASCII lines
    cleanText.split("").forEach((char) => {
      if (!letters[char]) return; // Skip if no ASCII data for character

      letters[char].forEach((line) => {
        if (lineCounter >= 14) {
          // Move to next partition
          if (hasContent) partitionIndex++;
          lineCounter = 0;
          hasContent = false;
        }
        if (partitionIndex > maxPartitions) return; // Stop if we have filled 5 partitions

        if (!partitions[partitionIndex]) {
          partitions[partitionIndex] = new Array(14).fill("");
          if (partitionIndex === 1) {
            partitions[partitionIndex][0] = "-------"; // Add at the top of partition 1
            lineCounter = 1;
          }
        }

        partitions[partitionIndex][lineCounter] = line;
        lineCounter++;
        hasContent = true;
      });
    });

    // ✅ Ensure partition 5 ends with "-------" without replacing a line
    if (partitions[partitionIndex]) {
      for (let i = 13; i >= 0; i--) {
        if (partitions[partitionIndex][i] === "") {
          partitions[partitionIndex][i] = "-------";
          break;
        }
      }
    }

    // ✅ Remove empty partitions
    partitions = Object.fromEntries(
      Object.entries(partitions).filter(([_, lines]) =>
        lines.some((line) => line.trim() !== "")
      )
    );

    // ✅ Convert partitions into JSON structure
    const finalJsonStructure = [partitions];

    // Debug output
    console.log("📂 Partitions Output:", finalJsonStructure);

    // ✅ Save JSON to the server
    saveJsonToServer(finalJsonStructure);
  }

  updateAsciiPreview(defaultWord.join(""));

  // Listen for input changes
  document.getElementById("wordInput").addEventListener("input", (e) => {
    updateAsciiPreview(e.target.value);
  });
})();
