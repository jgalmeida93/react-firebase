import React from 'react';
import {Table, TableBody, TableCell, TableHead, TableRow, Typography, Button} from '@material-ui/core';
import FirebaseService from '../../services/FirebaseService';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import {privateUrls} from '../../utils/urlUtils';

export const DataTable = ({data}) => {

    const remove = (id) => {
        FirebaseService.remove(id, 'livros');
    };

    return <React.Fragment>
        <Typography variant="headline" component="h2">Add New</Typography>
        <Table selectable={false}>
            <TableHead>
                <TableRow>
                    <TableCell>Key</TableCell>
                    <TableCell>Autor</TableCell>
                    <TableCell>Obra</TableCell>
                    <TableCell>Cliente</TableCell>
                    <TableCell>Data</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    data.map((item, index) =>
                        <TableRow key={index}>
                            <TableCell>{item.key}</TableCell>
                            <TableCell>
                                {item.autor}
                            </TableCell>
                            <TableCell>{item.obra}</TableCell>
                            <TableCell>{item.cliente}</TableCell>
                            <TableCell>{item.data}</TableCell>
                            <TableCell>
                                <Button onClick={() => remove(item.key)}>
                                    Remove
                                </Button>
                                <Button component={props => 
                                <Link to={privateUrls.edit.pathWithouParam + item.key} {...props} />}>
                                    Edit
                                </Button>
                            </TableCell>
                        </TableRow>
                    )
                }
            </TableBody>
        </Table>
    </React.Fragment>
};