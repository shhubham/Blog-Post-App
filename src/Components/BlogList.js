import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import { Link } from 'react-router-dom';
import {
    ListGroup,
    ListGroupItem,
    Button,
    Card,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle
} from 'reactstrap';

export const BlogList = () => {
    const { blogs, removeBlog, likeBlog } = useContext(GlobalContext);
    return (
        <div className="row d-flex justify-content-center"  >
            {blogs.map(blogs => (
                <Card style={{ width: '80vw', marginTop: '20px'}}>
                    <CardBody>
                        <CardTitle style={{ fontSize: '25px' }}><strong>{blogs.Title}</strong></CardTitle>
                        <CardSubtitle>- <i>{blogs.Author}</i></CardSubtitle>
                        <CardText style={{ marginTop: '15px' }}>{blogs.Body}</CardText>
                        <Link className="btn btn-secondary" to={`/edit/${blogs.id}`}>Update</Link>
                        <Button style={{ marginLeft: '4px' }} onClick={() => removeBlog(blogs.id)} color="danger">Delete</Button>
                        <Button style={{ marginLeft: '4px' }} onClick={() => likeBlog(blogs.id)} color="primary">{blogs.like}</Button>
                    </CardBody>
                </Card>

            ))}

        </div>
    )
}