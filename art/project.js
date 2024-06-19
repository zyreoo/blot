// Set up the document dimensions
setDocDimensions(800, 600);
const documentWidth = 800;
const documentHeight = 600;

// Create the mountains, lake, and tent using the blotToolkit (bt)

// Define the mountain polylines
const mountains = [
  [[113, 500], [178, 298], [251, 500]], // Mountain 1
  [[250, 500], [329, 207], [405, 495]], // Mountain 2
  [[400, 500], [500, 350], [567, 500]]  // Mountain 3
];

function createLake() {
  const lake = [
    [[319, 550], [330, 575], [381, 586], [421, 586], [461, 550], [450, 530], [400, 510], [350, 520], [318, 550]]
  ];
  return lake;
}

// Define the tent polyline
const tent = [
  [[623, 553], [648, 491], [669, 554]], // Tent base
  [[590, 469], [651, 496]],[[591, 470], [567, 524]]                // Tent top
];

// Function to draw the polylines
function draw() {
  drawLines(mountains);
  drawLines(createLake());
  drawLines(tent);

}

// Call the draw function to render the drawing
draw();