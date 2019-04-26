let count = 0;

const addNumber = () => {
    count++;
    renderApp();
}

const subNumber = () => {
    count--;
    renderApp();
}

const renderApp = () => {
    const template2 = (
        <div> 
            <h1> Count :  {count} </h1>
            <button onClick={addNumber}> +1 </button>
            <button onClick={subNumber}> -1 </button>
        </div>
    );

    ReactDOM.render(template2, document.getElementById("app"));
}

renderApp();