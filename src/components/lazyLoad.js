import Loadable from 'react-loadable';
import Loading from './Loading';

export default componentPath => Loadable({
  loader: () => import(componentPath),
  loading: Loading,
});
