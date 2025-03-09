const fs = require("fs");
const axios = require("axios");

// Load JSON data from file
const data = JSON.parse(fs.readFileSync("word2.json", "utf-8"));

const beforeString = [
  "​    ​  ┣︎",
  "​    ​  ┣︎",
  "​      ┣︎",
  "​      ┣︎",
  "​ ​     ┣",
];

const customLine = ["​    ​  ┏︎", "​ ​     ┗︎"];
// Iterate over each entry in the JSON array

async function postData(entryName, key, index) {
  try {
    const response = await axios.post(
      "https://amhep.pythonanywhere.com/grades",
      {
        name: entryName,
        grade: 0,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    console.log("✅ Successfully posted:", response.data);
  } catch (error) {
    console.error(
      "❌ POST failed:",
      error.response ? error.response.data : error
    );
  }
}

data.forEach((entry) => {
  Object.entries(entry).forEach(([key, lines]) => {
    let startIndex = 14;
    console.log("new partition");
    lines.forEach((line, index) => {
      let stackedBeforString = "";
      let newBeforeString = beforeString[key - 1];
      for (i = startIndex; i >= 0; i--) {
        stackedBeforString += "​";
      }
      let newLine = "";
      if (key == 1 && index == 0) {
        newLine = customLine[0] + stackedBeforString + line;
      } else if (key == 5 && index == 6) {
        newLine = customLine[1] + stackedBeforString + line;
      } else {
        newLine = newBeforeString + stackedBeforString + line;
      }
      //   console.log(newLine, newLine.length);
      console.log(newLine, key, index, newLine.length);

      //   postData(newLine, key, index);
      //   console.log(startIndex);
      startIndex -= 1;
    });

    console.log("");
  });
});
