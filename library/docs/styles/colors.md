# Colors

SASS variables representing Narrative's color pallette

## Usage

Import the **_colors.sass** stylesheet from the _src/styles_ directory of the _tackle-box_ package

```sass
import 'tackle-box/src/styles/global/_colors.sass'
```

The SASS variables can then be used in your code where desired:

```sass
.my-element
	color: $nio-c-primary
	background-color: $nio-c-canvas
```

## Helper classes

Helper classes are generated to provide a method for inline styling of text color, border color and background color of elements. For each color in the color pallette, the following three css classes are generated:

##### .text-{color}
> sets the _color_ property of the element to the respective color

##### .bg-{color}
> sets the _background-color_ property of the element to the respective color

##### .border-{color}
> sets the _border-color_ property of the element to the respective color

For example, the following HTML code

```html
	<div class="bg-canvas border-primary-darker">
		<p class="text-primary-dark">Lorem ipsum</p>
	</div>	
```

would result in the following element colors:

<div class="bg-canvas border-primary-darker" style="width: 150px; text-align: center; margin: 30px auto; border: 1px solid #031553; border-radius: 5px; background-color: #F4F7FB; color: #4B5FA7; padding: 15px;">
	<p class="text-primary-dark">Lorem ipsum</p>
</div>	

To add the helper classes to your site's css, import the following stylesheet: 

```sass
import 'tackle-box/src/styles/global/_color-helpers.sass'
```

::: tip
The base _colors.sass stylsheet must be imported before _colors-helpers, or helper classes will not be generated
:::


## Color pallette

Below is a full list of colors contained in the Narrative color pallette

<ColorPallette></ColorPallette>