<template>
  <div class="typography-list">
    <TypographyInstance
      v-for="instance in typographyInstances"
      :variableName="instance.variableName"
      :exampleText="instance.exampleText"
      :fontSize="instance.fontSize"
      :lineHeight="instance.lineHeight"
      :letterSpacing="instance.letterSpacing"
      :fontWeight="instance.fontWeight"
    ></TypographyInstance>
  </div>
</template>

<script>
import TypographyInstance from './TypographyInstance'
export default {
  data: () => ({
    typographyInstances: [
      {
        variableName: "nio-jumbo-3",
        exampleText: "Welcome",
        fontSize: "52",
        lineHeight: "68",
        letterSpacing: "-0.8",
        fontWeight: 600
      },
      {
        variableName: "nio-jumbo-2",
        exampleText: "Data Streams",
        fontSize: "42",
        lineHeight: "50",
        letterSpacing: "-0.6",
        fontWeight: 600
      },
      {
        variableName: "nio-jumbo-1",
        exampleText: "App Directory",
        fontSize: "34",
        lineHeight: "44",
        letterSpacing: "-0.4",
        fontWeight: 600
      },
      {
        variableName: "nio-hi",
        exampleText: "Sell Orders",
        fontSize: "28",
        lineHeight: "36",
        letterSpacing: "-0.2",
        fontWeight: 600
      },
      {
        variableName: "nio-h1",
        exampleText: "Product Summary",
        fontSize: "24",
        lineHeight: "30",
        letterSpacing: "-0",
        fontWeight: 600
      },
      {
        variableName: "nio-h3",
        exampleText: "High-end Fasion Apps",
        fontSize: "20",
        lineHeight: "26",
        letterSpacing: "0.2",
        fontWeight: 600
      },
      {
        variableName: "nio-h4",
        exampleText: "Personal Information",
        fontSize: "16",
        lineHeight: "20",
        letterSpacing: "0.2",
        fontWeight: 600
      },
      {
        variableName: "nio-h5",
        exampleText: "First Name",
        fontSize: "14",
        lineHeight: "20",
        letterSpacing: "0.4",
        fontWeight: 600
      },
      {
        variableName: "nio-h6",
        exampleText: "First Name",
        fontSize: "12",
        lineHeight: "15",
        letterSpacing: "1",
        textTransorm: "uppercase",
        fontWeight: 600
      },
      {
        variableName: "nio-p-large",
        exampleText: "The data streaming platform",
        fontSize: "20",
        lineHeight: "28",
        letterSpacing: "0.8",
        fontWeight: 400
      },
      {
        variableName: "nio-p",
        exampleText: "Build out a data monetization practice that maximizes revenue while minimizing time and effort. Companies are realizing that their data as an asset has intrinsic value.",
        fontSize: "14",
        lineHeight: "20",
        letterSpacing: "0.4",
        fontWeight: 400
      },
      {
        variableName: "nio-p-small",
        exampleText: "A unique identifier for a device / user. This can depend on the platform as well as the point of origin for the id. One user is typically associated with multiple ids: the ad id from their smartphone, hashes of their emails, browser cookies from various websites, etc.The full id contains both an id type and an id value, separated by a colon. Common types of ids include email hashes (sha1_email, md5_email) and mobile ids (idfa, adid).",
        fontSize: "12",
        lineHeight: "18",
        letterSpacing: "0.4",
        fontWeight: 400
      },
      {
        variableName: "nio-mono-small",
        exampleText: "$123,456.78",
        fontSize: "14",
        lineHeight: "20",
        letterSpacing: "0",
        fontWeight: 400,
        fontFamily: "Roboto Mono"
      },
      {
        variableName: "nio-button-label-small",
        exampleText: "PRINT",
        fontSize: "14",
        lineHeight: "12",
        letterSpacing: "1",
        fontWeight: 600,
        textTransorm: "uppercase"
      },
    ]
  }),
  components: { TypographyInstance }
};
</script>

<style lang="sass" scoped>
  .typography-list
    padding: 40px 0px 
    & > * + *
      margin-top: 10px    

</style>