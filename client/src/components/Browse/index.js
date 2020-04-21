import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Row
} from 'reactstrap';
import BrowseBar from '../BrowseBar';
import BrowseResults from '../BrowseResults';


const Browse = (props) => {

    return (
        <div>
        <BrowseBar />
        <Row>
            {props.users.map(user => (
                <div className="col-lg-3 my-3">
                <Card className="mx-3 shadow">
                    <CardImg top width="100%" src="/images/profilepic.jpg" alt="Profile Picture" />
                    <CardBody className="text-center">
                        <CardTitle>{user.username}</CardTitle>
                        <CardSubtitle>{user.platforms.join(", ")}</CardSubtitle>
                        <CardText>{user.bio}</CardText>
                    </CardBody>
                </Card>
                </div>
            ))}
        </Row>
        </div>
            );
}

export default Browse;