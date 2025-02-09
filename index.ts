import { JSDOM } from "jsdom";

function parseChar(char: string): [number, string, number] | null {
  // Find the position of the first non-numeric character (which is the character)
  const charPos = char.search(/\D/);
  if (charPos === -1) {
    return null; // No non-numeric character found
  }

  const x = parseInt(char.slice(0, charPos), 10); // Extract x
  const character = char[charPos]; // Extract character
  const y = parseInt(char.slice(charPos + 1), 10); // Extract y

  if (isNaN(x) || isNaN(y)) {
    return null; // Invalid number
  }

  return [x, character, y];
}

async function decodeSecretMessage(url: string) {
  try {
    const response = await fetch(url);
    const html = await response.text();

    const parser = new JSDOM(html);
    const doc = parser.window.document;
    const rows = doc.querySelectorAll("table tbody tr");

    const coordinates: [number, string, number][] = [];

    rows.forEach((row) => {
      const textContent = row.textContent?.trim() ?? "";
      const chars = textContent.split(" ");

      chars.forEach((char) => {
        const parsed = parseChar(char);
        if (parsed) {
          coordinates.push(parsed);
        }
      });
    });

    // Determine the size of the grid
    const maxX = Math.max(...coordinates.map(([x]) => x), 0);
    const maxY = Math.max(...coordinates.map(([, , y]) => y), 0);

    // Initialize the grid with spaces
    const grid: string[][] = Array.from({ length: maxY + 1 }, () =>
      Array(maxX + 1).fill(" ")
    );

    // Place characters in the grid
    coordinates.forEach(([x, char, y]) => {
      if (x >= 0 && y >= 0) {
        grid[y][x] = char;
      }
    });

    // Print the grid
    grid.forEach((row) => console.log(row.join("")));
  } catch (error) {
    console.error("Error:", error);
  }
}

// Example usage:
const htmlString =
  "https://docs.google.com/document/d/e/2PACX-1vSHesOf9hv2sPOntssYrEdubmMQm8lwjfwv6NPjjmIRYs_FOYXtqrYgjh85jBUebK9swPXh_a5TJ5Kl/pub";

decodeSecretMessage(htmlString);
