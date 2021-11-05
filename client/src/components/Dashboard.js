import React, { Component } from "react";
import apiService from "../services/apiService";
import { Link } from "react-router-dom";
var Highcharts = require('highcharts/highstock'); 

export default class Dashboard extends Component {
  constructor() {
    super();

    this.retrieveTutorials = this.retrieveTutorials.bind(this);
    this.highChartsRender = this.highChartsRender.bind(this);
    this.fetchLatestData = this.fetchLatestData.bind(this);
    this.state = {
      userHealthRecord: [],

      tempSeries: [{name: 'temperature',data: []}],
      spo2Series: [{name: 'spo2',data: []}],
      bpSeries:  [{name: 'bp',data: []}],

      tempTemp: [],
      tempSpo2: [],
      tempBp: [],
    };



  }

  componentDidMount() {
    this.retrieveTutorials();

    // this.highChartsRender();
    setInterval(this.fetchLatestData, 3000);
  }


  retrieveTutorials() {
    apiService.getAll()
      .then(response => {

       
          let tempSeries = [{name: 'temperature',data: []}];
          let spo2Series = [{name: 'spo2',data: []}];
          let bpSeries =  [{name: 'bp',data: []}];

          console.log(response)
          response.data.healthData.map((elem,i) => {
            let tempDate = new Date(elem.date).valueOf()
            tempSeries[0].data.push([tempDate, elem.temperature ])
            spo2Series[0].data.push([tempDate, elem.spo2 ])
            bpSeries[0].data.push([tempDate, elem.bp ])
          })
          
       this.setState({
          userHealthRecord: response.data.healthdata,
          tempSeries: tempSeries,
          spo2Series: spo2Series,
          bpSeries: bpSeries
        });
        console.log(this.state.userHealthRecord)

        console.log(this.state.tempSeries)
        console.log(this.state.spo2Series)
        console.log(this.state.bpSeries)
        
      })
      .then( res => {
        this.highChartsRender()
      })
      .catch(e => {
        console.log(e);
      });
  }

    fetchLatestData(){
      apiService.getLatest()
      .then(response => {

          let tempSeriesData = [];
          let spo2SeriesData = [];
          let bpSeriesData =  [];

         
        
            let tempDate = new Date(response.data.LatestData.date).valueOf()
            tempSeriesData.push(tempDate, response.data.LatestData.temperature)
            spo2SeriesData.push(tempDate, response.data.LatestData.spo2)
            bpSeriesData.push(tempDate, response.data.LatestData.bp)

            // let x = this.state.tempSeries;
            // x[0].data.push([55,55])
            // console.log(x)

              
            this.setState(prevState => ({
              // userHealthRecord:[...prevState.userHealthRecord,[response.data.LatestData]],
              tempSeries: [...prevState.tempSeries[0],[22,22]],
              tempTemp: tempSeriesData ,  
              tempSpo2: spo2SeriesData,
              tempBp: bpSeriesData
              // spo2Series[0].data: [...prevState.spo2Series, spo2SeriesData],
              // bpSeries:  [...prevState.bpSeries, bpSeriesData]
            }))







            // console.log(tempSeriesData)
            console.log(this.state)
            // console.log(bpSeriesData)
      //  this.setState({
      //     userHealthRecord: response.data.healthdata,
      //     tempSeries: tempSeries,
      //     spo2Series: spo2Series,
      //     bpSeries: bpSeries
      //   });

        
      })
      .then( res => {
        // this.highChartsRender()
      })
      .catch(e => {
        console.log(e);
      });
     
    }

    highChartsRender() {


        let that = this;
        console.log(this.state.tempSeries)
        Highcharts.stockChart({
            chart: {
              // type: 'pie',
              renderTo: 'tempID',
              events: {
                load: function () {
    
                    // set up the updating of the chart each second
                    var series = this.series[0];
                    setInterval(function () {
                        // var x = (new Date()).getTime(), // current time
                        //     y = Math.round(Math.random() * 100);
                        series.addPoint(that.state.tempTemp, true, true);
                    }, 4000);
                    console.log(that.state.tempSeries)
                }
            }
            },
            title: {
              verticalAlign: 'top',
              floating: true,
              text: 'Body Temperature',
              style: {
                fontSize: '15px',
              }
            },
            plotOptions: {
              
            },
            series: that.state.tempSeries
        });
      }
  

  render() {
    // const { searchTitle, tutorials, currentTutorial, currentIndex } = this.state;

    return (
      <div className="container">
        <div id="tempID">
        </div>
        <div id="spo2ID">
        </div>
        <div id="bpID">
  	    </div>
      </div>
    );
  }
}