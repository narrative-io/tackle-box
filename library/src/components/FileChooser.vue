<template lang="pug">
  .nio-file-chooser(
    :class="`state-${ currentState.toLowerCase() }`"
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
    .graphic
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
      NioIcon(
        v-if="currentState === 'success'"
        name="display-download" 
        color="#415298"
        size="48"
      )
      .progress(v-if="currentState === 'inProgress'")
        v-progress-circular(
          :value="percentComplete"
          rotate="270"
          width="1"
          color="#415298"
        )
        .nio-p.text-primary-dark.nio-bold {{ percentComplete }}%
    .details
      .nio-h3.text-primary-darker 
        span(v-if="currentState === 'initial'") Drag and drop
        span(v-if="currentState === 'selected'") Your File
        span(v-if="currentState === 'inProgress'") {{ inProgressMsg }}
        span(v-if="currentState === 'success'") Success
        span(v-if="currentState === 'error'") We have a problem
      .nio-p.text-primary-dark 
        span(v-if="currentState === 'initial'") {{ instructions }}
        span(v-if="currentState === 'selected' || currentState === 'inProgress'") <strong>{{ filename }}</strong> {{ readableFilesize }}
        span(v-if="currentState === 'success'") {{ successMsg }}
        span(v-if="currentState === 'error'")
           span(v-if="errorType === 'validation'") {{ validationErrorMsg }}
           span(v-else-if="errorType === 'filesize'") {{ filesizeErrorMsg }}
           span(v-else-if="errorType === 'multifile'") {{ multifileErrorMsg }}
           span(v-else) {{ generalErrorMsg }}
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
        normal-primary
        @click="actionClicked"
        :disabled="!valid"
      ) {{ actionLabel }}
      NioButton(
        caution-icon-small
        iconName="utility-times"
        key="3"
        v-if="currentState === 'selected'"
        @click="cancelSelection"
      )
      NioButton(
        key="4"
        v-if="currentState === 'inProgress'"
        caution-outlined
        @click="cancelClicked"
      ) Cancel
      slot(
        name="success-actions"
        v-if="currentState === 'success'"
      )
      slot(
        name="error-actions"
        v-if="currentState === 'error'"
      )
    .invalid-message.text-error.nio-p(v-if="currentState === 'selected' && !valid") {{ invalidMsg }}
</template>

<script>

import NioButton from './Button'
import NioIcon from './icon/Icon'

export default {
  name: 'nio-file-chooser',
  props: {
    instructions: { type: String, required: false, default: "Choose a file" },
    actionLabel: { type: String, required: false, default: "Go" },
    inProgressMsg: { type: String, required: false, default: "Working on it..." },
    successMsg: { type: String, required: false, default: "Everything went smoothly" },
    generalErrorMsg: { type: String, required: false, default: "Something went wrong. Please try again." },
    filesizeErrorMsg: { type: String, required: false, default: "Your file is too large. Please choose another file."},
    multifileErrorMsg: { type: String, required: false, default: "Only one file is allowed"},
    validationErrorMsg: { type: String, required: false, default: "Your file contained errors. Please choose another file" },
    state: { type: String, required: false, default: "initial" },
    multiple: { type: Boolean, required: false, default: false },
    isLoading: { type: Boolean, required: false, default: false },
    maxFileSize: { type: Number, required: true, default: NaN },
    validateFn: { type: Function, required: false, default: () => true },
    percentComplete: { type: Number, required: false, default: 0 },
    valid: { type: Boolean, required: false, default: false},
    invalidMsg: { type: String, required: false, default: 'selection is invalid'}
  },
  data: () => ({
    currentState: 'initial',
    filename: null,
    filesize: null,
    isDragEnter: false,
    errorType: null,
    f: false
  }),
  methods: {
    browseClicked() {
      this.$emit('browseClicked')
      this.$refs.fsFileInput.click()
    },
    actionClicked() {
      this.$emit('actionClicked')
    },
    cancelClicked() {
      this.$emit('cancelClicked')
      this.currentState = 'initial'
    },
    cancelSelection() {
      this.$emit('cancelSelected')
      this.currentState = 'initial'
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
        this.filename = this.f.name
        this.filesize = this.f.size
        this.currentState = 'selected'
      } else {
        this.currentState = 'error'
        if (result === "FILE_SIZE_ERROR") {
          this.errorType = 'filesize'
        } else if (result === "MULTIFILES_ERROR") {
          this.errorType = 'multifile'
        } else {
          this.errorType = 'validation'
        }
      }
      // clear selected files
      this.$refs.fsFileInput.value = "";
    }
  },
  computed: {
    readableFilesize() {
      var i = Math.floor( Math.log(this.filesize) / Math.log(1024) );
      return ( this.filesize / Math.pow(1024, i) ).toFixed(0) * 1 + ['B', 'KB', 'MB', 'GB', 'TB'][i];
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
  @import '../styles/mixins/_file-chooser'  
</style>
