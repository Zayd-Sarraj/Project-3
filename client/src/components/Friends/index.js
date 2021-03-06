import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardSubtitle, Row, Container, Button
} from 'reactstrap';


const Friends = (props) => {

    return (
        <div><Row className="border rounded bg-light shadow mx-5 mt-2"><h1 className="textshadow mx-auto">Friends</h1></Row>
            <Row className="border shadow rounded bg-light mx-5 mt-3 pb-5">
                {props.value.friends.map(user => {
                    if (!window.location.href.match(/profile/)) {
                        return <div key={user._id} className="col-lg-3 my-4">
                            <Card tag='a' onClick={() => props.viewProfile(user.username)} className="mx-5 cardHeight shadow">
                                <CardImg top className="border rounded shadow" width="100%" src={user.avatar} alt="Profile Picture" />
                                <CardBody className="d-flex flex-column text-center">
                                    <CardSubtitle className="mb-1 mt-auto"><b>{user.username}</b></CardSubtitle>
                                    <CardSubtitle className="smallwords">- {user.platforms.map(platform => { return <span key={platform + user._id}>{platform} - </span> })}</CardSubtitle>
                                    <CardText className="tinywords mb-auto">{user.bio}</CardText>
                                </CardBody>
                            </Card>
                            <Container className="my-2 text-center">
                                <Button key={'remove' + user._id} color="transparent" className="border border-dark rounded shadow textshadow"
                                    name={user.username} onClick={event => props.addFriend(event)}>Remove</Button>
                            </Container>
                        </div>
                    } else {
                       return <div key={user._id} className="col-lg-3 my-4">
                            <Card tag='a' onClick={() => props.viewProfile(user.username)} className="mx-5 cardHeightmax shadow">
                                <CardImg top className="border rounded shadow" width="100%" src={user.avatar} alt="Profile Picture" />
                                <CardBody className="d-flex flex-column text-center">
                                    <CardSubtitle className="mb-1 mt-auto"><b>{user.username}</b></CardSubtitle>
                                    <CardSubtitle className="smallwords">- {user.platforms.map(platform => { return <span key={platform + user._id}>{platform} - </span> })}</CardSubtitle>
                                    <CardText className="tinywords mb-auto">{user.bio}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                    }
                }
                )}
            </Row>
        </div>
    );
}

export default Friends;