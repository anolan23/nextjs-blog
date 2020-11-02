import "../styles/global.css"

// This default export is required in a new `pages/_app.js` file.
function App({ Component, pageProps }) {
    return (
      <React.Fragment>
        <Component {...pageProps} />
      </React.Fragment>  
    )
  }

  export default App;