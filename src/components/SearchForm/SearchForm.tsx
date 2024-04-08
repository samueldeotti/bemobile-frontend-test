import './SearchForm.css';

type SearchFormProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  textFilterEmployee: string;
};

export default function SearchForm(
  { handleChange, textFilterEmployee }: SearchFormProps,
) {
  return (
    <div className="formContainer">
      <h2>Funcionários</h2>
      <form action="" onSubmit={ (e) => e.preventDefault() }>
        <input
          type="text"
          placeholder="Pesquisar"
          value={ textFilterEmployee }
          onChange={ (e) => handleChange(e) }
        />
        <button type="submit">
          <img src="/search.png" alt="search icon" />
        </button>
      </form>
    </div>
  );
}
