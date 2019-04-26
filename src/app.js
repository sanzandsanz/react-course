class IndecisionApp extends React.Component {
    render()
    {
        const subtitle = 'This is my sub-title !!';
        const options = ['cricket', 'hockey', 'basketball', 'football'];
        return (
            <div>
                <Header title="My World !!" subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
        <div>
            <h1> {this.props.title} </h1>
            <p>{this.props.subtitle} </p>
        </div>
        );
    }
}

class Action extends React.Component {
    render(){
        return (
        <p> Body </p>
        );
    }
}

class Options extends React.Component{
    render() {
        return (
            <div>
                <p> {this.props.options.length}</p>
                <ol>
                    {
                        this.props.options.map((option) => <li key={option}> {option} </li>)
                    }
                </ol>
            </div>
        );
    }
}

class Option extends React.Component{
    render() {
        return (
            <li>
                {this.props.option}
            </li>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));