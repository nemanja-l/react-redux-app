import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';

import {
  getCityActivities,
} from './../../actions/city';

import {
  changeRoute,
} from '../../actions/actions';

import {
  Activity
} from './../../components';

class City extends Component { 

  constructor(props){
    super(props);

    this.state = {
      loading: true,
    }

    this.rednderCityActivities = this.rednderCityActivities.bind(this);
    this.onActivityClick = this.onActivityClick.bind(this);
  }

  rednderCityActivities(){
    const { activities } = this.props;

    return activities.map((activity, index) => {
      return(
        <div className="cell small-12 medium-6 large-4" key={activity.id}>
          <Activity
            activity={activity}
            onClick={this.onActivityClick}
          />
        </div>
      )
    })
  }

  onActivityClick(id){
    this.props.changeRoute(`/activity/${id}`);
  }

  componentDidMount(){
    const { city } = this.props.match.params;
    this.props.getCityActivities({city, limit: 15, offset: 1})
    .then(() => {
      this.setState({loading: false});
    });

  }

  render(){

    return(
      <div className="city-page grid-container">
        <div className="city-name">Top attractions in <span>{this.props.match.params.city}</span></div>
        {
          this.state.loading ?
          <div className="loader">
            <ReactLoading type={"spinningBubbles"} color={"#087e8b"} />
          </div>
          :
          <div className="grid-x grid-padding-x align-justify">
            { this.rednderCityActivities() }
          </div>
        }
        
      </div>
    )
  }
}

const mapStateToProps = state => ({
  activities: state.city.activities,
});


export default connect(mapStateToProps, { getCityActivities, changeRoute })(City);
