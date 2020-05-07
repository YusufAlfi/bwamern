import React, { Component } from 'react'

import Header from 'Parts/Header'
import Hero from 'Parts/Hero'


import landingPage from 'json/landingPage.json'


export default class LandingPage extends Component {
  render() {
    return (
    <>
      <Header {...this.props}></Header>
      <Hero data={landingPage.hero} /> 
    </>
    );        
  }
}
