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
Added **utility-numbered-list** to fa icons in icon library
Added **dataType** prop to NioTagFields with supported values **long** and **double**
Added **iconSize**, **iconName**, **iconColor** and **iconBackground** optional props to **NioTooltip**
Added **utility-tally**, **utility-brackets** and **utility-archive** icons to library.
Added **custom-slat-cell** slot to **NioSlatTable**
Add **.expanded** class to expanded item in **NioSlatTable**
Added default slot to NioAlert

v0.4.0
Added **NioDestinationConnectorControl** for content common to all destination connectors
Added generic **NioConnectorSettingsControl** for use in all connectors
Added **utility-ellipsis-vertical** icon
Added **NioAttributesList** and **NioAttributeProperties** to private components
Added **NioSchema** and **NioSchemaProperties** components
Fixed bug: set text input to null on model update in **NioAutocomplete**
Fixed bug: clicking append icon in **NioDatepicker** will launch datepicker
Added model binding for name and description **NioDestinationConnectorSettings**, updated copy for descriptions

v0.4.1
Added **NioFilterJoinOption** private component and added to StringMany filter and test component

v0.4.2
Added support for Array attributes in **attributeModule**, **NioSchema** and **NioSchemaProperties**
Added Jasmine for unit testing and added test for **attributeModule**
Added default filter type for Array property type
Added tooltip to display property type in **NioSchema** and **NioSchemaProperties**
Added optional tooltip to filter option in **NioFilterProperty**
Added **getJoinOptionsByPath** to **attributeModule** exports
Added **nioItemIndex** to item click handler for **NioSlatTable** items template to allow tracking items with complex ids
Added **indeterminate** loading option to **NioFileChooser**

v0.4.3
Added **NioPrettySchemaPath** component
Added **NioBuyerStudioSubscription** component
Added **NioSelectedPaymentMethod** component
Added optional **noResultsData** prop to **NioSlatTable**
Restructured codebase to conform to the Vue Style Guide

v0.4.6
Added 'pending' status to condition to display certain subscriptio properties in **NioBuyerStudioSubscription**
Allow primitive attributes with **is_join_key** to return joinable datasets in attributeModule.getJoinOptionsByPath 
Added **minCharsToSearch** optional prop to activate **NioSlatTableSearch** on specified number of characters
Added **custom** filter type with custom filter property slot defeined by **filter-properties-custom-${filterName}**
Added default slot to **NioFilterGroup**
Export *makeDotDelimitedPropertyPath** function in **attributeModule.js**
Added **areSamePaths** function to **attributeModule** exports
Added **additionalContentClass** optional prop to **NioTextField**
Added **NioCombobox** component
Added rules option to **NioSelect**

v0.4.7
Added ability to set filter to disabled
Added optional **hideOptionalProperties** prop to **NioSchemaProperties**
Added **forecastModule** to encapsulate forecasting API calls for all apps and DSM
Fixed bug in **NioTagsField** regarding pasting from clipboard
Added **Binary** filter type and added support for dataset joins for attributes of type **binary** with **format = 'geography'**
Created **NioForecastingWidget**
Added new **display-XX** color from Figma Tacklebox spec
Added test attribute for geometry property child of object attribute
Added **external-search-string** optional prop for **NioSlatTable** 
Added optional progressive pagination feature to **NioSlatTable**
Added **nest-{nest-level}** class to NioSchemaProperties to aid in targeting styling
Add handling for apps to accept custom parameters on intitialization
Added optional **expandedByDefault** prop to **NioExpansionPanels**
Added **utility-download** icon

v0.5.0
Added optional **summary*** prop to **NioFilterGroup** and descendant components to enable non-interactable display of filter settings for listing pages
Added **utility-percent** icon

v0.6.0 
Added **NioDataStreamOffers** component

v0.6.1
Update **NioBuyerStudioSubscription** for budget cadence

v0.6.2
Update The Trade Desk branding copy

v0.6.3 
Update description copy in **TTD3PDetail**

v0.6.4
Add license selection to dsm and data shop offers
Update destination validation error display

v0.6.8
Fix bug in Simple Timestamp filter not allowing custom text in filter value indicators

v0.6.9
Added function to attribute module to check if children attributes are selected

v0.6.10
Add ingestion timestamp filter summary to **NioBuyerStudioSubscription**

0.7.4 
Fix group-by nested path display