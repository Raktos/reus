# Square Binning
**SquareBin.js** takes data and encodes the distribution into individual bins/squares of color. A darker colored bin represents an area of the chart with a higher density relative to the other bins, and vice versa. This is a simplified version of the commonly found hexagonal binning.

## Methods
[#](#Methods/color) selection.**color**(value)
Sets the color of the current selection.
If no parameter is passed, returns the current color.

selection.**len**(value)
Takes in an **int** as a parameter and sets the height and width of each square to the value.
If no paramter is passed, returns the current length.
