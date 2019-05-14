import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.js';

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);

        this.subtitle = 'This is my sub-title';
        this.handleDeletOption = this.handleDeletOption.bind(this);
        this.handleAddingNewOption = this.handleAddingNewOption.bind(this);

        this.state = {
            options: ['cricket', 'hockey', 'basketball', 'football']
        }
    }

    handleAddingNewOption(option) {
        console.log('handle Add Option');
        console.log(option);

        if (!option) {
            return 'Enter valid value to add';
        }

        if (this.state.options.indexOf(option) > 0) {
            return 'This value already exist';
        }

        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            };
        });
    }

    handleDeletOption() {
        this.setState(() => {
            console.log(this.state.options);
            return {
                options: []
            }
        });
    }

    render() {
        return (
            <div>
            <h1> Hello World !! </h1>
                <Header title="My World !!" subtitle={this.subtitle} />
                <Options options={this.state.options} handleDeletOption={this.handleDeletOption} />
                <Action />
                <AddOption handleAddingNewOption={this.handleAddingNewOption} />
            </div>
        );
    }
}



class Action extends React.Component {
    render() {
        return (
            <div> Action</div>
        );
    }
}

class Options extends React.Component {
    handleAddOption(e) {
        e.preventDefault();

        const option = 'Rugby';

        if (option) {
            this.props.handleAddOption(option);
        }

    }

    render() {
        return (
            <div>
                <p> {this.props.options.length}</p>
                <ol>
                    {
                        this.props.options.map((option) => <li key={option}> {option} </li>)
                    }
                </ol>

                <button onClick={this.props.handleDeletOption}> DeleteAll </button>


            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <li>
                {this.props.option}
            </li>
        );
    }
}

class AddOption extends React.Component {

    constructor(props) {
        super(props);
        this.onAddingNewOption = this.onAddingNewOption.bind(this);

        this.state = {
            error: undefined
        }
    }

    onAddingNewOption(e) {
        e.preventDefault();

        console.log(e.target);
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddingNewOption(option);

        this.setState(() => {
            return {
                error: error
            };
        });
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onAddingNewOption}>
                    <input type="text" name="option" />
                    <button> Add Option</button>
                </form>
            </div>
        );
    }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));