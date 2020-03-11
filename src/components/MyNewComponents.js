import React, {Component} from 'react';

class MyNewComponent extends Component{
    render(){
        return(
            <div>
                {this.props.someText}
            </div>
        );
    }
};

export default MyNewComponent;