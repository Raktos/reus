# Square Binning
**SquareBin.js** takes data and encodes the distribution into individual bins/squares of color. A darker colored bin represents an area of the chart with a higher density relative to the other bins, and vice versa. This is a simplified version of the commonly found hexagonal binning.

## Methods
[#](#Methods/color) selection.**color**(value)

Takes in a **String** as a parameter and sets the base color of the bins.

The color is fully represented when the opacity of a bin is 0.

If no parameter is passed, returns the current color.


[#](#Methods/len)selection.**len**(value)

Takes in an **int** as a parameter and sets the height and width of each square to the value.

If no paramter is passed, returns the current length.


[#](#Methods/h)selection.**h**(value)

Takes in an **int** as a parameter and sets the height of the svg.

If no paramter is passed, returns the current length.

Note: the actual charting area is smaller due to margins.


[#](#Methods/w)selection.**w**(value)

Takes in an **int** as a parameter and sets the width of the svg.

If no paramter is passed, returns the current length.

Note: the actual charting area is smaller due to margins.
