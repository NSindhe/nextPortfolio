import React from 'react';
import Layout from '../components/Layout';
import { withRouter } from 'next/router';

const post = ({ router }) => {
  return (
    <Layout title={router.query.title}>
      <p style={{ width: '80vw' }}>
        We can perform many operations by git checkout command like the switch
        to a specific branch, create a new branch, checkout a remote branch, and
        more. The git branch and git checkout commands can be integrated.
      </p>
    </Layout>
  );
};
export default withRouter(post);
