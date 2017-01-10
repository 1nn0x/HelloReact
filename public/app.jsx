var Greeter = React.createClass(
    {
        //Set default properties
        getDefaultProps: function () {
            return {
                name: 'React',
                message: 'Default'
            };
        },
        render: function () {
            var name = this.props.name;
            var message = this.props.message;
            return (
                <div>
                    <h1>Hello {name}!</h1>
                    <p>{message}</p>
                </div>
            );
        }
    });

var firstName = "Kyle";
var messageVar = "This is a Message";

ReactDOM.render(
    <Greeter name={firstName} message={messageVar}/>,
    document.getElementById("app")
);
