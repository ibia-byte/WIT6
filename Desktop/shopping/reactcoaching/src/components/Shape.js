import React from 'react';
class Shape extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //the return is bound here
            name: "Shape"
        };
    }
    render() {
        return (
            <div>
         <p>{this.props.name}</p>  
        <p>{`this shape has ${this.props.sides}sides`}</p>     
        <p>{`this shape has ${this.props.angles}angles`}</p> 
        <p>{`this shape has ${this.props.perimeter}as its Perimeter`}</p> 
        <p>{`this shape has ${this.props.surfacearea}as its SurfaceArea`}</p>
        <p>{`this shape has ${this.props.volume}as its Volume`}</p>
            </div>
        );
    }
}
export default Shape