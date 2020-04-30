import React from 'react';
import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import Error from './_error';

export default class About extends React.Component {
  static async getInitialProps() {
    const res = await fetch('https://api.github.com/users/NSindhe');
    const statusCode = (await res.status) > 200 ? res.status : false;
    const data = await res.json();
    console.log(data);
    return { user: data, statusCode };
  }
  render() {
    const { user, statusCode } = this.props;
    if (statusCode) {
      return <Error statusCode={statusCode} />;
    }
    return (
      <Layout title='About'>
        <p>{user.login}</p>
        <p>{user.username}</p>
        <img src={user.avatar_url} alt={`@${user.login}`} height='200px' />
      </Layout>
    );
  }
}
