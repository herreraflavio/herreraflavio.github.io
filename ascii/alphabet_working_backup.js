(async () => {
  const defaultWord = "HELLOWORLD".split(""); // Default preview word
  let letters = {};
  let finalJsonStructure;

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
  async function clearDatabase() {
    try {
      const response = await fetch("http://localhost:4050/clearDB", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      console.log("✅ database successfully cleared");
    } catch (error) {
      console.error("❌ Error sending JSON to server:", error);
    }
  }

  // async function uploadJsonToServer(jsonData) {
  //   try {
  //     const response = await fetch("http://localhost:4050/uploadJSON", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(jsonData),
  //     });

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }

  //     console.log("✅ JSON successfully sent to server and saved.");
  //   } catch (error) {
  //     console.error("❌ Error sending JSON to server:", error);
  //   }
  // }
  async function uploadJsonToServer(jsonData) {
    // Remove empty strings from all partitions
    let size = 0;
    const cleanedJsonData = jsonData.map((partition) => {
      const cleanedPartition = {};

      Object.entries(partition).forEach(([key, lines]) => {
        // Filter out empty lines
        const nonEmptyLines = lines.filter((line) => line.trim() !== "");

        // Only include the partition if it has valid lines
        if (nonEmptyLines.length > 0) {
          cleanedPartition[key] = nonEmptyLines;
        }
        size++;
      });

      return cleanedPartition;
    });

    // alert(size);

    try {
      const response = await fetch("http://localhost:4050/uploadJSON", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // body: JSON.stringify(cleanedJsonData),
        body: JSON.stringify({ size, jsonData: cleanedJsonData }), // Include size in body
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      console.log("✅ JSON successfully sent to server and saved.");
    } catch (error) {
      console.error("❌ Error sending JSON to server:", error);
    }
  }

  function updateAsciiPreview(inputText) {
    // 1) Clean the user input: uppercase, letters only,  13-char max
    let cleanText = inputText
      .toUpperCase()
      .replace(/[^A-Z]/g, "") // Remove invalid characters
      .slice(0, 13); // Max  13 letters

    // Ensure input box only contains valid characters
    document.getElementById("wordInput").value = cleanText;

    // 2) Clear the existing  13 preview containers
    for (let i = 1; i <= 13; i++) {
      document.getElementById(`w${i}`).innerHTML = "";
    }

    // 3) Render letters (same as before)
    cleanText.split("").forEach((char, index) => {
      if (letters[char] && index < 13) {
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
      for (let i = 14; i >= 0; i--) {
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
    finalJsonStructure = [partitions];

    // Debug output
    console.log("📂 Partitions Output:", finalJsonStructure);

    // ✅ Save JSON to the server
    // saveJsonToServer(finalJsonStructure);
  }

  updateAsciiPreview(defaultWord.join(""));

  document.getElementById("clearButton").addEventListener("click", () => {
    clearDatabase();
  });

  document.getElementById("uploadButton").addEventListener("click", () => {
    uploadJsonToServer(finalJsonStructure);
  });

  // Listen for input changes
  document.getElementById("wordInput").addEventListener("input", (e) => {
    updateAsciiPreview(e.target.value);
  });
})();
