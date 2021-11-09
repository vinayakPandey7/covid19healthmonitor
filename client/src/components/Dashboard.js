import React, { Component } from "react";
import apiService from "../services/apiService";
import { Link } from "react-router-dom";
import './dashboard.css';
var Highcharts = require('highcharts/highstock'); 
require('highcharts/modules/exporting')(Highcharts);
require('highcharts/modules/export-data')(Highcharts);
export default class Dashboard extends Component {
  constructor() {
    super();

    this.retrieveTutorials = this.retrieveTutorials.bind(this);
    this.highChartsRender = this.highChartsRender.bind(this);
    this.fetchLatestData = this.fetchLatestData.bind(this);
    this.state = {
      userHealthRecord: [],

      tempSeries: [{name: 'Temperature',data: [],}],
      spo2Series: [{name: 'spo2',data: []}],
      bpSeries:  [{name: 'BP',data: []}],

      tempTemp: [],
      tempSpo2: [],
      tempBp: [],
    };



  }

  componentDidMount() {
      this.retrieveTutorials();

      this.countDownInterval =  setInterval(this.fetchLatestData, 3000);
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
            tempSeriesData.push(tempDate, response.data.LatestData.temperature,response.data.LatestData._id)
            spo2SeriesData.push(tempDate, response.data.LatestData.spo2)
            bpSeriesData.push(tempDate, response.data.LatestData.bp)

            // let x = this.state.tempSeries;
            // x[0].data.push([55,55])
            // console.log(x)

             
            this.setState(prevState => ({
              // userHealthRecord:[...prevState.userHealthRecord,[response.data.LatestData]],
              // tempSeries: [...prevState.tempSeries[0],[22,22]],
              tempTemp: tempSeriesData ,  
              tempSpo2: spo2SeriesData,
              tempBp: bpSeriesData,
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
        console.log(this.state.spo2Series)
        console.log(this.state.bpSeries)


        Highcharts.stockChart({
            chart: {
              // type: 'pie',
              renderTo: 'tempID',
              events: {
                load: function () {
    
                    // set up the updating of the chart each second
                    var series = this.series[0];
                    that.countDownIntervalTemp =    setInterval(function () {
                        // var x = (new Date()).getTime(), // current time
                        //     y = Math.round(Math.random() * 100);
                        console.log(series)
                        // console.log(that.state.tempTemp[0]<37 ? series.points.update({
                        //   marker: {
                        //     fillColor: 'red'
                        //   }
                        // }) : series.points.update({
                        //   marker: {
                        //     fillColor: 'green'
                        //   }
                        // }))
                        
                         series.addPoint(that.state.tempTemp, true, true);
                    }, 4000);
                    console.log(series)
                }
            }
            },
          //   tooltip: {
          //     crosshairs: true,
          //     shared: true
          // },
          rangeSelector: {
            buttons: [{
                count: 1,
                type: 'minute',
                text: '1m'
            },{
                count: 5,
                type: 'minute',
                text: '5m'
            },{
              count: 15,
              type: 'minute',
              text: '15m'
            },{
            count: 60,
            type: 'minute',
            text: '1Hr'
            },{
              type: 'all',
              text: 'All'
            }],
            inputEnabled: true,
            selected: 1
          }, exporting: {
            enabled: true
        },
        time: {
          useUTC: false
      },
            title: {
              verticalAlign: 'top',
              floating: true,
              text: 'Body Temperature',
              style: {
                fontSize: '25px',
              }
            },
            credits: {enabled: false},
            plotOptions: {
              series: {
                allowPointSelect: true,
                marker: {
                  enabled: true,
                  color:'black',
                  fillColor: 'red',
                  lineWidth: 4,
                  lineColor: null, // inherit from series
                  states: {
                    hover: {
                      lineWidth: 6
                    },
                  //   select: {
                  //     fillColor: 'orange'
                  //   }
                  }
                }
              }
          
              
            },
            series: that.state.tempSeries
        });


        //spo2
        Highcharts.stockChart({
          chart: {
            // type: 'pie',
            renderTo: 'spo2ID',
            events: {
              load: function () {
  
                  // set up the updating of the chart each second
                  var series = this.series[0];
                  that.countDownIntervalSpo2=   setInterval(function () {
                      // var x = (new Date()).getTime(), // current time
                      //     y = Math.round(Math.random() * 100);
                      series.addPoint(that.state.tempSpo2, true, true);
                  }, 4000);
                  console.log(that.state.spo2Series)
              }
          }
          },
          rangeSelector: {
            buttons: [{
                count: 1,
                type: 'minute',
                text: '1m'
            },{
                count: 5,
                type: 'minute',
                text: '5m'
            },{
              count: 15,
              type: 'minute',
              text: '15m'
            },{
            count: 60,
            type: 'minute',
            text: '1Hr'
            },{
              type: 'all',
              text: 'All'
            }],
            inputEnabled: true,
            selected: 1
          }, exporting: {
            enabled: true
        },
        time: {
          useUTC: false
      },
            title: {
              verticalAlign: 'top',
              floating: true,
              text: 'spo2',
              style: {
                fontSize: '25px',
              }
            },
            credits: {enabled: false},
            plotOptions: {
              series: {
                allowPointSelect: true,
                marker: {
                  enabled: true,
                  color:'black',
                  fillColor: 'red',
                  lineWidth: 4,
                  lineColor: null, // inherit from series
                  states: {
                    hover: {
                      lineWidth: 6
                    },
                  //   select: {
                  //     fillColor: 'orange'
                  //   }
                  }
                }
              }
          
              
            },
          series: that.state.spo2Series
      });


        //blood Pressure
        Highcharts.stockChart({
          chart: {
            // type: 'pie',
            renderTo: 'bpID',
            events: {
              load: function () {
  
                  // set up the updating of the chart each second
                  var series = this.series[0];
                  that.countDownIntervalBp= setInterval(function () {
                      // var x = (new Date()).getTime(), // current time
                      //     y = Math.round(Math.random() * 100);
                       series.addPoint(that.state.tempBp, true, true);
                  }, 4000);
                  // console.log(that.state.tempSeries)
              }
          }
          },
          rangeSelector: {
            buttons: [{
                count: 1,
                type: 'minute',
                text: '1m'
            },{
                count: 5,
                type: 'minute',
                text: '5m'
            },{
              count: 15,
              type: 'minute',
              text: '15m'
            },{
            count: 60,
            type: 'minute',
            text: '1Hr'
            },{
              type: 'all',
              text: 'All'
            }],
            inputEnabled: true,
            selected: 1
          }, exporting: {
            enabled: true
        },
        time: {
          useUTC: false
      },
            title: {
              verticalAlign: 'top',
              floating: true,
              text: 'Blood Pressure',
              style: {
                fontSize: '25px',
              }
            },
            credits: {enabled: false},
            plotOptions: {
              series: {
                allowPointSelect: true,
                marker: {
                  enabled: true,
                  color:'black',
                  fillColor: 'red',
                  lineWidth: 4,
                  lineColor: null, // inherit from series
                  states: {
                    hover: {
                      lineWidth: 6
                    },
                  //   select: {
                  //     fillColor: 'orange'
                  //   }
                  }
                }
              }
          
              
            },
          series: that.state.bpSeries
      });
      }
  

      componentWillUnmount() {
        // clearing set interval
        console.log('inside component will mount')
        clearInterval(this.countDownInterval);
         clearInterval(this.countDownIntervalTemp)
         clearInterval(this.countDownIntervalSpo2)
        clearInterval(this.countDownIntervalBp)
      };

  render() {
    // const { searchTitle, tutorials, currentTutorial, currentIndex } = this.state;

    return (
     
      <div class="container-fluid">


      {/* patient information */}
      <div className="container patient-div" >

        <div class="row patient-detail" >
          <div class="col-sm">
            <img src="../patientm.png" alt="not availble" id="profile-img"></img>
          </div>
          <div class="col-sm">
            <h2><strong>Vikram Sahu</strong></h2>
            <p>Patient id: 555254</p>
            <br/>
            <div className="patient-btn" >
            <button type="button" class="btn btn-info">View Profile</button>
            <button type="button" class="btn btn-warning contact-btn">Contact</button>
            </div>
            
          </div>

          <div class="col-sm">
            <p>sex: Male</p>
            <p>Age: 26</p>
            <p>Blood: 0+</p>
          </div>
        </div>
      

      </div>
     <hr/>
      {/* temp spo2 bp badge */}
      {/* <div className="col-sm">
        <div class="card text-white bg-primary mb-3 " >
          <div className="card-body">
         
            <h5 className="card-title param-text-img">Temperature</h5>
            <img src="../temp.svg" alt="spo2 img" className="param-img" width={35} height={35}></img>
            <p className="card-text param-value">37.5 C'</p>
          </div>
        </div>

  <div class="card text-white bg-success mb-3 " >
    <div class="card-body">
      <h5   class="card-title param-text-img">spo2</h5>
      <img src="../spo2.png" alt="spo2 img"  className="param-img" width={35} height={35}></img>
      <p class="card-text param-value">99</p>
    </div>
  </div>

  <div class="card text-white bg-warning mb-3" >
    <div class="card-body">
    <h5 class="card-title param-text-img">Blood Pressure</h5>
    <img src="../bp.svg" alt="spo2 img" className="param-img"  width={35} height={35}></img>
      
      
      <p className="param-value ">75</p>
    </div>

  </div>
      </div> */}
    














      {/* live data from patient */}
      <div class="row">
        <div class="col-sm">
        <div id="tempID">
        </div>
        </div>
        <div class="col-sm">
        <div id="spo2ID">
        </div>
        </div>
        <div class="col-sm">
        <div id="bpID">
  	    </div>
        </div>
      </div>


      
    </div>
        
        
        
     
    );
  }
}