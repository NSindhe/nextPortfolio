import Layout from '../components/Layout';

export default ({ statusCode }) => (
  <Layout title='Error!!'>
    <p>
      {statusCode
        ? `coun't load your user data: Status code ${statusCode}`
        : `Couldn't get that page sorry!`}
    </p>
  </Layout>
);
