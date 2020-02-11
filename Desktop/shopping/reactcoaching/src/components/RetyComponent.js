import React from 'react';
class RetyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //the return is bound here
            name: "Rety"
        };
    }
    render() {
        return (
            <div>
                {this.state.name}
            </div>
        );
    }
}
export default RetyComponent