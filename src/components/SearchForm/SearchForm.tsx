export default function SearchForm({ handleChange, nameEmployees }
: { handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  nameEmployees: string }) {
  return (
    <div className="formContainer">
      <h2>Funcionários</h2>
      <form action="" onSubmit={ (e) => e.preventDefault() }>
        <div
          className="inputContainer"
        >

          <input
            type="text"
            placeholder="Pesquisar"
            value={ nameEmployees }
            onChange={ (e) => handleChange(e) }
          />
          <button
            type="submit"
          >
            <img src="/search.png" alt="search icon" />
          </button>

        </div>
      </form>
    </div>
  );
}
