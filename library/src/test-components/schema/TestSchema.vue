<template lang="pug">
  .test-attributes-schema
    //- NioSchema(
    //-   :datasets="fields.datasets"
    //-   :columnSets="fields.data_rules.column_sets"
    //- )
    //- NioSchema(
    //-   :attributes="attributes"
    //-   :hideIndicators="true"
    //-   :showExportedOnly="true"
    //- )
    NioSchema(
      :attributes="attributes"
    )
    NioSchema(
      :attributes="attributes"
      :disableInteractions="true"
    )
</template>

<script>

import NioSchema from '../../components-private/schema/Schema'
import { AllAttributes } from '../../modules/app/schema/tests/testAttributes'
import { replacePropertyRefs } from '../../modules/app/schema/attributeModule'

export default {
  components: {
    NioSchema
  },
  data: () => ({
    testAttributes: AllAttributes,
    attributes: [],
    // attributes: [{"id":29,"description":"A catch-all field for any miscellaneous identifier.","display_name":"Unique Identifier","name":"unique_id","type":"object","properties":{"type":{"type":"string","deliverable":false,"filterable":false},"value":{"type":"string","description":"A test description","deliverable":true,"filterable":false},"context":{"type":"string","deliverable":false,"filterable":false}},"required":["value"],"deliverable":false,"filterable":false},{"id":69,"description":"The timestamp of a recorded event","display_name":"Event Timestamp","name":"event_timestamp","type":"timestamptz","deliverable":false,"filterable":false},{"id":33,"description":"The ISO 3166-1 alpha-2 country code","display_name":"ISO 3166-1 alpha-2 Country Code","name":"iso_3166_1_country","enum":["AF","AL","DZ","AS","AD","AO","AI","AQ","AG","AR","AM","AW","AU","AT","AZ","BS","BH","BD","BB","BY","BE","BZ","BJ","BM","BT","BO","BO","BA","BW","BV","BR","IO","BN","BN","BG","BF","BI","KH","CM","CA","CV","KY","CF","TD","CL","CN","CX","CC","CO","KM","CG","CD","CK","CR","CI","CI","HR","CU","CY","CZ","DK","DJ","DM","DO","EC","EG","SV","GQ","ER","EE","ET","FK","FO","FJ","FI","FR","GF","PF","TF","GA","GM","GE","DE","GH","GI","GR","GL","GD","GP","GU","GT","GG","GN","GW","GY","HT","HM","VA","HN","HK","HU","IS","IN","ID","IR","IQ","IE","IM","IL","IT","JM","JP","JE","JO","KZ","KE","KI","KP","KR","KR","KW","KG","LA","LV","LB","LS","LR","LY","LY","LI","LT","LU","MO","MK","MG","MW","MY","MV","ML","MT","MH","MQ","MR","MU","YT","MX","FM","MD","MC","MN","ME","MS","MA","MZ","MM","MM","NA","NR","NP","NL","AN","NC","NZ","NI","NE","NG","NU","NF","MP","NO","OM","PK","PW","PS","PA","PG","PY","PE","PH","PN","PL","PT","PR","QA","RE","RO","RU","RU","RW","SH","KN","LC","PM","VC","VC","VC","WS","SM","ST","SA","SN","RS","SC","SL","SG","SK","SI","SB","SO","ZA","GS","SS","ES","LK","SD","SR","SJ","SZ","SE","CH","SY","TW","TW","TJ","TZ","TH","TL","TG","TK","TO","TT","TN","TR","TM","TC","TV","UG","UA","AE","GB","US","UM","UY","UZ","VU","VE","VE","VN","VN","VG","VI","WF","EH","YE","ZM","ZW"],"type":"string","deliverable":false,"filterable":false,"properties":{"type":{"type":"string","deliverable":true,"filterable":false},"value":{"type":"string","deliverable":true,"filterable":false},"context":{"type":"string","deliverable":false,"filterable":false}}},{"id":81,"description":"A usage event within a mobile application.  For example if a user opened an application or performed an action within the application it would be a usage event.","display_name":"Mobile App Usage","name":"mobile_app_usage","type":"object","properties":{"id":{"id":29,"description":"A catch-all field for any miscellaneous identifier.","display_name":"Unique Identifier","name":"unique_id","type":"object","properties":{"type":{"type":"string","deliverable":false,"filterable":false},"value":{"type":"string","deliverable":false,"filterable":false},"context":{"type":"string","deliverable":false,"filterable":false}},"required":["value"],"deliverable":false,"filterable":false},"usage_type":{"enum":["open","install","uninstall"],"type":"string","deliverable":true,"filterable":false,"properties":{"type":{"type":"string","deliverable":false,"filterable":false},"value":{"type":"string","deliverable":true,"filterable":false},"context":{"type":"string","deliverable":false,"filterable":false}}},"operating_system":{"id":82,"description":"An operating system string","display_name":"Operating System","name":"operating_system","enum":["iOS","Linux","MacOS","Android","Windows"],"type":"string","deliverable":false,"filterable":false}},"required":["id","usage_type"],"deliverable":false,"filterable":false}],
    fields: {"id":"af9eef42-7ead-4a31-b23a-bd4b48dddd29","dataset_id":null,"company_id":28,"name":"dwac","slug":"vfdsvv","content":{"description":"fvdsffd","icon":"https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg","sections":[]},"tags":null,"category":null,"offers":[{"id":"2c0e8d1b-9d5d-4b3e-a7ea-2d9da4bbe084","channel":"data_streams_market","licensing":{"period":"P30D","license":{"id":"7fe746ee-6b71-4130-af40-41fd7e7ba7eb"}},"pricing":{"type":"per_record","micro_cents_usd":100000},"shops":null},{"id":"ff91a5a6-886d-49bf-b219-d2ce0dd7dafa","channel":"data_shop","licensing":{"period":"P30D","license":{"id":"7fe746ee-6b71-4130-af40-41fd7e7ba7eb"}},"pricing":{"type":"per_record","micro_cents_usd":2014999},"shops":null}],"data_rules":{"column_sets":[{"dataset_id":245,"fields":[{"field":"field1","filter":"include_only_if_not_null_filter","exported":true},{"field":"field2","filter":null,"exported":false}]}],"attributes":null,"deduplication":null},"auth_rules":null,"created_by":321,"created_at":"2021-11-10T20:49:31.795Z","updated_at":"2021-11-10T20:49:31.795Z","datasets":[{"id":245,"company_id":28,"created_at":"2021-11-08T20:19:15.061304Z","name":"Sample dataset 1","schema":{"file_config":{"type":"flat","delimiter":",","escape":"\"","header":false,"quote":"\""},"type":"object","properties":{"field1":{"order":0,"description":"field 1","type":"string"},"field2":{"order":1,"description":"field 2","type":"string"}}},"status":"active","updated_at":"2021-11-10T22:51:49.650246Z","write_mode":"append"}]}
  }),
  mounted() {
    this.makeAttributes()
    // console.log(this.attributes)
  },
  methods: {
    makeAttributes() {
      this.attributes = this.testAttributes.map(attribute => replacePropertyRefs(attribute, this.testAttributes))
      console.log(this.attributes)
    }
  }
};
</script>

<style lang="sass" scoped>
</style>