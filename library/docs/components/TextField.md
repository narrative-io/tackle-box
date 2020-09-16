# Text Field

Narrative's text input component

## Props

| Prop name      | Type         | Supported values  | Required | Default value
| -------------- | ------------ | ----------------- | -------- | -------------
| v-model        | string       | any variable      | Yes      |
| :value 				 | string       | any string        | No       |
| :label         | string       | any string        | No       |
| :disabled      | boolean      | true \| false     | No       | false
| :rules  		 	 | see below    |                   | No       | 
| :placeholder   | string       | any string        | No       |

#### Prop details:

##### v-model
> Standard Vue model prop. Binds text input to data property on the Vue instance

##### :label
> Label for the button

##### :disabled
> Whether the text field is disabled

##### :rules
> Passes through to Vuetify's **rules** prop. Accepts an array of functions that take an input value as an argument and return either true / false or a string with an error message

::: tip
For more information about **rules**, see Vuetify's documentation: <a href="https://vuetifyjs.com/en/components/text-fields/">https://vuetifyjs.com/en/components/text-fields/</a>
:::

##### :placeholder
> Text field's placeholder text

## Events

This component emits all events emitted by Vuetify's v-text-field component. For a list of these events, see Vuetify's documentation: <a href="https://vuetifyjs.com/en/components/text-fields/">https://vuetifyjs.com/en/components/text-fields/</a>

## Examples

#### Default
<Demo componentName="examples-text-fields-default-doc"/>

#### With initial value
<Demo componentName="examples-text-fields-initial-value-doc"/>

#### Disabled
<Demo componentName="examples-text-fields-disabled-doc"/>

#### With rules
<Demo componentName="examples-text-fields-rules-doc"/>

Rules value (in component's **data** function):

```javascript
	rules: {
		required: value => !!value || 'Required',
		counter(value) {
			return value.length > 3 || 'Minimun 3 characters'
		}
	}
```

Implementation in template:

```html
<nio-text-field v-model="model" :rules="[rules.required, rules.counter]"></nio-text-field>
```

#### With placeholder
<Demo componentName="examples-text-fields-placeholder-doc"/>

## Slots

Only a default content slot is supported by this component

## Source Code

<SourceCode>
<<< @/src/components/TextField.vue
</SourceCode>

