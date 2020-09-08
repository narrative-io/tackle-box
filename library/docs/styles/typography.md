# Typography

CSS classes representing Narrative's typographical styling 

## Usage

Import the **_typography.sass** stylesheet from the _styles_ directory of the _narrative-ui-library_ package

```sass
import 'narrative-ui-library/styles/global/_typography.sass'
```

The classes can then be used in your stylesheets where desired:

```sass
.my-element
	@extend .nio-jumbo-3
```

or used inline on any textual HTML element:

```html
<p class="nio-p-large">Lorem ipsum</p>
```

## Variables

<TypographyList></TypographyList>