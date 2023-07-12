import React, { Component } from 'react';
import {useState} from 'react';

const PropertyDesc = ({ property }) => {
    console.log(property.description);
    return (
      <div className="overflow-x-auto">
        <div className="flex flex-wrap justify-between text-2xl">
          {Object.keys(property.description)
              .filter(key => property.description[key] != null)
              .map(key => (
                  <div key={key} className="w-1/2 pr-4 text-left">
                    <span className="font-medium text-dark-waves">{key.replace(/_/g, " ")}: </span>
                    <span className="font-medium text-waves">{property.description[key]}</span>
                    <div className="mt-4 mb-4"></div>
                  </div>
              ))}
        </div>
      </div>



    );
  };
  


class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      property: {},
      load: false
    };
  }


  async componentDidMount() {
    await fetch('src/partials/schema.json')
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(data => {
        console.log(data);
        console.log(data.data.home_search.results[0]);
        this.setState({ property: data.data.home_search.results[0] });
        const { property } = this.state;
        this.state.load = true;
      })
      .catch(error => console.log(error));
  }

  render() {
    const { property } = this.state;
    console.log(property);
    if (!this.state.load) {
        return <div />
    }

    return(
        <div>
            <PropertyDesc property={property}/>
        </div>
    );
  }

/*
  render() {
    const { property } = this.state;
    return (
      <div className="card bg-white rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <div className="text-black font-bold text-xl mb-2">{property.property_address}</div>
        </div>
    </div>
    );
    }*/
}

export default Card;