console.log("App.js is running !!")

// JSX - JavaScript XML
var template = (
    <div>
        <h1> There should be only 1 single root element !! </h1> 
        <p> both heading and paragraph tag are now included within the div single root element. If DIV element is not added then 
            we will endup with two root elements H1 and P tags and it will give compile error </p>
    </div>);
var appRoot = document.getElementById("app");

var user = {
    name: 'Sanjay',
    age: 10,
    address: 'Kogarah',
    options: ['Nepal', 'Australia']
};

function getLocation(location){
    if(location){
        return <p>Location: {location}</p>;
    }
}


var newTemplate = (
    <div>
        <p> Name : {user.name ? user.name : "Unknown"} </p>
        { user.age > 20 && <p> Age: {user.age} </p>} 
        { getLocation(user.address)}  
        { user.options.length > 0 && 
            <ol> 
                <li>
                    { user.options[0]}
                </li>
                <li>
                { user.options[1]}
                </li>
            </ol>
        }
    </div>
    );

ReactDOM.render(newTemplate, appRoot);