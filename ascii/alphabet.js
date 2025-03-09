// Wrap in an IIFE so we can use top-level await if desired
(async () => {
  const defaultWord = "HELLOWORLD".split("");
  let letters = {};
  let finalJsonStructure;

  // Get elements
  const clearButton = document.getElementById("clearButton");
  const uploadButton = document.getElementById("uploadButton");
  const progressBar = document.getElementById("progressBar");

  // --------------------- FETCH ALPHABET DATA ---------------------
  async function fetchAlphabetData() {
    try {
      const response = await fetch(
        "https://flavioherrera.com/ascii/alphabet.json"
      );
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);

      const data = await response.json();
      if (!Array.isArray(data))
        throw new Error("Expected an array but received something else.");

      letters = data[0]; // The first object contains the ASCII dictionary
    } catch (error) {
      console.error("Error fetching alphabet data:", error);
    }
  }

  await fetchAlphabetData();

  // --------------------- LOADING BAR FUNCTIONS ---------------------
  /**
   * Starts a progress bar that increments from 0 to ~99% over `durationInSeconds`.
   * Returns a Promise that resolves once the bar hits ~99.
   */
  function startProgressBar(durationInSeconds = 30) {
    progressBar.style.display = "block";
    progressBar.value = 0;

    const totalIncrements = 100;
    const incrementIntervalMs = (durationInSeconds * 1000) / totalIncrements;

    return new Promise((resolve) => {
      let progress = 0;
      const intervalId = setInterval(() => {
        if (progress >= 99) {
          clearInterval(intervalId);
          resolve(); // bar's "main" run is done
        } else {
          progress++;
          progressBar.value = progress;
        }
      }, incrementIntervalMs);
    });
  }

  /**
   * Completes the bar to 100% and hides it after 1 second.
   */
  function completeProgressBar() {
    progressBar.value = 100;
    setTimeout(() => {
      progressBar.style.display = "none";
    }, 1000);
  }

  // --------------------- BUTTON CONTROL ---------------------
  function disableButtons() {
    clearButton.disabled = true;
    uploadButton.disabled = true;
  }

  function enableButtons() {
    clearButton.disabled = false;
    uploadButton.disabled = false;
  }

  // --------------------- CLEAR DATABASE (30s) ---------------------
  // 1) Begin the fetch request immediately and store that Promise
  // 2) Start the loading bar in parallel
  // 3) Wait for both to finish (Promise.all)
  // 4) Complete the bar and re-enable buttons
  function clearDatabase() {
    disableButtons();

    console.log("Sending request to clear database...");
    const requestPromise = fetch("https://hackerflavio.com/clearDB", {
      method: "GET",
    });

    console.log("Starting 30-second progress bar...");
    const barPromise = startProgressBar(30);

    Promise.all([requestPromise, barPromise])
      .then(([response]) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log("✅ Database successfully cleared");
      })
      .catch((error) => {
        console.error("❌ Error clearing database:", error);
      })
      .finally(() => {
        completeProgressBar();
        enableButtons();
      });
  }

  // --------------------- UPLOAD JSON (3s) ---------------------
  function uploadJsonToServer(jsonData) {
    disableButtons();

    // Clean the JSON before sending
    let size = 0;
    const cleanedJsonData = jsonData.map((partition) => {
      const cleanedPartition = {};
      Object.entries(partition).forEach(([key, lines]) => {
        const nonEmptyLines = lines.filter((line) => line.trim() !== "");
        if (nonEmptyLines.length > 0) {
          cleanedPartition[key] = nonEmptyLines;
        }
        size++;
      });
      return cleanedPartition;
    });

    console.log("Sending request to upload JSON...");
    const requestPromise = fetch("https://hackerflavio.com/uploadJSON", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ size, jsonData: cleanedJsonData }),
    });

    console.log("Starting 3-second progress bar...");
    const barPromise = startProgressBar(3);

    Promise.all([requestPromise, barPromise])
      .then(([response]) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log("✅ JSON successfully sent to server and saved.");
      })
      .catch((error) => {
        console.error("❌ Error sending JSON to server:", error);
      })
      .finally(() => {
        completeProgressBar();
        enableButtons();
      });
  }

  // --------------------- UPDATE ASCII PREVIEW ---------------------
  function updateAsciiPreview(inputText) {
    let cleanText = inputText
      .toUpperCase()
      .replace(/[^A-Z]/g, "")
      .slice(0, 13); // Max 13 letters
    document.getElementById("wordInput").value = cleanText;

    // Clear out old letters
    for (let i = 1; i <= 13; i++) {
      document.getElementById(`w${i}`).innerHTML = "";
    }

    // Populate new letters
    cleanText.split("").forEach((char, index) => {
      if (letters[char] && index < 13) {
        document.getElementById(`w${index + 1}`).innerHTML = letters[char]
          .map((line) => `<div>${line}</div>`)
          .join("");
      }
    });

    // Build partitions
    let partitions = {};
    let partitionIndex = 1;
    let lineCounter = 1;
    const maxPartitions = 5;
    let hasContent = false;

    cleanText.split("").forEach((char) => {
      if (!letters[char]) return;

      letters[char].forEach((line) => {
        if (lineCounter >= 14) {
          if (hasContent) partitionIndex++;
          lineCounter = 0;
          hasContent = false;
        }
        if (partitionIndex > maxPartitions) return;

        if (!partitions[partitionIndex]) {
          partitions[partitionIndex] = new Array(14).fill("");
          // Put '-------' at the start of the first partition
          if (partitionIndex === 1) {
            partitions[partitionIndex][0] = "-------";
            lineCounter = 1;
          }
        }

        partitions[partitionIndex][lineCounter] = line;
        lineCounter++;
        hasContent = true;
      });
    });

    // Fill the last partition
    if (partitions[partitionIndex]) {
      for (let i = 14; i >= 0; i--) {
        if (partitions[partitionIndex][i] === "") {
          partitions[partitionIndex][i] = "-------";
          break;
        }
      }
    }

    // Remove entirely empty partitions
    partitions = Object.fromEntries(
      Object.entries(partitions).filter(([_, lines]) =>
        lines.some((line) => line.trim() !== "")
      )
    );

    finalJsonStructure = [partitions];
    console.log("📂 Partitions Output:", finalJsonStructure);
  }

  // Default preview
  updateAsciiPreview(defaultWord.join(""));

  // Event listeners
  clearButton.addEventListener("click", clearDatabase);
  uploadButton.addEventListener("click", () =>
    uploadJsonToServer(finalJsonStructure)
  );

  document.getElementById("wordInput").addEventListener("input", (e) => {
    updateAsciiPreview(e.target.value);
  });
})();
