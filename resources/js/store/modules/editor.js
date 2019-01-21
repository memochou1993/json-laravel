// import axios from 'axios';

export default {
  state: {
    codeEditor: {},
    treeEditor: {},
    data: {},
    error: '',
  },
  mutations: {
    setEditor(state, { mode, editor }) {
      switch (mode) {
        case 'code':
          state.codeEditor = editor;
          break;
        case 'tree':
          state.treeEditor = editor;
          break;
        default:
          break;
      }
    },
    setEditorData(state, { to, data }) {
      switch (to) {
        case 'code':
          state.codeEditor.set(data);
          state.codeEditor.focus();
          break;
        case 'tree':
          state.treeEditor.set(data);
          state.treeEditor.expandAll();
          break;
        default:
          break;
      }
    },
    setData(state, data) {
      state.data = data;
    },
    setError(state, error) {
      state.error = error;
    },
  },
  actions: {
    setEditor(context, editor) {
      context.commit('setEditor', editor);
    },
    setEditorData(context, { to, data }) {
      context.commit('setEditorData', { to, data });
    },
    setData(context, data) {
      context.commit('setData', data);
    },
    setError(context, error) {
      context.commit('setError', error);
    },
  },
};
