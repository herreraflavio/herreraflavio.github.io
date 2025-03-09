async function fetchAlphabetData() {
  try {
    const response = await fetch("http://localhost:3000/alphabet");
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
