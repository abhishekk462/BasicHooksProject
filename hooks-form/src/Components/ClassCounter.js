
import React ,{Component} from 'react'

class ClassCounter extends Component{
    constructor(props){
        super(props)
        this.state= {
             count: 0
        }
    }

    onIncerement = () => {
        this.setState({
               count: this.state.count+1
            })
    }
 render(){
     return (
           <React.Fragment>
               <h3>Hooks Concept</h3>
                  <button onClick={this.onIncerement}>count{this.state.count}</button>
           </React.Fragment>)
 }

}
export default ClassCounter