<template lang="pug">
  .test-attributes-schema
    NioSchema(
      :attributes="attributes"
      :displayOnly="true"
      :hideIndicators="true"
      :showExportedOnly="true"
    )

</template>

<script>

import NioSchema from '../../components-private/schema/Schema'

export default {
  components: {
    NioSchema
  },
  data: () => ({
    attributes: [{"id":29,"description":"A catch-all field for any miscellaneous identifier.","display_name":"Unique Identifier","name":"unique_id","type":"object","properties":{"type":{"type":"string","deliverable":false,"filterable":false},"value":{"type":"string","deliverable":true,"filterable":false},"context":{"type":"string","deliverable":false,"filterable":false}},"required":["value"],"deliverable":false,"filterable":false},{"id":69,"description":"The timestamp of a recorded event","display_name":"Event Timestamp","name":"event_timestamp","type":"timestamptz","deliverable":false,"filterable":false},{"id":33,"description":"The ISO 3166-1 alpha-2 country code","display_name":"ISO 3166-1 alpha-2 Country Code","name":"iso_3166_1_country","enum":["AF","AL","DZ","AS","AD","AO","AI","AQ","AG","AR","AM","AW","AU","AT","AZ","BS","BH","BD","BB","BY","BE","BZ","BJ","BM","BT","BO","BO","BA","BW","BV","BR","IO","BN","BN","BG","BF","BI","KH","CM","CA","CV","KY","CF","TD","CL","CN","CX","CC","CO","KM","CG","CD","CK","CR","CI","CI","HR","CU","CY","CZ","DK","DJ","DM","DO","EC","EG","SV","GQ","ER","EE","ET","FK","FO","FJ","FI","FR","GF","PF","TF","GA","GM","GE","DE","GH","GI","GR","GL","GD","GP","GU","GT","GG","GN","GW","GY","HT","HM","VA","HN","HK","HU","IS","IN","ID","IR","IQ","IE","IM","IL","IT","JM","JP","JE","JO","KZ","KE","KI","KP","KR","KR","KW","KG","LA","LV","LB","LS","LR","LY","LY","LI","LT","LU","MO","MK","MG","MW","MY","MV","ML","MT","MH","MQ","MR","MU","YT","MX","FM","MD","MC","MN","ME","MS","MA","MZ","MM","MM","NA","NR","NP","NL","AN","NC","NZ","NI","NE","NG","NU","NF","MP","NO","OM","PK","PW","PS","PA","PG","PY","PE","PH","PN","PL","PT","PR","QA","RE","RO","RU","RU","RW","SH","KN","LC","PM","VC","VC","VC","WS","SM","ST","SA","SN","RS","SC","SL","SG","SK","SI","SB","SO","ZA","GS","SS","ES","LK","SD","SR","SJ","SZ","SE","CH","SY","TW","TW","TJ","TZ","TH","TL","TG","TK","TO","TT","TN","TR","TM","TC","TV","UG","UA","AE","GB","US","UM","UY","UZ","VU","VE","VE","VN","VN","VG","VI","WF","EH","YE","ZM","ZW"],"type":"string","deliverable":false,"filterable":false,"properties":{"type":{"type":"string","deliverable":true,"filterable":false},"value":{"type":"string","deliverable":true,"filterable":false},"context":{"type":"string","deliverable":false,"filterable":false}}},{"id":81,"description":"A usage event within a mobile application.  For example if a user opened an application or performed an action within the application it would be a usage event.","display_name":"Mobile App Usage","name":"mobile_app_usage","type":"object","properties":{"id":{"id":29,"description":"A catch-all field for any miscellaneous identifier.","display_name":"Unique Identifier","name":"unique_id","type":"object","properties":{"type":{"type":"string","deliverable":false,"filterable":false},"value":{"type":"string","deliverable":false,"filterable":false},"context":{"type":"string","deliverable":false,"filterable":false}},"required":["value"],"deliverable":false,"filterable":false},"usage_type":{"enum":["open","install","uninstall"],"type":"string","deliverable":true,"filterable":false,"properties":{"type":{"type":"string","deliverable":false,"filterable":false},"value":{"type":"string","deliverable":true,"filterable":false},"context":{"type":"string","deliverable":false,"filterable":false}}},"operating_system":{"id":82,"description":"An operating system string","display_name":"Operating System","name":"operating_system","enum":["iOS","Linux","MacOS","Android","Windows"],"type":"string","deliverable":false,"filterable":false}},"required":["id","usage_type"],"deliverable":false,"filterable":false}]
  }),
  mounted() {
    // console.log(this.attributes)
  }
};
</script>

<style lang="sass" scoped>
</style>