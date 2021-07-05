import React, {Component,useState,useEffect} from "react";
import '../App.css';
import axios from "axios"
import {
  Container,Col, Row,Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import {Link, Redirect} from "react-router-dom";
import Detail from "./Detail"
import Footer from "./Footer";
import Header from "./Header";
import SearchBox from "./SearchBox";

const Content = (props) => {
	const [hits,setHits]=useState([]);
	const [loading, setLoading] = useState(false);
	 useEffect(() => {
        setLoading(true);
        axios.get('https://reqres.in/api/users?page=1')
            .then(({data}) =>setHits(data.data))
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

	 const[search, setSearch]= useState("");
	 const handleChange= event=> setSearch(event.target.value);

	
	 return (
		<div className="App container ">
		<br/>
	
				<SearchBox search={search} handleChange={handleChange} />

		<br/><br/>
			<Row>
				<Col xs="12">
					<h3 className="peopleText" >People List</h3>	
				</Col>
			</Row>
			<br/>
					<div className="grid-container"  >

					{hits
					 .filter(hit=>hit.first_name.toLowerCase().includes(search.toLowerCase()))
					 .map(hit=>(

							<Link to={{pathname: `/detail/${hit.id}`}} className="link">
									<div key={hit.id} className="peopleB">		
											<img src={hit.avatar} alt="" class="peoplePic"/> 
											<div className="belowSide">
											<br/>
												<p><b>Name: </b> {hit.first_name} {hit.last_name}</p>
												<p><b>Email: </b>{hit.email}</p>
												<p><b>Id: </b>{hit.id}</p>	
											</div>
										<br/>
									</div>
							</Link>
	 				))}
			
					</div>
			<br/><br/>			
		</div>
	)	
		
}

export default Content