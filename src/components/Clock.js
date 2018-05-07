import React from "react";
export default class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state={
            timer : 300,
            timerstatus : true,
          
        }
    }
   
    render(){
        return(
            <p>{Math.floor((this.state.timer)/60)} : {(this.state.timer%60)} </p>
        )
    }
    componentDidMount(){
      
        setInterval(()=>{
         if(this.state.timerstatus){ 
             if(this.state.timer>0)
             {  
        this.setState({
            timer: (this.state.timer-1)
        })
    }else{
        this.setState({
            timerstatus:false

        }) 
    }
    }
        },1000)
    
}
}