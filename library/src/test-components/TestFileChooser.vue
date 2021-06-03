<template lang="pug">
  .test-file-chooser
    NioFileChooser(
      variant="inline"
      :state="inlineDownloaderState"
      v-model="file"
      actionLabel="Upload File"
      validationErrorMsg="Your file does not contain any valid IDs."
      successMsg="Your file contains 12,345 valid IDs and 0 errors."
      @changed="loadTextFromFile($event)"
      :validateFn="() => true" 
      :maxFileSize="1024*1024*100"
    )
    NioFileChooser(
      v-model="file" 
      instructions="Upload a .CSV or .TXT file containing hashed or raw emails."
      actionLabel="Generate Hash"
      :state="downloaderState"
      successMsg="Your file contains 12,345 valid IDs and 0 errors."
      validationErrorMsg="Your file does not contain any valid IDs."
      @changed="loadTextFromFile($event)" 
      :percentComplete="10" 
      :maxFileSize="1024*1024*100"
      :validateFn="() => true"
    )
      template(v-slot:success-actions)        
        NioButton(normal-secondary @click="resetDownloader") Reset PII Hasher
        NioButton(normal-primary @click="downloadFile") Download File
    .select-state
      .nio-h6 Select state: 
      NioButton(normal-secondary @click="setState('initial')") Initial
      NioButton(normal-secondary @click="setState('selected')") Selected
      NioButton(normal-secondary @click="setState('inProgress')") Working
      NioButton(normal-secondary @click="setState('success')") Success
      NioButton(normal-secondary @click="setState('error')") Error

    //- NioFileChooser(
    //-   v-model="file" 
    //-   instructions="Upload a .CSV or .TXT file containing hashed or raw emails."
    //-   actionLabel="Generate Hash"
    //-   :state="downloaderState"
    //-   successMsg="Your file contains 12,345 valid IDs and 0 errors."
    //-   validationErrorMsg="Your file does not contain any valid IDs."
    //-   @changed="loadTextFromFile($event)" 
    //-   :percentComplete="10" 
    //-   :maxFileSize="1024*1024*100"
    //-   :validateFn="() => true"
    //- )
    //-   template(v-slot:success-actions)        
    //-     NioButton(normal-secondary @click="resetDownloader") Reset PII Hasher
    //-     NioButton(normal-primary @click="downloadFile") Download File
    //-   template(v-slot:instructions)      	
    //-     span Test Instructions
    //- .select-state
    //-   .nio-h6 Select state: 
    //-   NioButton(normal-secondary @click="setState('initial')") Initial
    //-   NioButton(normal-secondary @click="setState('selected')") Selected
    //-   NioButton(normal-secondary @click="setState('inProgress')") Working
    //-   NioButton(normal-secondary @click="setState('success')") Success
    //-   NioButton(normal-secondary @click="setState('error')") Error	
</template>

<script>
import NioButton from '../components/Button'
import NioFileChooser from '../components/FileChooser'

export default {
  components: {
    NioButton,
    NioFileChooser
  },
  data: () => ({
    downloaderState: 'initial',
    inlineDownloaderState: 'initial',
    file: null
  }),
  methods: {
     setState(val) {
      this.downloaderState = val
    },
    resetDownloader() {

    },
    loadTextFromFile(files) {
      console.log(files[0])
    },
    downloadFile() {

    }
  }
};
</script>

<style lang="sass" scoped>
.test-file-chooser
  .nio-file-chooser
    margin-bottom: 100px
</style>