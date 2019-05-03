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
            <a href="#" onClick={() => { props.executeDeleteItem(props.deleteItem); }}> Delete </a>
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
        this.executeDeleteItem = this.executeDeleteItem.bind(this);

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


    executeDeleteItem(item) {
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
                <ul>
                    {
                        this.state.items.map((f) =>
                            <li key={f} value={f}> {f} <DeleteButton executeDeleteItem={this.executeDeleteItem} deleteItem={f} />
                            </li>)
                    }
                </ul>

                <Form handleAddItem={this.handleAddItem} />
                <DeleteAll handleRemoveAllItems={this.handleRemoveAllItems} />
            </div>
        )
    }
}



ReactDOM.render(<Grocery name="grocery" />, document.getElementById('app'));