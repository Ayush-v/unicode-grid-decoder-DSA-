# Decoding a Secret Message

## Problem Statement

You are given a Google Doc containing a list of Unicode characters and their positions in a 2D grid. Your task is to write a function that:

1. Takes in a URL for the Google Doc containing the input data.
2. Retrieves and parses the data from the document.
3. Prints the grid of characters, forming a sequence of uppercase letters when displayed in a fixed-width font.

Any unspecified positions in the grid should be filled with space characters. The x- and y-coordinates in the document define the placement of each Unicode character, and the minimum coordinate values start from (0, 0).

## Example

A document might encode an image of the letter **F** like this:

```
█▀▀▀
█▀▀
█
```

## Solution Approach

1. Fetch the document contents from the provided URL.
2. Parse the data to extract character positions and values.
3. Determine the grid dimensions.
4. Populate the grid with characters at the specified positions.
5. Print the grid in a way that preserves character alignment.

## Requirements

- Your solution must be written in **Python** (preferred) or **JavaScript**.
- You may use external libraries to assist with fetching and parsing the document.
- The function must:
  - Accept a string URL as an argument.
  - Print the formatted grid when executed.

## Usage

Run the script by calling the function with the document URL:

```python
# Example usage in Python
decode_secret_message("https://docs.google.com/document/d/e/2PACX-1vSHesOf9hv2sPOntssYrEdubmMQm8lwjfwv6NPjjmIRYs_FOYXtqrYgjh85jBUebK9swPXh_a5TJ5Kl/pub")
```

### Running with Bun

1. Install dependencies:

   ```sh
   bun install
   ```

2. Run the script:

   ```sh
   bun index.ts
   ```

3. Output

   !\[\](output-demo.png)

## Notes

- Ensure proper formatting for fixed-width fonts.
- Handle large grids efficiently.
- The function should gracefully handle missing or incorrect data.

## License

This project is licensed under the MIT License.
