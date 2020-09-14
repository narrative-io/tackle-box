# Text Field

Narrative's text input component

## Props

| Prop name      | Type    | Supported values  | Required | Default value
| -------------- | ------- | ----------------- | -------- | -------------
| v-model        | string  | any valid variable| Yes      |
| :label          | string  | any string        | No       |
| :required       | boolean | true \| false     | No       | false
| :errorMesssage  | string  | any string        | No       |

#### Prop details:

##### v-model
> Standard Vue model prop. Binds text input to data property on the Vue instance

##### :label
> Label for the button

##### :required
> Whether the input is required. When set to true, if there no user input or the input equals "", will return a default error message of "required" and emit a **valid** event with the value **false**

##### :errorMsg
> A custom error message which will be displayed in the .error container element. Ovverrides the __required__ prop if used.

::: tip
Tacklebox does not provide custom validation and error handling at this time, so you will need to pass this prop if the input does not validate according to your business logic
:::

## Events

##### change
> Emits the new input value whenever the input has changed and the field loses focus.

##### input
> Emits the new input value whenever the input has changed.

##### focus
> Emitted when the component is focused

##### click
> Emitted when input is clicked

##### keydown
> Emitted when any key is pressed

##### mousedown
> Emitted when click is pressed

##### mouseup
Emitted when click is released

## Examples

<Demo componentName="examples-nio-text-field-doc"/>

## Slots

Only a default content slot is supported by this component

## Source Code

<SourceCode>
<<< @/src/components/TextField.vue
</SourceCode>

