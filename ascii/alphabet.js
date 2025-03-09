async function fetchAlphabetData() {
  try {
    const response = await fetch(
      "https://flavioherrera.com/ascii/alphabet.json"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    data.forEach((entry) => {
      Object.entries(entry).forEach(([key, lines]) => {
        console.log("new partition");
        lines.forEach((line) => {
          console.log(line);
        });
        console.log("");
      });
    });
  } catch (error) {
    console.error("Error fetching alphabet data:", error);
  }
}

fetchAlphabetData();
