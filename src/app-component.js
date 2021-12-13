import React, { Component } from "react";
import Button from 'terra-button/lib/Button';
import Field from 'terra-form-field';
import Input from 'terra-form-input';
import axios from "axios";
import RepositoriesTable from "./table";
import Table from "./table2";

export class AppComponent extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
          userName: '',
          totalRepositories: '',
          repositories: [],
      };
  
      this.getRepositories = this.getRepositories.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ 
          userName: e.target.value,
          totalRepositories: '',
          repositories: []
        });
    }

    getRepositories() {
        if(this.state.userName === '') {
          window.alert('Username is required');
        }

        axios
            .get(`http://localhost:3003/repositories?username=${this.state.userName}`)
            .then(response => {
                const totalCount = response.data.data.user.repositories.totalCount;
                const nodes = response.data.data.user.repositories.nodes;
                
                this.setState({
                    totalRepositories: totalCount,
                    repositories: nodes,
                });
            });

        console.log(this.state);    

    }

    render() {
        return(
            <div className="gitapp-parent-div">
                 <div>
                    <div>
                        <Field label="Enter github username" htmlFor="user-name" maxWidth="250px">
                            <Input name="input" 
                            id="blank" ariaLabel="Blank" value={this.state.userName} onChange={this.handleChange}/>
                        </Field>
                    </div>
                    <div>
                        <Button text="Submit" variant="emphasis" onClick={this.getRepositories} />
                    </div>
                </div>
                <div>
                    <Table repositories={this.state.repositories} />
                </div>
            </div>
        );
    }
}

// export default AppComponent;