# Text Field

Narrative's text input component

## Props

| Prop name      | Type    | Supported values  | Required | Default value
| -------------- | ------- | ----------------- | -------- | -------------
| v-model        | string  | any variable      | Yes      |
| :value 				 | string  | any string        | No       |
| :label         | string  | any string        | No       |
| :errorMsg  		 | string  | any string        | No       |
| :hasError      | boolean | true \| false     | No       | false

#### Prop details:

##### v-model
> Standard Vue model prop. Binds text input to data property on the Vue instance

##### :label
> Label for the button

##### :errorMsg
> A custom error message which will be displayed in the .error container element. 

::: tip
Tacklebox does not provide custom validation and error handling at this time, so you will need to pass this prop if the input does not validate according to your business logic
:::

##### :hasError
> Whether the text field renders with the .nio-text-field-error class, which applies a red border and label color. Automatically set to true when :errorMsg is provuded

## Events

This component supports all events emitted by Vuetify's v-text-field component. For a list of these events, see Vuetify's documentation: <a href="https://vuetifyjs.com/en/components/text-fields/">https://vuetifyjs.com/en/components/text-fields/</a>

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

