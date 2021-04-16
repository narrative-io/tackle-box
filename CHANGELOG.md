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