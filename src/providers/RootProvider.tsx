import { Provider } from 'react-redux';
import Layout from 'components/layout/Layout';
import store from 'store/store';
import Router from 'router/Router';

const RootProvider = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Router />
      </Layout>
    </Provider>
  );
};

export default RootProvider;
