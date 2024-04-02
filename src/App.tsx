function App() {
  return (
    <div id="content">
      <header
        style={ {
          backgroundColor: 'white',
          width: '100%',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          gap: '30px',
          boxShadow: '0px 0px 12px 0px rgba(0,0,0,0.3)',
        } }
      >
        <h1
          style={ { marginLeft: '30px', height: '100%', display: 'flex', alignItems: 'center' } }
        >
          <img
            src="/beLogo.png"
            alt="logo bemobile"
            style={ { height: '35px', width: '44px' } }
          />
        </h1>
      </header>

    </div>
  );
}

export default App;
