import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';

import { IMAGE_URL, DESTINATIONS } from '../../shared/consts';

import {
  changeRoute,
} from '../../actions/actions';

import {
    Destination,
} from './../../components';

class TopDestinations extends Component {

  constructor(props){
    super(props);

    this.handleDestinationClick = this.handleDestinationClick.bind(this);
  }

  handleDestinationClick(name){
    this.props.changeRoute(`/city/${name}`);
  }

  renderDestinations(){
    return DESTINATIONS.map(destination => {
      return(
        <div className="cell small-12 medium-6 large-4" key={destination.id}>
          <Destination
            destination={destination}
            onClick={this.handleDestinationClick}
          />
        </div>
      )
    })
  }

  render(){
    
    return(
      <div className="top-destinations-page grid-container">
        <div className="title">Top destinations</div>
        <div className="grid-x grid-padding-x align-justify">
          { this.renderDestinations() }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
});


export default connect(mapStateToProps, { changeRoute })(TopDestinations);
