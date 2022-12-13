import React, {Component} from "react";
import Main from "../tamplate/Main";

const headerProps ={
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir!'
}

export default class UserCrud extends Component {
    render(){
        return (
            <Main {...headerProps}>
                Cadstro de Usuários
            </Main>
        )
    }
}

