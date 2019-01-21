<template>
  <div>
    <v-layout
      row
      wrap
      align-center
      justify-center
    >
      <v-flex
        md5
        xs12
      >
        <div
          ref="code"
          class="editor"
        />
      </v-flex>
      <v-flex
        md1
        xs12
      >
        <v-layout
          justify-center
        >
          <AppEditorPivot
            class="hidden-sm-and-down"
            :icons="['fas fa-arrow-right', 'fas fa-arrow-left']"
            :br="true"
          />
          <AppEditorPivot
            class="hidden-md-and-up"
            :icons="['fas fa-arrow-up', 'fas fa-arrow-down']"
            :br="false"
          />
        </v-layout>
      </v-flex>
      <v-flex
        md5
        xs12
      >
        <div
          ref="tree"
          class="editor"
        />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Editor from 'jsoneditor';
import Cache from '../helpers/Cache';
import AppEditorPivot from './AppEditorPivot.vue';

export default {
  components: {
    AppEditorPivot,
  },
  data() {
    return {
      //
    };
  },
  computed: {
    data() {
      return this.$store.state.editor.data;
    },
    error() {
      return this.$store.state.editor.error;
    },
  },
  watch: {
    data(value) {
      Cache.set('data', value);
      if (this.error !== '') {
        this.setError('');
      }
    },
  },
  created() {
    this.setData(Cache.get('data'));
  },
  mounted() {
    const [code, tree] = [this.$refs.code, this.$refs.tree];
    const codeEditor = this.initEditor(code, 'code');
    const treeEditor = this.initEditor(tree, 'tree');
    this.setEditor('code', codeEditor);
    this.setEditor('tree', treeEditor);
    this.setEditorData('code', this.data);
    this.setEditorData('tree', this.data);
  },
  methods: {
    initEditor(container, mode) {
      const options = {
        mode,
        onChangeText: (data) => {
          try {
            this.setData(data);
          } catch (error) {
            this.setError(error);
          }
        },
        onError: (error) => {
          this.setError(error);
        },
      };
      return new Editor(container, options);
    },
    setEditor(mode, editor) {
      this.$store.dispatch('setEditor', {
        mode,
        editor,
      });
    },
    setEditorData(to, data) {
      this.$store.dispatch('setEditorData', {
        to,
        data,
      });
    },
    setData(data) {
      this.$store.dispatch('setData', typeof data === 'string' ? JSON.parse(data) : data);
    },
    setError(error) {
      this.$store.dispatch('setError', typeof error === 'string' ? error : error.toString());
    },
  },
};
</script>
