/* eslint-disable react/jsx-max-depth */
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
          boxShadow: '0px 0px 12px 0px rgba(0,0,0,0.3)',
        } }
      >
        <h1
          style={ {
            marginLeft: '20px', height: '100%', display: 'flex', alignItems: 'center' } }
        >
          <img
            src="/beLogo.png"
            alt="logo bemobile"
            style={ { height: '35px', width: '44px' } }
          />
        </h1>
      </header>
      <main
        style={ {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '90%',
          height: '100%',
        } }
      >

        <div style={ { alignSelf: 'flex-start', width: '100%' } }>
          <h2>Funcionários</h2>
          <form
            action=""
            style={ { width: '100%' } }
          >
            <div
              style={ {
                width: '100%',
                backgroundColor: 'white',
                borderRadius: '8px',
                // talvez mudar pra outline aqui
                border: '1px solid #DFDFDF',
                display: 'flex',
                justifyContent: 'space-between' } }
            >

              <input
                type="text"
                placeholder="Pesquisar"
                style={ {
                  color: '#DFDFDF',
                  padding: '12px 16px',
                  border: '0 none',
                  borderRadius: '8px 0 0 8px',
                  backgroundColor: 'transparent',
                  outline: 'none',
                  width: '100%',
                } }
              />
              <button
                style={ { padding: '12px 16px',
                  border: '0 none',
                  borderRadius: '0 8px 8px 0',
                  backgroundColor: 'transparent',
                  outline: 'none',
                  cursor: 'pointer',
                } }
              >
                lupa
              </button>

            </div>
          </form>
        </div>

        <table>
          <thead>
            <tr>
              <th>Foto</th>
              <th>Nome</th>
              <th>Cargo</th>
              <th>Data de Admissão</th>
              <th>Telefone</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <img src="/beLogo.png" alt="" />
              <td>João</td>
              <td>Front-end</td>
              <td>00/00/0000</td>
              <td>+55 (55) 55555-555</td>
            </tr>
            <tr>
              <img src="/beLogo.png" alt="" />
              <td>Maria</td>
              <td>Front-end</td>
              <td>00/00/0000</td>
              <td>+55 (55) 55555-555</td>
            </tr>
          </tbody>

        </table>

      </main>

    </div>
  );
}

export default App;
