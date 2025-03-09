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

    // Ensure data is an array
    if (!Array.isArray(data)) {
      throw new Error("Expected an array but received something else.");
    }

    // Process JSON correctly
    data.forEach((entry) => {
      Object.entries(entry).forEach(([key, lines]) => {
        console.log(`New Partition: ${key}`);
        lines.forEach((line) => console.log(line));
        console.log(""); // Add spacing
      });
    });
  } catch (error) {
    console.error("Error fetching alphabet data:", error);
  }
}

fetchAlphabetData();
