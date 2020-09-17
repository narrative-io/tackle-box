# Text Field

Narrative's text input component

## Selector

nio-text-field

## Props

This component preserves all of the props available on Vuetify's v-text-field component. For a full list, see Vuetify's documentation: <a href="https://vuetifyjs.com/en/components/text-fields/">https://vuetifyjs.com/en/components/text-fields/</a>

## Events

This component preserves all events emitted by Vuetify's v-text-field component. See Vuetify's documentation form more details.

Additionally, nio-text-field component provides the following event emitters:

##### @mounted
> Emits when the component's __mounted__ lifecycle method is executed

##### @destroyed
> Emits when the component's __destroyed__ lifecycle method is executed

## Slots

Only a default content slot is supported by this component

## Examples

#### Default
<Demo componentName="examples-text-fields-default-doc"/>

#### Solo
<Demo componentName="examples-text-fields-solo-doc"/>

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

## Source Code

<SourceCode>
<<< @/src/components/TextField.vue
</SourceCode>

