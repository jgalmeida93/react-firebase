import {Button, TextField, Typography} from '@material-ui/core';
import React, { Component } from 'react';
import FirebaseService from '../../services/FirebaseService';
import {urls} from '../../utils/urlUtils';
import {withRouter} from 'react-router-dom';

class Add extends Component {

    state = {
        id: null,
        autor: '',
        obra: '',
        data: '',
        cliente: ''
    };

    componentWillMount = () => {
        const {id} = this.props.match.params;

        if (!(id === undefined || !id)) {
            this.setState({id});
            FirebaseService.getUniqueDataBy('leituras', id, (data) => this.setState({...data}, () => console.log(this.state)));
        }

    };

    submit = (event) => {
        event.preventDefault();

        const {autor} = this.state;
        const {obra} = this.state;
        const {data} = this.state;
        const {cliente} = this.state;

        let objToSubmit = {
            autor,
            obra,
            data,
            cliente
        };

        if(this.props.match.params.id === undefined) {
            FirebaseService.pushData('livros', objToSubmit);
        } else {
            FirebaseService.updateData(this.props.match.params.id, 'livros', objToSubmit);
        }

        this.props.history.push(urls.data.path);
    };
    
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };


    render = () => (<React.Fragment>
        <Typography variant="headline" component="h2">Add new
        </Typography>
        <form onSubmit={this.submit}>
            <TextField className="input-field"
                        type="text"
                        value={this.state.autor}
                        label="Autor"
                        required
                        onChange={this.handleChange('autor')}/>
            <TextField className="input-field"
                        type="text"
                        value={this.state.obra}
                        label="Obra"
                        required
                        onChange={this.handleChange('obra')}/>
            <TextField className="input-field"
                        type="text"
                        value={this.state.data}
                        label="Data"
                        required
                        onChange={this.handleChange('data')}/>
            <TextField className="input-field"
                        type="text"
                        value={this.state.cliente}
                        label="Seu nome"
                        required
                        onChange={this.handleChange('cliente')}/>
            <Button type="submit"
                    style={{marginTop: '20px', display: 'inline-block'}}>Add
                    </Button>
        </form>
    </React.Fragment>)

}

export default withRouter(Add);