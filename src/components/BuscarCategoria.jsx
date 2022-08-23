import React from 'react';
import { Form } from 'react-bootstrap';
import ListaNoticias from './ListaNoticias';

const BuscarCategoria = () => {
    return (
        <div className='pt-4'>
            <div className='d-flex justify-content-center'>
                <p>Buscasr por categoria</p>

                <Form className='ms-3'>
                    <Form.Group>
                        <Form.Select>
                            <option value="">Seleccione una opcion</option>
                            <option value="politica" >politica</option>
                            <option value="economia">economia</option>
                            <option value="tecnologia">tecnologia</option>
                            <option value="deportes">deportes</option>
                        </Form.Select>
                    </Form.Group>
                </Form>
            </div>

            <ListaNoticias></ListaNoticias>
        </div>
    );
};

export default BuscarCategoria;