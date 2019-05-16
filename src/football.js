class FootballApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddPlayer = this.handleAddPlayer.bind(this);
        this.handleRemovePlayers = this.handleRemovePlayers.bind(this);
        this.handleRemovePlayer = this.handleRemovePlayer.bind(this);

        this.state = {
            players: ['ram', 'shyam']
        }
    }

    handleAddPlayer(e) {
        e.preventDefault();
        const newPlayer = e.target.elements.playername.value.trim();
        this.setState((prevState) => {
            const playerExist = prevState.players.includes(newPlayer)
            !playerExist &&  this.state.players.push(newPlayer);
        });
    }

    handleRemovePlayer(player){
        console.log(player);
        console.log('removed' + player);
    }
    
    handleRemovePlayers() {
        this.setState({ players: [] });
    }

    render() {
        return (
            <div>
                <Header />
                {
                    this.state.players.map((p) =>
                     <div key={p}>
                        {p} <button onClick={this.handleRemovePlayer}> Remove Item </button>
                    </div>)
                }
                <br />
                <Action handleAddPlayer={this.handleAddPlayer}
                    handleRemovePlayers={this.handleRemovePlayers} />
            </div>
        );
    }
}

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>
                    Football Team
                </h1>
            </div>
        );
    }
}

const Action = (props) => {
    return (
        <div>
            <form onSubmit={props.handleAddPlayer}>
                <input type="text" name="playername"></input>
                <br />
                <br />
                <button> Add Player </button>
            </form>
            <button onClick={props.handleRemovePlayers}> Remove All </button>
        </div>

    );
}

ReactDOM.render(<FootballApp />, document.getElementById("app"));
