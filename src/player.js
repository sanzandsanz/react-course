class PlayerApp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            players: ['sanjay']
        }
    }

    render() {
        return (
            <div>
                <h1>List of Player</h1>
                {this.state.players}
                <Player />
            </div>
        );
    }
}

class Player extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            name: ''
        }
    }

    addPlayer(e){
        console.log('form submitted');
        e.preventDefault();

        console.log(e.target);
        console.log(e.target.elements);
        
        const playerName = e.target.elements.playername;

        alert(playerName);
        alert('player added');

        this.setState()
    }

    render(){
        return (
            <div>
                <form onSubmit={this.addPlayer}>
                    <input type="text" name="playername" />
                    <button> Add Player</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<PlayerApp />, document.getElementById('app'));