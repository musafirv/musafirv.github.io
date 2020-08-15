import React from 'react';
import About from '../../images/people/About.png'

import {
  Row, Col
} from 'reactstrap';
import Image from 'react-bootstrap/Image'

class Dashboard extends React.Component {

  render() {
    return (
      <div>
        <link href='https://fonts.googleapis.com/css?family=Gloria Hallelujah' rel='stylesheet' />
        <link href='https://fonts.googleapis.com/css?family=Abhaya Libre' rel='stylesheet' />
        <Row>
          <Col lg={7} xs={12}>
            <h1 style={{ color: "white", fontFamily: "Gloria Hallelujah", fontWeight: 600 }} >
              Hi, I'm Shivang Awasthi
            </h1>
            <h5 style={{ color: "white", fontFamily: "Abhaya Libre" }}>
              <br />
              I am an undergraduate of Electronics and Communication at NIT Warangal.
              I am passionate about mathematics and excited to explore mathematical
              applications in the area of computer science and finance.
              <br />
              <br />
              I love to build robust, exentisble and scalable full stack systems.
              My area of interest lies in field of Computational Geometry, Data Structures,
              Algorithms, Graph Algorithms, Number Theory and Probability.
              <br />
              <br />
              I am very enthusiastic for solving algorithmic and mathematical problems and
              puzzles. In my free time I like to take part in competitive programming
              contests hosted on various platforms like codechef, codeforces etc.
            </h5>

          </Col>
          <Col xs={6} md={4}>
            <Image src={About} fluid />
          </Col>
        </Row>
      </div >
    );
  }
}

export default Dashboard;
