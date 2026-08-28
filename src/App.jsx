const categorias = ['Todos', 'Pizzas', 'Hambúrgueres', 'Bebidas', 'Sobremesas'];

function App() {
    return (
        <div>
            <h2>Cardapio</h2>
            <ul>
                {categorias.map((categoria, index) => (
                    <button key={index}>{categoria}</button>
                ))}
            </ul>
        </div>
    );
}

export default App;
