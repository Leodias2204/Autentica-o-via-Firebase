import React, { useState } from 'react';
import { useAuth } from "../context/authContext"
import { useNavigate, Link } from "react-router-dom"
export const Login = () => {
    const { signIn } = useAuth();
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState("false")

    async function handleSubmit(element) {
        element.preventDefault();

        setLoading(true);

        if (password.length < 6) {
            alert("Password deve ter no mínimo 6 caracteres")
            setLoading(false)
            return;
        }
        try {
            await signIn(email, password)
            navigate("/")
        } catch (error) {
            alert("Ocorreu um erro ao tentar efetuar login")
            setEmail("")
            setPassword("")
        }

        setLoading(false);
    }
    return (
        <div className="container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="email" value={email}
                    onChange={(element) => setEmail(element.target.value)}
                />

                <label>Senha </label>
                <input type="password" value={password}
                    onChange={(element) => setPassword(element.target.value)}
                />



                <button disable={loading} className='button-block' type="submit">Login
                </button>
            </form>
            <div className="center">
                <div>
                    <p>
                        Esqueceu a senha <Link to="../forgot-password">Clique Aqui</Link>
                    </p>
                    <p>
                        Não tem conta ? <Link to="../signup">Cadastre-se</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}