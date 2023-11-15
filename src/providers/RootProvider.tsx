import { Provider } from 'react-redux';
import store from 'store/store';
import Router from 'router/Router';
import { Layout } from 'components/layout';

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
