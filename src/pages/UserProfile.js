import React from 'react';
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/authContext"


export const UserProfile = () => {
    const { currentUser, logOut } = useAuth();
    const navigate = useNavigate();

    async function handleLogout() {
        try {
            await logOut();
            alert("Até a próxima!!")
            navigate("/login");

        } catch (error) {
            alert("Erro ao tentar fazer logout")
        }
    }

    return (
        <div className="container">
            <div className="header">
                <h1>Perfil de usuário</h1>
                <button onClick={handleLogout}>Sair</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{currentUser.email}</td>
                        <td>
                        <Link to="/update-profile">   
                        Atualizar o perfil do usuário</Link>
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}