import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';

import { IMAGE_URL } from '../../shared/consts';

import {
  getActivityInfo,
} from './../../actions/city';

import {
} from './../../components';

class Activity extends Component {

  constructor(props){
    super(props);

    this.state = {
      loading: true,
    }
  }


  componentDidMount(){
    const { id } = this.props.match.params;
    
    this.props.getActivityInfo({id})
    .then(() => {
      this.setState({loading: false});
    });
  } 

  render(){
    const { activity_data } = this.props;

    if(this.state.loading){
      return(
        <div className="activity-page grid-container">
          <div className="loader">
            <ReactLoading type={"spinningBubbles"} color={"#087e8b"} />
          </div>
        </div>
      )
    }
    
    return(
      <div className="activity-page grid-container">
        <div className="image">
            <img src={`${IMAGE_URL}${activity_data.attributes.media.banner.url}.jpg`} alt=""/>
        </div>
        <div className="title">
            { activity_data.attributes.title }
        </div>
        <div className="description"
            dangerouslySetInnerHTML={{ __html: activity_data.attributes.description }}>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  activity_data: state.city.activity_data
});


export default connect(mapStateToProps, { getActivityInfo })(Activity);
