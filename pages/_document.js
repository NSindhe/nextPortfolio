import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocumnet extends Document {
  render() {
    return (
      <html lang='en'>
        <Head>
          <meta
            name='description'
            content='A site for my programming portfolio'
          />
          <meta charset='utf-8' />
          <meta name='robots' content='noindex, nofollow' />
          <meta name='viewport' content='width=device-width' />
          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Roboto&display=swap'
            rel='stylesheet'
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style global jsx>{`
          body {
            font-family: 'Roboto', sans-serif;
          }
        `}</style>
      </html>
    );
  }
}
