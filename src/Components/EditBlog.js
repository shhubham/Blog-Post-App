import React, { useState, useContext, useEffect } from 'react';
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


export const EditBlog = (props) => {

    const [selectedBlog, setSelectedBlog] = useState({
        id: '',
        Title: '',
        Author: '',
        Body:''
    });

    const { blogs, editBlog1 } = useContext(GlobalContext);
    const history = useHistory();
    console.log(props);
    const currentBlogId = props.computedMatch.params.id;
    //const currentBlogId = 2;

    useEffect(() => {
        const blogId = currentBlogId;
        const selectedBlog = blogs.find(blogs => blogs.id == blogId)
        setSelectedBlog(selectedBlog)
    }, [currentBlogId, blogs])

    const onSubmit = () => {
        editBlog1(selectedBlog);
        history.push('/');

    }

    const onChange = (e) => {
        setSelectedBlog({...selectedBlog, [e.target.name]: e.target.value})
    }

    return (

        <div className="row row-content d-flex justify-content-center">
            <div style={{ margin: '10vh' }} >
                <center><h3>Update Blog</h3></center>
            </div>

            <div className="col-12 col-md-9">
                <Form onSubmit={onSubmit}>
                    <FormGroup row style={{ margin: '5vh' }}>
                        <Label md={2}>Title:</Label>
                        <Col md={10}>
                            <Input type="text" onChange={onChange} name="Title" value={selectedBlog.Title} placeholder="Enter title"></Input>

                        </Col>
                    </FormGroup>

                    <FormGroup row style={{ margin: '5vh' }}>
                        <Label md={2}>Author:</Label>
                        <Col md={10}>
                            <Input type="text" value={selectedBlog.Author} onChange={onChange} name="Author" placeholder="Enter Author"></Input>
                        </Col>
                    </FormGroup>

                    <FormGroup row style={{ margin: '5vh' }}>
                        <Label md={2}>Description:</Label>
                        <Col md={10}>
                            <Input type="textarea" value={selectedBlog.Body} onChange={onChange} name="Body" placeholder="Enter Description"></Input>

                        </Col>
                    </FormGroup>

                    <Button style={{ margin: '6vh' }} type="submit">Submit</Button>
                    <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
                </Form>
            </div>

        </div>
    )

}