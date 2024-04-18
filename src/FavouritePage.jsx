import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import Rate from "./Rate";
export default function  FavouritePage  ({ courses, favourites }) {
  const favouriteCourses = courses ? courses.filter(course => favourites.includes(course.id)) : [];

  return (
    <div style={{ backgroundColor: "#edfafa" }}>
        
      <Container>
        <h4>Favourite Courses</h4>
        <Row>
          {favouriteCourses.map(course => (
            <Col key={course.id} style={{ marginBottom: "20px" }}>
              <Card style={{ width: "18rem" }}>
                <Card.Img style={{ height: "12rem" }} variant="top" src={course.image} />
                <Card.Body>
                  <h6>{course.name}</h6>
                  
                  <Rate />
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <div  courses={courses} favourites={favourites} />

    </div>
  );
};