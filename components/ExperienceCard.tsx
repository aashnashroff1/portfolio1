import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Col,
} from 'reactstrap';
import Fade from 'react-reveal/Fade';
import { ExperienceType } from '../types/sections';

const ExperienceCard = ({
  companyLogo,
  company,
  role,
  date,
  desc,
  descBullets,
}: ExperienceType) => {
  return (
    <Col lg="6">
      <Fade left duration={2000}>
        <Card
          style={{ flex: 1 }}
          className="shadow-lg--hover mb-3 shadow border-0 text-center rounded"
        >
          <CardBody className="">
            <img
              src={companyLogo}
              style={{
                objectFit: 'cover',
                left: 0,
                right: 0,
                top: '7rem',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '10rem',
                height: '10rem',
                borderRadius: '50%',
              }}
              className="shadow mb-3"
              alt={companyLogo}
            />
            <CardTitle tag="h4" className="mb-2">
              {company}
            </CardTitle>
            <CardText tag="div" className="description my-3 text-justify text-dark">
            <CardSubtitle tag="h5" className="mb-2">
              {role}
            </CardSubtitle>
            <CardSubtitle className="pb-1">{date}</CardSubtitle>
              {desc}
            </CardText>
          </CardBody>
        </Card>
      </Fade>
    </Col>
  );
};

export default ExperienceCard;
