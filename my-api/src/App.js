import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import $ from 'jquery';

function UsandoAxios() {
    const [dados, setDados] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setDados(response.data);
            });
    }, []);

    return (
        <div>
            <h1>Utilizando Axios</h1>
            <ul>
                {dados.map(post => (
                    <li key={post.id}>
                        <strong>User ID:{post.userId}</strong>
                        <p><strong>{post.title}</strong></p>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function UsandojQuery() {
    const [dados, setDados] = useState([]);

    useEffect(() => {
        $.get('https://jsonplaceholder.typicode.com/comments', data => {
            setDados(data);
        })
    }, []);

    return (
        <div>
            <h1>Utilizando jQuery Ajax</h1>
            <ul>
                {dados.map((comments) => (
                    <li key={comments.id}>
                        <strong>Post ID:{comments.postId}</strong>
                        <p><strong>{comments.name}</strong></p>
                        <p>{comments.email}</p>
                        <p>{comments.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function App() {
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

            {/* Chamando as funções separadamente onde necessário */}
            <UsandoAxios />
            <UsandojQuery />
        </div>
    );
}

export default App;
