import Loadable from 'react-loadable';
import Loading from './Loading';

const LoadableComponent = Loadable({
  loader: () => import('./contentChapters/LayoutsChapter'),
  loading: Loading,
});

export default LoadableComponent;
