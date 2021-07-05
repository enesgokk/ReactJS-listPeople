import React, {Component,useState,useEffect} from "react";
import '../App.css';
import axios from "axios";
import {Link, Redirect} from "react-router-dom";

import {
  Container,Col, Row,Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Detail = (props) => {
		const [hits,setHits]=useState([]);

const { id } = useParams();
console.log(id);
useEffect(() => {
		const fetchData= async()=>{

			const {data}=await axios.get(`https://reqres.in/api/users/${id}?page=1`);
			setHits(data.data);
			console.log(data);

		}
		fetchData();		
	}, []);

		return (
		<div className="App">
			<Header/>
		<Card className="detailCard">
        <CardImg top width="100%" src={hits.avatar} className="cardImg" />
        <CardBody>
          <CardTitle tag="h5">{hits.first_name} {hits.last_name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{hits.email}</CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted"> {hits.id}</CardSubtitle>
        </CardBody>
      </Card>
		<br/><br/><br/><br/><br/>			
		<Footer/>		
		</div>
	)
}

export default Detail