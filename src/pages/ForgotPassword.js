import React, { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom'
import { useAuth } from '../context/authContext'

export const ForgotPassword = () => {
    const navigate= useNavigate()
    const {resetPassword} = useAuth();
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState("false")

    async function handleSubmit(element) {
        element.preventDefault();

        setLoading(true);
        
        try {
            await resetPassword(email)
            alert("Foi enviado um email para resetar sua senha")
            navigate("/login")
        } catch (error) {
            alert("Ocorreu um erro ao resetar sua senha")
        }

        setLoading(false)
    }
    
    return (
        <div className="container">
            <h1>Esqueci a senha</h1>
            <form onSubmit={handleSubmit}>
                <label>Email</label>

                <input type="email" value={email} onChange={(element) => setEmail(element.target.value)} />

                <button className="button-block">
                    Recuperar Senha
                </button>

            </form>

            <div className="center">
                <div>
                    <p>
                        Já tem conta <Link to="../login">Login</Link>
                    </p>
                    <p>
                        Não tem conta ? <Link to="../signup">Cadastre-se</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}