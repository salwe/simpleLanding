import React from "react";

export class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSubscribed: false
        }
    }
    onChangeSub (e) {
        e.preventDefault();
        if (!this.email.value.trim()) {
            return;
        }

        this.setState({
            isSubscribed: !this.state.isSubscribed
        });

        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
            if(responseJson.status !== 200) {
                throw new Error('Incorrect server status');
            }
            alert('Success');
        })
        .catch((error) => {
            console.error(error);
        });

        this.email.value = '';
    }
    render() {
        return(
            <form className="form-inline text-center" onSubmit={ this.onChangeSub.bind(this) }>
                <div className="input-group">
                    <input type="text" ref={node => { this.email = node }} className="form-control" placeholder="example@mal.com"/>
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="submit">Subscribe</button>
                    </span>
                </div>
            </form>
        )
    }
}