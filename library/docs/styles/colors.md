# Colors

SASS variables representing Narrative's color pallette

## Usage

Import the **_colors.sass** stylesheet from the _styles_ directory of the _narrative-ui-library_ package

```sass
import 'narrative-ui-library/styles/global/_colors.sass'
```

The SASS variables can then be used in your code where desired:

```sass
.my-element
	color: $nio-c-primary
	background-color: $nio-c-canvas
```

## Helper variables

Helper variables are generated to provide a method for inline styling of text color, border color and background color of elements. For each color in the color pallette, the following three SASS variables are generated:

##### $nio-text-{color}
> sets the _color_ property of the element to the respective color

##### $nio-bg-{color}
> sets the _background-color_ property of the element to the respective color

##### $nio-border-{color}
> sets the _border-color_ property of the element to the respective color

For example, the following code

```html
	<div class="nio-bg-canvas nio-border-primary-darker">
		<h2 class="nio-text-primary-dark">I'm a header</h2>
	</div>	
```

would result in the following element colors:

<div class="nio-bg-canvas nio-border-primary-darker" style="width: 150px; text-align: center; margin: 30px auto; border: 1px solid #031553; border-radius: 5px; background-color: #F4F7FB; color: #4B5FA7; padding: 15px;">
	<p class="nio-text-primary-dark">Lorem Ipsum</p>
</div>	


## Color pallette

<ColorPallette></ColorPallette>