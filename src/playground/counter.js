class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddNumber = this.handleAddNumber.bind(this);
        this.handleSubNumber = this.handleSubNumber.bind(this);
        // This will actually set the default behaviour
        this.state = {
            count : 0
        }
    }

     handleAddNumber() {
        this.setState((prevState1) => {
            console.log(prevState1);
            return {
              count: prevState1.count + 1
            };
        });
     }

     handleSubNumber() {
        this.setState((prevState) => {
            return {
              count: prevState.count - 1
            };
        });
     }

     render(){
         return(
             <div>
                 <p>Count : {this.state.count}</p>
                <button onClick={this.handleAddNumber}>+1</button>
                <button onClick={this.handleSubNumber}>-1</button>
             </div>
             
         );
     }
}

ReactDOM.render(<Counter />, document.getElementById("app"));