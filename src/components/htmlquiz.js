import React from "react";
import {shuffle} from "./randomize";
import Clock from "./Clock";
import {htmlques} from "./questions";



export default class htmlquiz extends React.Component {
    state={
        timeout : false,
        score:0,
        scoreshow : false
      
    }
   
   
      
    render(){
        var submit = (e)=> {
            e.preventDefault();

          var answer = [e.target.q1.value,e.target.q2.value
        ,e.target.q3.value,e.target.q4.value];
         var key =["q1","q2","q3","q4"];
            var count=0;
            for(var i=0 ; i<4 ;i++)
            {
                for(var j=0 ; j<4 ; j++)
                {
               
                    if(key[i]===htmlques[j][0])
                {
                    if(answer[i]===htmlques[j][6])
                    {
                        count++;
                    }
                }
            }
        }
        this.setState({
            score:count,
            scoreshow :true,
            timeout:true
        });
            console.log(count);
        }
       
       
      
    var htmlques2 = htmlques;
    htmlques2=shuffle(htmlques2);
  
    console.log(htmlques2);
    
        const questions = htmlques2.map((qs)=>
        <div>
            <p>{qs[1]}</p>
        <span >{qs[2]}</span>  <input  type="radio" name={qs[0]} value="a" />
        <span>{qs[3]}</span> <input type="radio" name={qs[0]} value="b"/>
        <span>{qs[4]}</span> <input type="radio" name={qs[0]} value="c"/>
        <span>{qs[5]}</span> <input type="radio" name={qs[0]} value="d"/>
        </div>

        )
        return(
            <div>
                
             {this.state.scoreshow? <p>your score is <strong>{this.state.score}</strong></p> : 
            <div>
                  <h4 style={{"marginleft":"50px"}}>html QUIZ</h4>
                <h6 style={{"marginleft":"50px"}}>you have 5 min to selve these 10 questions</h6>
                <hr/>
                <span>YOU HAVE 5 MINUTES.... TIME LEFT:</span>
                <Clock />
            <form style={{"marginleft":"50px"}} onSubmit={submit}  >
                <ul>
            {questions}
            </ul>
            <button type="submit" disabled={this.state.timeout}>submit</button>
             </form>
                </div> }
            
            </div>
        )
    }
 componentDidMount(){
    setTimeout(()=>{
        this.setState({
            timeout: true,
            scoreshow:true
        })
    }
,300000)
 }


    }