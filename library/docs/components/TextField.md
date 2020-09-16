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

## Events

This component emits all events emitted by Vuetify's v-text-field component. For a list of these events, see Vuetify's documentation: <a href="https://vuetifyjs.com/en/components/text-fields/">https://vuetifyjs.com/en/components/text-fields/</a>

## Examples

#### Default
<Demo componentName="examples-text-fields-default-doc"/>

#### Disabled
<Demo componentName="examples-text-fields-disabled-doc"/>

#### Error
<Demo componentName="examples-text-fields-error-doc"/>

#### Error with errorMsg
<Demo componentName="examples-text-fields-error-msg-doc"/>

## Slots

Only a default content slot is supported by this component

## Source Code

<SourceCode>
<<< @/src/components/TextField.vue
</SourceCode>

