import React from 'react';
import {
 CardBody, CardSubtitle, Button
} from 'reactstrap';

const RiotInfo = (props) => {

  return (
    <CardBody className="d-flex flex-column align-items-center bg-light border rounded shadow my-1 mx-2">
      <CardSubtitle className="mx-auto mt-auto">League of Legends/Valorant: <b>{props.value.riotID}</b></CardSubtitle>
      <Button className="border mx-auto mb-auto border-dark mt-1 rounded" color="transparent">View Stats</Button>
    </CardBody>
  );
}

export default RiotInfo;