import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import InstanceTitle from './InstanceTitle.js';
import Chart from './Chart.js';
import {Jumbotron, Row, Col, Thumbnail, Button } from 'react-bootstrap';
import Map from './Map.js';
import '../css/App.css';
import Top5 from './Top5.js';


class CollegeInstance extends Component {

  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    // Ajax calls here
    this.setState({
      chartData:{
        labels: ['White', 'Asian', 'Hispanic', 'African American', 'Other'],
        datasets:[
          {
            label:'Population',
            data:[
              617594,
              181045,
              153060,
              106519,
              105162
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)'
            ]
          }
        ]
      }
    });
  }
  
  render() {
    return (

      <div className="container" style={{background: "white", padding: "1em"}}>
       
        {/* Name of University */} 
        <div className="container" style={{width:"95%"}}>
          <Jumbotron> <center>
            <h2> University of Texas at Austin </h2>
          </center></Jumbotron>
        </div>  

        {/*city, state, website link*/} 
        <div className="container" style={{width:"85%", padding:"1em"}}>
          <center>
          <Col sm={4}> 
            <Thumbnail style={{background:"light-blue", height:"7em"}}>
              <p> City </p>
            </Thumbnail>
          </Col>
          <Col sm={4}> 
            <Thumbnail style={{background:"light-blue", height:"7em"}}>
              <p> State </p>
            </Thumbnail>
          </Col>
          <Col sm={4}> 
            <Thumbnail style={{background:"light-blue", height:"7em"}}>
              <Button> Website </Button>
            </Thumbnail>
          </Col>
          </center>
        </div>

        {/* Top 5 Majors */} 
        <div className="container" style={{width:"95%", padding:"1em"}}>
          <center>
            <Top5 A={"major 1"} B={"major 2"} C={"major 3"} D={"major 4"} E={"major 5"}  />
          </center>
        </div>
        
        {/* Demographics and Gender Ratio (Doughnut Charts) */} 
        <div className="container" style={{width:"95%", padding:"1em"}}>
          <Col sm={1}></Col>
          <Col sm={5}>
          <Chart  chartData={this.state.chartData} 
                  titleText="Demographics" 
                  legendPosition="right"/>
          </Col>
          <Col sm={5}>
          <Chart  chartData=
                      { {
                        labels: ['Female', 'Male'],
                        datasets:[
                          {
                            label:'Gender Ratio',
                            data:[
                              33,
                              67
                            ],
                            backgroundColor:[
                              'rgba(255, 99, 132, 0.6)',
                              'rgba(54, 162, 235, 0.6)',
                            ]
                          }
                        ]
                      } } 
                  titleText="Gender Ratio"
                  displayLegend={false} />
          </Col>
        </div>

        {/* Univ. Type, Tuitions */} 
        <div className="container" style={{width:"85%", padding:"1em"}}>
          <center>
          <Col sm={4}> 
            <Thumbnail style={{background:"light-blue", height:"7em"}}>
              <p> University Type </p>
            </Thumbnail>
          </Col>
          <Col sm={4}> 
            <Thumbnail style={{background:"light-blue", height:"7em"}}>
              <p> In-State Tuition </p>
            </Thumbnail>
          </Col>
          <Col sm={4}> 
            <Thumbnail style={{background:"light-blue", height:"7em"}}>
              <p> Out-of-State Tuition </p>
            </Thumbnail>
          </Col>
          </center>
        </div>

        {/* GMap */} 
        <div className="container" style={{width:"95%", padding:"1em"}}>
          <center><Map center={[30.2672, -97.7431]} zoom={11} /></center>
        </div>
        
      </div>
    );
  }
}

export default CollegeInstance;
