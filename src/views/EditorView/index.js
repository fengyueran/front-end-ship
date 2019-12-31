import Loadable from 'react-loadable';
import Loading from './Loading';

const AsyncEditor = Loadable({
  loader: () => import('./EditorView'),
  loading: Loading
});

export default AsyncEditor;
