import React from "react";

export default class Footer extends React.Component {


    render() {
       return (
           <div>
               <p class="copyright"> Copyright Megan {this.props.year}</p>
           </div>
       ); 
    }


}