v0.2.14

Remove store module registration in appModule.initializeApplication(). Instead, user must register module in app creation. This is to ensure servicesStore is available throughout app lifecycle.

v0.3.0

Added the following components:

NioDateField,
NioSlider,
NioTabs,
NioFilter,
NioFilterGroup

Added **selected-value** and **tag** variants for NioPill (affects styling only)

Added optional **imgBackground** prop to NioImageTileLinkSlat and NioImageTile components

Added **currency** prop to NioSlider and NioTextField

Added **filter-header-custom-${filterName}** and **filter-body-custom-${filterName}** slots to NioFilterGroup

Added **filter-properties-custom** slot to NioFilter

Added **solo** attribute option to NioFilter to support single filters (no NioFilterGroup) and custom filters

v0.3.5

Added theme module and converted primary/canvas color to populate from global css variables

Miscellaneous changes required to retrofit Tacklebox for Whitelabel Data Shops

v0.3.6
Various bug fixes for Data Shops functionality

v0.3.7
Added NioExpansionPanels and NioExpansionPanel components
Added "price" variant to NioPill
Fixed bug regarding DropdownNav menu activator sizing

v0.3.9
Added optional **simpleSummary** prop to NioStep
Added optional **custom-content** slot to NioSlat and NioSummarySlat which will override all other content
Added **Boolean** default filter type
Added unconstrained option to default Numeric filter type
Added **NioTagsField** 

v0.3.10
Added validations to numerical unconstrained vilter variant
Added **utility-minus** icon
Add dynamic **step-name** class to **NioStep**
Fixed currency input masking to two decimal places
Changed binding of slider text/number field values to apply on Enter keyup
Added support for v-model biding on **NioExpansionPanels**
Updated **NioStepper** to support multiword step names
Added **ctaButtons** prop to **NioSidenav** to display CTAs for apps
Added **headerModules** prop to **NioSlatTable** to simplify customizing table header
Updated primary colors
Added **NioTooltip** component
Added filter tooltip optional object in config to add tooltip to **NioFilterHeader** and provided custom tooltip slot
Added optional **fluid-width** attribute to **NioTextField**
Bug Fix: fixed two-way binding on **NioTextField**, **NioSlider** and **NioTagsField**

v0.3.12
Support copy and pasting comma-delimited string into **NioTagsField** to create tag list
Support deleting a tag from any position in **NioTagsField**
Added prop for invoicing authorized to servicesStore
Added optional **append-icon** attribute to **NioPill**
Added ability to delete tag by clicking on clear icon
Added **slat** variant of NioRadioGroup
Added **SimpleTimestamp** filter type
Added rolling lookback option to SimpleTimestamp filter
Added **NioColorPicker** component
Added model binding to **NioTabs**
Updated border and placeholder colors for **nio-input** mixin
Use dynamic argument names for function in rules array to support minified code in all components that use rules

v0.3.14
Added **expand-custom** to available options for **action** prop in **SlatTable**
Added **searchConfig** as optional prop **NioSlatTable** to override default Fuse search options
Added **object** filter type
Added **filter-header-name-custom** scoped slot to **NioFilterHeader**
Truncate selections list in **supportingOptions** section of the **Freqquency** variant of **NioFilter**
Added **paginationPageChanged** event emitted to **NioSlatTable** pagination section
Added **stateChanged** event emmited whenevewr the internal state of **NioFileChooser** changes
Created **NioChoosePaymentMethod** for apps requiring payment
Added additional icons to library
Created **prepend-icon** and **list-item** variants of NioPill
Created **NioOverflowMenu**
Changed components using **rules** prop. Pass unmodified :rules value unless **rulesWithContext** prop is used, then parse rules
Fixed bug in **NioSlider** for message display for value application on text field entry