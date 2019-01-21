<template>
  <div>
    <v-icon
      large
      :color="color"
      :class="[spacing]"
      @click="passEditorData('code', 'tree')"
    >
      {{ icons[0] }}
    </v-icon>
    <br
      v-if="br"
    >
    <v-icon
      large
      :color="color"
      :class="[spacing]"
      @click="passEditorData('tree', 'code')"
    >
      {{ icons[1] }}
    </v-icon>
  </div>
</template>

<script>
export default {
  props: {
    icons: {
      type: Array,
      required: true,
    },
    br: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      color: 'primary lighten-2',
      spacing: 'ma-3',
    };
  },
  computed: {
    codeEditor() {
      return this.$store.state.editor.codeEditor;
    },
    treeEditor() {
      return this.$store.state.editor.treeEditor;
    },
  },
  methods: {
    getEditorData(from) {
      switch (from) {
        case 'code':
          return this.codeEditor.get();
        case 'tree':
          return this.treeEditor.get();
        default:
          return {};
      }
    },
    passEditorData(from, to) {
      try {
        this.$store.dispatch('setEditorData', {
          to,
          data: this.getEditorData(from),
        });
      } catch (error) {
        this.$emit('setError', error);
      }
    },
  },
};
</script>
