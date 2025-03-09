const axios = require("axios");

const entryName = "𝆩"; // The problematic key
const doubleEncodedName = encodeURIComponent(encodeURIComponent(entryName)); // Double encoding

async function postDoubleEncoded() {
  console.log(`🔹 Posting with double-encoded name: "${doubleEncodedName}"`);
  try {
    const response = await axios.post(
      "https://amhep.pythonanywhere.com/grades",
      {
        name: entryName,
        grade: 23, // Example grade
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

// postDoubleEncoded();

// const nullByteValue = "You cannot delete this 123\0"; // 123 followed by NULL byte

// axios
//   .post("https://amhep.pythonanywhere.com/grades", {
//     name: nullByteValue,
//     grade: 10,
//   })
//   .then((response) => console.log("✅ Inserted successfully:", response.data))
//   .catch((error) =>
//     console.error(
//       "❌ Insert failed:",
//       error.response ? error.response.status : error.message
//     )
//   );

// const encodedNullByte = encodeURIComponent("123\u0000"); // "%00123"

// axios
//   .delete(`https://amhep.pythonanywhere.com/grades/${encodedNullByte}`)
//   .then((response) => console.log("✅ Deleted successfully:", response.data))
//   .catch((error) =>
//     console.error(
//       "❌ DELETE failed:",
//       error.response ? error.response.status : error.message
//     )
//   );

// Delay function
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Function to fetch all items
async function fetchItems() {
  try {
    const response = await axios.get("https://amhep.pythonanywhere.com/grades");
    console.log("✅ Fetched items:", JSON.stringify(response.data, null, 2));
    return Object.keys(response.data); // Extract item names
  } catch (error) {
    console.error(
      "❌ Failed to fetch items:",
      error.response ? error.response.status : error.message
    );
    return [];
  }
}

// Function to attempt deletion using multiple methods
async function deleteItem(item) {
  console.log(`🔹 Attempting to delete: "${item}"`);

  // Try URL Encoding
  const encodedItem = encodeURIComponent(item);

  try {
    await axios.delete(
      `https://amhep.pythonanywhere.com/grades/${encodedItem}`
    );
    console.log(`✅ Successfully deleted "${item}" via URL encoding.`);
    return true;
  } catch (error) {
    console.error(
      `❌ DELETE failed via URL encoding: ${
        error.response ? error.response.status : error.message
      }`
    );
  }

  // Try JSON body deletion
  try {
    await axios.delete("https://amhep.pythonanywhere.com/grades", {
      data: { name: item },
    });
    console.log(`✅ Successfully deleted "${item}" via JSON body.`);
    return true;
  } catch (error) {
    console.error(
      `❌ DELETE failed via JSON body: ${
        error.response ? error.response.status : error.message
      }`
    );
  }

  // Double-encode if it contains tricky characters
  if (
    item.includes("\u0000") ||
    item.includes("\uFEFF") ||
    item.includes("\u200B")
  ) {
    const doubleEncodedItem = encodeURIComponent(encodeURIComponent(item));

    try {
      await axios.delete(
        `https://amhep.pythonanywhere.com/grades/${doubleEncodedItem}`
      );
      console.log(`✅ Successfully deleted "${item}" via double encoding.`);
      return true;
    } catch (error) {
      console.error(
        `❌ DELETE failed via double encoding: ${
          error.response ? error.response.status : error.message
        }`
      );
    }
  }

  console.log(`❌ Unable to delete "${item}" using any method.`);
  return false;
}

// Main function to iterate through all items and attempt deletion
async function deleteAllItems() {
  const items = await fetchItems();
  if (items.length === 0) {
    console.log("❌ No items found to delete.");
    return;
  }

  for (const item of items) {
    await deleteItem(item);
    await delay(1000); // Wait 1 second before next deletion
  }

  console.log("✅ Finished attempting to delete all items.");
}

// Run the script
deleteAllItems();

// const axios = require("axios");

// const bomCharacter = "\uFEFF"; // The actual BOM character
// const entryName = bomCharacter + "test"; // BOM + "test"

// console.log("🔹 Storing in database:", JSON.stringify(entryName)); // Check if BOM is there

// axios
//   .post("https://amhep.pythonanywhere.com/grades", {
//     name: entryName, // The key containing BOM
//     grade: 100,
//   })
//   .then((response) => console.log("✅ Inserted successfully:", response.data))
//   .catch((error) =>
//     console.error(
//       "❌ Insert failed:",
//       error.response ? error.response.data : error
//     )
//   );

// const bomEntry = "123\u0000"; // BOM + "test"
// const encodedBOMEntry = encodeURIComponent(bomEntry);

// axios
//   .delete(`https://amhep.pythonanywhere.com/grades/${encodedBOMEntry}`)
//   .then((response) => console.log("✅ Successfully deleted:", response.data))
//   .catch((error) =>
//     console.error(
//       "❌ DELETE failed:",
//       error.response ? error.response.data : error
//     )
//   );

// axios
//   .delete("https://amhep.pythonanywhere.com/grades/123\0")
//   .then((response) => console.log("✅ Deleted successfully:", response.data))
//   .catch((error) =>
//     console.error(
//       "❌ DELETE failed:",
//       error.response ? error.response.status : error.message
//     )
//   );

// const encodedNullByte = encodeURIComponent("123\0"); // `%00` (URL encoding for NULL)

// axios
//   .delete(`https://amhep.pythonanywhere.com/grades/${encodedNullByte}`)
//   .then((response) => console.log("✅ Deleted successfully:", response.data))
//   .catch((error) =>
//     console.error(
//       "❌ DELETE failed:",
//       error.response ? error.response.status : error.message
//     )
//   );

// postDoubleEncoded();

// const axios = require("axios");

// const nbSpace = "\u00a0"; // Non-Breaking Space character
// const encodedNBSP = encodeURIComponent(nbSpace); // Encode for URL

// async function deleteNBSP() {
//   console.log(`🔹 Trying to delete: "${nbSpace}" (NBSP)`);
//   try {
//     const response = await axios.delete(
//       `https://amhep.pythonanywhere.com/grades/${encodedNBSP}`
//     );
//     console.log("✅ Successfully deleted:", response.data);
//   } catch (error) {
//     console.error(
//       "❌ DELETE failed:",
//       error.response ? error.response.status : error.message
//     );
//   }
// }

// deleteNBSP();

// const axios = require("axios");

// const rawName = "/test"; // We want to store this
// const doubleEncoded = encodeURIComponent(encodeURIComponent(rawName)); // `%252Ftest`

// console.log("🔹 Storing in database:", doubleEncoded);

// axios
//   .post("https://amhep.pythonanywhere.com/grades", {
//     name: doubleEncoded, // Store the double-encoded version
//     grade: 100,
//   })
//   .then((response) => console.log("✅ Inserted successfully:", response.data))
//   .catch((error) =>
//     console.error(
//       "❌ Insert failed:",
//       error.response ? error.response.data : error
//     )
//   );

// const axios = require("axios");

// const storedKey = encodeURIComponent(encodeURIComponent("/test")); // `%252Ftest`

// axios
//   .delete(`https://amhep.pythonanywhere.com/grades/${storedKey}`)
//   .then((response) => console.log("✅ Successfully deleted:", response.data))
//   .catch((error) =>
//     console.error(
//       "❌ DELETE failed:",
//       error.response ? error.response.data : error
//     )
//   );
