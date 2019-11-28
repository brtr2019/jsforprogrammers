<html>
<head>  
<script src="https://unpkg.com/react@16/umd/react.development.js"></script>  
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>  
<script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>  
</head>  
<body>  
    <div id="challenge-node"></div>  
    <script type="text/babel">
    /*-------React: Set State with this.setState--------*/
    class MyComponent extends React.Component{
        constructor(props){
        super(props);
        this.state = {
            name: 'Igor'
        }
    }
    function handleClick(){
        this.setState({name:'Vasya'})
    }
        
    render(){
        return(
            <div>
                <button onClick={this.state.handleClick}>Click me!</button>
                <h1>{this.state.name}</h1>
            </div>
        )
}
}
ReactDOM.render(<MyComponent/>, document.getElementById('challenge-node'))  
    
    </script>  
</body>  
</html>
