import '../styles/globals.css'
if (typeof window !== "undefined") {
  require('bootstrap/dist/css/bootstrap.min.css');
require('jquery/dist/jquery');
require('bootstrap/dist/js/bootstrap');
require('popper.js/dist/popper');
}


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
