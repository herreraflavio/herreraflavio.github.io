/***********************************************************
 * script.js
 * --------------------------------------------
 * Reads 'polygons.json', computes centroids,
 * and writes the results to 'labels.json'.
 ***********************************************************/
const fs = require("fs");

// 1. Read polygons from an external JSON file:
let polygons;
try {
  const rawData = fs.readFileSync("./shapefile/shapes.json", "utf8");
  polygons = JSON.parse(rawData);
} catch (error) {
  console.error("Error reading polygons.json:", error);
  process.exit(1);
}

// 2. Helper function to compute centroid of a single ring
//    (simple planar formula for x,y coordinates).
function getPolygonCentroid(ring) {
  // ring: array of [x, y] coords, e.g. [[x0,y0],[x1,y1], ...]

  let signedArea = 0;
  let cx = 0;
  let cy = 0;

  // Ensure the last vertex = first vertex
  if (
    ring.length > 0 &&
    (ring[0][0] !== ring[ring.length - 1][0] ||
      ring[0][1] !== ring[ring.length - 1][1])
  ) {
    ring.push([...ring[0]]);
  }

  for (let i = 0; i < ring.length - 1; i++) {
    const [x0, y0] = ring[i];
    const [x1, y1] = ring[i + 1];
    const cross = x0 * y1 - x1 * y0; // cross product
    signedArea += cross;
    cx += (x0 + x1) * cross;
    cy += (y0 + y1) * cross;
  }

  signedArea = signedArea / 2;
  cx = cx / (6 * signedArea);
  cy = cy / (6 * signedArea);

  return [cx, cy];
}

// 3. Build a new FeatureCollection of centroids (labels)
const centroidFeatures = [];

// - polygons.json can contain an array of FeatureCollections:
polygons.forEach((featureCollection, fcIndex) => {
  // - each FeatureCollection can have multiple features:
  featureCollection.features.forEach((feature, fIndex) => {
    if (feature.geometry.type === "Polygon") {
      // We only handle single polygons in this example.
      // For multipolygons, you'd loop over each ring array.

      const ring = feature.geometry.coordinates[0]; // outer ring
      const [cx, cy] = getPolygonCentroid(ring);

      // Create a "label" feature at the centroid
      centroidFeatures.push({
        type: "Feature",
        properties: {
          Label: `Polygon ${fcIndex}-${fIndex} Center`,
          Description: "Auto-generated center of mass",
          // Copy any other relevant properties if you want:
          // ...feature.properties
        },
        geometry: {
          type: "Point",
          coordinates: [cx, cy],
        },
      });
    }
  });
});

// Wrap in a final array of FeatureCollections
const outputLabels = [
  {
    type: "FeatureCollection",
    name: "Merced Labels",
    features: centroidFeatures,
  },
];

// 4. Write the resulting JSON to labels.json
try {
  fs.writeFileSync("labels.json", JSON.stringify(outputLabels, null, 2));
  console.log("Labels written to labels.json successfully!");
} catch (error) {
  console.error("Error writing labels.json:", error);
}
