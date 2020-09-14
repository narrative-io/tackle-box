# Buttons

Narrative's button component

## Props

| Prop name             | Type    | Supported values                                        | Default value
| --------------------- | ------- | ------------------------------------------------------- | ----------
| :variant               | string  | primary \| secondary \| selected \| error               | primary
| :size                  | string  | extra-large \| large \| normal \| small \| extra-small  | extra-large
| :caps                  | boolean | true \| false                                           | false

#### Prop details:

##### :variant
> the stylistic variant of the button

##### :size
> the size of the button

##### :caps
> whether the text in the default slot will be converted to uppercase

## Examples

<Demo componentName="examples-nio-button-doc"/>

## Slots

Only a default content slot is supported by this component

## Source Code

<SourceCode>
<<< @/src/components/Button.vue
</SourceCode>

