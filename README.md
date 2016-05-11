# Square Binning
**SquareBin.js** takes data and encodes the distribution into individual bins/squares of color. A darker colored bin represents an area of the chart with a higher density relative to the other bins, and vice versa. This is a simplified version of the commonly found hexagonal binning.

## Methods
[#](#Methods/color) selection.**color**(value)

Takes in a **String** as a parameter and sets the base color of the bins. Accepts both rgb:`'rgb(255,255,255)'` and hexadecimal:`'#FFFFFF'`
The color is fully represented when the opacity of a bin is 1.
If no parameter is passed, returns the current color.


[#](#Methods/opac)selection.**opac**(value)

Takes in an **int** or **float** betwewen 0 and 1 as a parameter and sets the weight of the opacity.
If no parameter is passed, returns the current opacity weight.


[#](#Methods/len)selection.**len**(value)

Takes in an **int** as a parameter and sets the height and width of each square to the value.
If no parameter is passed, returns the current length.


[#](#Methods/grid)selection.**grid**(value)

Takes in a **boolean** as a parameter and shows a grid layout for the chart if true.
The default value is `false`. The grid squares are of the dimensions of the bins and will automatically change sizes as the bins change sizes.
If no parameter is passed, returns the current boolean value.


[#](#Methods/h)selection.**h**(value)

Takes in an **int** as a parameter and sets the height of the svg.
If no parameter is passed, returns the current length.
Note: the actual charting area is smaller due to margins.


[#](#Methods/w)selection.**w**(value)

Takes in an **int** as a parameter and sets the width of the svg.
If no parameter is passed, returns the current length.
Note: the actual charting area is smaller due to margins.


[#](#Methods/title)selection.**title**(value)

Takes in a **String** as a parameter and sets the title of the chart.
If no parameter is passed, returns the current title.


[#](#Methods/xLabel)selection.**xLabel**(value)

Takes in a **String** as a parameter and sets the x-axis label of the chart.
If no parameter is passed, returns the current x-axis label.


[#](#Methods/yLabel)selection.**yLabel**(value)

Takes in a **String** as a parameter and sets the y-axis label of the chart.
If no parameter is passed, returns the current y-axis label.




