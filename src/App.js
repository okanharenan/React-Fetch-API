import React, {useState, useEffect} from "react";
function App(){
  const [dados, setDados] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setDados(data);
            });
    }, []);

    return (
        <div>
            <h1>Utilizando Fecth API</h1>
            <ul>
                {dados.map(usuario => (
                    <li key={usuario.id}>
                        <strong>Nome:{usuario.name}</strong>
                        <p>{usuario.username}</p>
                        <p>{usuario.email}</p>
                        <p>{usuario.address.street}</p>
                        <p>{usuario.address.suite}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
} 

export default App;