<template>
  <div class="modal-confirm" v-bind:class="confirmShowClass">
    <div class="modal-content">
      <div class="modal-body">
        <p>
          {{ object.text }}
        </p>
      </div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-cancel btn-close-modal-confirm"
          v-if="object.type == 2"
          @click="cancleAlert"
        >
          {{ cancleBtnText }}
        </button>
        <button type="button" class="btn btn-confirm btn-close-modal-confirm" @click="confirmAlert">
          {{ confirmBtnText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    object: {
      type: Object,
      required: true
    },
    show: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    confirmShowClass: function () {
      return {
        show: !!this.show
      }
    },
    cancleBtnText: function () {
      if (!this.object.cancleBtnText || this.object.cancleBtnText === '') {
        return '취소'
      }
      return this.object.cancleBtnText
    },
    confirmBtnText: function () {
      if (!this.object.confirmBtnText || this.object.confirmBtnText === '') {
        return '확인'
      }
      return this.object.confirmBtnText
    }
  },
  methods: {
    async cancleAlert () {
      if (this.object.cancleEvent) {
        await this.object.cancleEvent()
      }
      this.$emit('close-alert')
    },
    async confirmAlert () {
      if (this.object.confirmEvent) {
        await this.object.confirmEvent()
      }
      this.$emit('close-alert')
    }
  }
}
</script>

<style></style>
