import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class NavigationBar extends React.Component {

  renderLogo(){
    return(
        <Link className="favicon" to="/"><img src="/img/favicon.ico"/></Link>
    )
  }

  render() {
    const userLinks = (
        <section className="right-side">
            <button className="btn pull-right" type="button">
                <Link to="/addCategory"> Add Category </Link>
            </button>
        </section>
    );

    return (
        <section>
            <section className="navbar">
                    { userLinks }
            </section>
        </section>
    );
  }
}


export default NavigationBar;