const ListItems = (props) => {
    return (
        <ul>
            {
                props.items.map((f) =>
                    <li key={f}> 
                        {f} <DeleteButton handleDeleteItem={props.handleDeleteItem} deleteItem={f} />
                    </li>)
            }
        </ul>
    );
}

const Form = (props) => {
    return (
        <div>
            <form onSubmit={props.handleAddItem}>
                <input type="text" name="itemname" />
                <br />
                <button> Add </button>
            </form>
        </div>
    );
}


const DeleteButton = (props) => {
    return (
        <div>
            <a href="#" onClick={() => { props.handleDeleteItem(props.deleteItem); }}> Delete </a>
        </div>
    );
};


const DeleteAll = (props) => {
    return (
        <div>
            <button onClick={props.handleRemoveAllItems}> Remove All</button>
        </div>
    );
}


class Grocery extends React.Component {
    constructor(props) {
        super(props);

        this.handleAddItem = this.handleAddItem.bind(this);
        this.handleRemoveAllItems = this.handleRemoveAllItems.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);

        this.state = {
            items: ["apple", "ball"]
        }
    }

    handleAddItem(event) {
        console.log(event);
        event.preventDefault();

        const item = event.target.elements.itemname.value;

        this.setState((prevState, p) => {
            console.log('prvious state');
            console.log(prevState.items);

            if (!prevState.items.includes(item)) {
                this.state.items.push(item);
            }

            return {
                items: this.state.items
            }
        })

        console.log(this.state.items);
    }


    handleDeleteItem(event) {
        event.preventDefault();
        console.log('deleting');
    }


    handleDeleteItem(item) {
        console.log('item to be deleted ' + item);

        this.setState((prevState) => {
            const updatedItems = prevState.items.filter(i => i != item);
            console.log(updatedItems);
            return {
                "items": updatedItems
            }
        })
    }


    handleRemoveAllItems() {
        console.log('remove all');

        this.setState({ items: [] },
            () => {
                console.log(this.state.items)
            });
    }

    
    render() {
        return (
            <div>
                <ListItems handleDeleteItem={this.handleDeleteItem} items={this.state.items}/>
                <Form handleAddItem={this.handleAddItem} />
                <DeleteAll handleDeleteAllItems={this.handleRemoveAllItems} />
            </div>
        )
    }
}

ReactDOM.render(<Grocery name="grocery" />, document.getElementById('app'));