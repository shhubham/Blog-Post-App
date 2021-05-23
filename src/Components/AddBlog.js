import React, {useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { GlobalContext } from '../Context/GlobalState';
import { v4 as uuid } from 'uuid';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Col
} from 'reactstrap';

export const AddBlog = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');
    const { addBlog } = useContext(GlobalContext);
    const history = useHistory();
    const onSubmit = () => {
        const newBlog = {
            id: uuid(),
            Title: title,
            Author: author,
            Body: body,
            like:'like'
        }
        addBlog(newBlog);
        history.push('/');

    }

    const onChange = (e) => {
        setTitle(e.target.value);
    }

    const onChangeAuthor = (e) => {
        setAuthor(e.target.value);
    }

    const onChangeBody = (e) => {
        setBody(e.target.value);
    }


    return (
            <div className="row row-content d-flex justify-content-center">
            <div style={{ margin:'10vh' }} >
                <center><h3>Add a Blog</h3></center>
            </div>

            <div className="col-12 col-md-9">
                    <Form onSubmit={onSubmit}>
                    <FormGroup row style={{ margin: '5vh' }}>
                        <Label md={2}>Title:</Label>
                        <Col md={10}>
                            <Input type="text" value={title} onChange={onChange} placeholder="Enter title"></Input>
                        </Col>
                        </FormGroup>

                    <FormGroup row style={{ margin: '5vh' }}>
                            <Label md={2}>Author:</Label>
                            <Col md={10}>
                                <Input type="text" onChange={onChangeAuthor} placeholder="Enter Author"></Input>
                            </Col>
                        </FormGroup>

                    <FormGroup row style={{ margin: '5vh' }}>
                            <Label md={2}>Description:</Label>
                            <Col md={10}>
                                <Input type="textarea" value={body} onChange={onChangeBody} placeholder="Enter Description"></Input>
                            </Col>
                        </FormGroup>

                    <Button style={{ margin: '6vh' }} type="submit">Submit</Button>
                        <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
                </Form>
            </div>

        </div>
      )

}