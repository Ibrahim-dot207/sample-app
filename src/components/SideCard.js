import React, {Fragment} from 'react';
import {Button,UncontrolledAlert,Card,CardImg,CardBody,CardText, CardSubtitle} from 'reactstrap';

const BANNER = 'https://avatars.githubusercontent.com/u/72122229?s=400&u=a58581bc0d18e819838e0357a337595354521fa5&v=4';

const sideCard = () => (
    <Fragment>
        <UncontrolledAlert color="danger" className="d-none d-lg-block">
            
            <span>New Page</span>
            
        </UncontrolledAlert>
        <Card>
            <CardImg top width="100%" src={BANNER} alt="banner"/>
            <CardBody>
                <cardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary">Ibrahim Abdul Kadiri</cardTitle>
                <CardSubtitle className="text-secondary mb-3 font-weight-light text-uppercase">
                Mechanical Engineer and Web Developer, Ghana.
                </CardSubtitle>
                <CardText className="text-secondary mb-4" style={{fontSize:'0.75rem'}}>Mechanical Engineer and Full-Stack Web developer with very solid background in JavaScript, HTML,CSS, and a fair knowledge in react and python</CardText>
                <Button color="success" className="font-weight-bold">View Profile</Button>
            </CardBody>
        </Card>
    </Fragment>
);

export default sideCard;