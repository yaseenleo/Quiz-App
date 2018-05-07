import React from "react";
import Htmlquiz from "./htmlquiz";
import  Cssquiz from "./cssquiz";
import Jsquiz from "./jsquiz";

export default class quiz extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            quizName : "",
           
        };
        this.htmlset = this.htmlset.bind(this);
        this.cssset = this.cssset.bind(this);
        this.jsset = this.jsset.bind(this);
    }

    htmlset(){
        this.setState({
            quizName : "html",
           
        });
        
    }
    cssset(){
        this.setState({
            quizName : "css",
           
        })
    }
    jsset(){
        this.setState({
            quizName : "js",
           
        })
    }
    
    render(){
        
        var quiztoshow = () =>{
        if(this.state.quizName==="html"){
           return (
          
           <Htmlquiz />)
        }
        else  if(this.state.quizName==="css"){
           return (<Cssquiz />)
        }
        else  if(this.state.quizName==="js"){
           return (<Jsquiz  />)
        }
        else{
            return(<div>
            </div>)
        }
    }
        
        return(
            <div> 
                <button onClick={this.htmlset} >html</button>
                <button onClick={this.cssset} >css</button>
                <button onClick={this.jsset} >js</button>
               
                {quiztoshow()}
                
               
             </div>
        )
    }
    componentDidMount(){
        
    }
   
}