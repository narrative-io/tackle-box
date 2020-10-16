<template lang="pug">
  .nio-file-uploader(
    :class="`state-${ currentState }`"
    ref="fsDroppable" 
    @dragenter.stop.prevent="isDragEnter = true" 
    @dragover.stop.prevent="() => {}" 
    @dragleave.stop.prevent="isDragEnter = false" 
    @drop.stop.prevent="handleDrop"
  )
    input(
      ref="fsFileInput" 
      id="getFile" 
      type="file" 
      tabindex="-1" 
      :multiple="multiple" 
      @change="handleFilesChange"
      style="display: none;"
    )
    .graphic(v-if="currentState !== 'success'")
      NioIcon(
        v-if="currentState === 'initial'"
        name="display-upload" 
        color="#415298"
        size="48"
      )
      NioIcon(
        v-if="currentState === 'selected'"
        name="display-file" 
        color="#415298"
        size="48"
      )
      NioIcon(
        v-if="currentState === 'error'"
        name="display-warning" 
        color="#415298"
        size="48"
      )
    .details
      .nio-h3.text-primary-darker 
        span(v-if="currentState === 'initial'") Drag and Drop
        span(v-if="currentState === 'selected'") Your File
        span(v-if="currentState === 'inProgress'") {{ inProgressMessage }}
        span(v-if="currentState === 'success'") Success
        span(v-if="currentState === 'error'") We have a problem
      .nio-p.text-primary-dark 
        span(v-if="currentState === 'initial'") {{ instructions }}
        span(v-if="currentState === 'selected' || currentState === 'inProgress'") {{ filename }} <span>{{ filesize }}</span>
        span(v-if="currentState === 'success'") {{ successMsg }}
        span(v-if="currentState === 'error'") {{ errorMsg }}
      .spacer
        .content(v-if="currentState === 'initial'")
          .left
          .nio-h6.text-primary-dark OR
          .right
    .actions
      NioButton(
        key="1"
        v-if="currentState === 'initial'"
        normal-secondary 
        @click="browseClicked"
      ) Browse Files
      NioButton(
        key="2"
        v-if="currentState === 'selected'"
        normal-secondary
        @click="actionClicked"
      ) {{ actionLabel }}
      NioButton(
        key="3"
        v-if="currentState === 'inProgress'"
        caution-outlined
        @click="cancelClicked"
      ) Cancel
      //- .success-actions
      slot(
        name="success-actions"
        v-if="currentState === 'success'"
      )
</template>

<script>

import NioButton from './Button'
import NioIcon from './icon/Icon'

export default {
  name: 'nio-file-uploader',
  props: {
    instructions: { type: String, required: false, default: "Choose a file" },
    actionLabel: { type: String, required: false, default: "Go" },
    inProgressMessage: { type: String, required: false, default: "Working on it..." },
    successMsg: { type: String, required: false, default: "Everything went smoothly" },
    errorMsg: { type: String, required: false, default: "Something went wrong. Please try again." },
    state: { type: String, required: false, default: "initial" },
    multiple: { type: Boolean, default: false },
    isLoading: { type: Boolean, default: false },
    maxFileSize: { type: Number, default: NaN },
    validateFn: { type: Function, default: () => true },
    percentComplete: { type: Number, default: 0 }
  },
  data: () => ({
    currentState: 'initial',
    filename: 'yourFile.csv',
    filesize: '2.4MB',
    isDragEnter: false,
    f: false
  }),
  methods: {
    browseClicked() {
      this.$refs.fsFileInput.click()
    },
    actionClicked() {
      this.$emit('browseClicked')
    },
    cancelClicked() {
      this.$emit('browseClicked')
    },
    handleFilesChange($event) {
      this.files = this.preprocessFiles($event.target.files);
    },
    handleDrop($event) {
      this.isDragEnter = false;
      this.preprocessFiles($event.dataTransfer.files);
    },
    checkFileSize(files) {
      if (Number.isNaN(this.maxFileSize)) {
        return true;
      }
      const list = Array.from(files);
      // find invalid file size
      const invalidFileIndex = list.findIndex(
        (file) => file.size > this.maxFileSize
      );
      // all file size are valid
      return invalidFileIndex === -1;
    },
    validate(files) {
      // file selection
      if (!this.multiple && files.length > 1) {
        return "MULTIFILES_ERROR";
      }
      // file size
      if (!this.checkFileSize(files)) {
        return "FILE_SIZE_ERROR";
      }
      // custom validation
      return this.validateFn(files);
    },
    preprocessFiles(files) {
      const result = this.validate(files);
      this.$emit("validated", result, files);
      // validation
      if (result === true) {
        this.f = files[0];
        this.$emit("changed", files);
      }
      // clear selected files
      this.$refs.fsFileInput.value = "";
    }
  },
  mounted() {	
    this.$emit('mounted')
  },
  destroyed() {
    this.$emit('destroyed')
  },
  watch: {
    state(val) {
      this.currentState = val
    }
  },
  components: { NioButton, NioIcon }
}

</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_file-uploader'  
</style>
