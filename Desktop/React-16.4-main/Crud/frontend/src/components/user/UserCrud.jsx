import React, { Component } from "react";
import axios from 'axios';
import Main from "../tamplate/Main";

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir!'
}
//contante da porta 
const baseUrl = 'http://localhost:3001/users'
//defininto o estado inicial
const initialState = {
    user: { name: '', email: '' },
    list: []
}

export default class UserCrud extends Component {

    state = { ...initialState }

    clear() {
        //referenciando ao estado inicial e limpando apenas o user
        this.setState({ user: initialState.user })
    }

    save() {
        const user = this.state.user
        //se o ide do usuario estiver setado entt altere se não entt salve
        const method = user.id ? 'put' : 'post'
        //caso o id do usuarios esteja setado entt faça o caminha com o ide se não entt faça sem o id
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                //dps de salvar ou incluiu entt salve  
                this.setState({ user: initialState.user, list })
            })
    }

    getUpdatedList(user){
        const list = this.state.list.filter(u => u.id !== user.id)
        list.unshift(user)
        return list
    }

    updateField(event){
        const user={...this.state.user}
        user[event.target.name] = event.target.value
        this.setState({user})
    }
    
    renderForm() {
        return(
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome: </label>
                            <input type="text" className="form-control" 
                                name="name" value={this.state.user.name}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o nome..."/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-mail: </label>
                            <input type="text" className="form-control" 
                                name="email" value={this.state.user.email}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o e-mail..."/>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={e =>this.save(e)}>
                            Salvar
                        </button>
                        <button className="btn btn-secundary ml-2"
                            onClick={e=> this.clear(e)}>
                            Cancelar
                        </button>

                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
            </Main>
        )
    }
}

