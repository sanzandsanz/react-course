class Fruits extends React.Component {

    constructor(props) {
        super(props);
        
        this.handleAddItem  = this.handleAddItem.bind(this);
        this.state = {
            items: ["apple","ball"]
        }
    }

    handleAddItem(event){
        event.preventDefault();

        const fruit = event.target.elements.fruitname.value;
        const array = this.state.items.push(fruit);
        console.log(array);
      
        this.setState({ items: array}, 
            () => {
                console.log(this.state.items)
            });

        console.log(this.state.items);
    }

    // componentDidMount() {
    //     console.log('component mount');
    // }

    // componentWillMount() {
    //   console.log('component will mount');
    // }

    // componentDidUpdate(){
    //     console.log('component update');
    // }
    
    render() {
        return (
            <div>
                <h1> Fruits </h1>
                <ul>
                { this.state.items.map((f) => <li key={f}> {f} </li>) }
                </ul>

                <form onSubmit={this.handleAddItem}>
                    <input type="text" name="fruitname" />
                    <br/>
                    <button> Add </button>
                </form>
            </div>
        )
    }
}



ReactDOM.render(<Fruits />, document.getElementById('app'));