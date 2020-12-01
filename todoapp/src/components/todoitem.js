import React from "react"
import './layout.scss';

class TodoComponent extends React.Component{

    //state which helps to find whether the item is completed or not
    state = {
        itemcompleted: false
    }


    //this function is called when the completed button is clicked. All the values remain as it is but the completed button is 
    //set to true 
    completed = () =>{
        let item = {
            title: this.props.title,
            description: this.props.description,
            duedate: this.props.duedate,
            time: this.props.time,
            completed: true
        }

        //on clicking the complete button, the complete value is set to true
        this.setState({
            itemcompleted: true
        })
        this.props.updateitem(item , this.props.id)
    }
    render() {
        return(
            // These are the values which will be set when the update function is called when the todo item is completed
          <div className={'container ' + ((this.state.itemcompleted || this.props.completed) ? 'item-complete' : '')}> 
              <details>
                  <summary>{this.props.title}</summary>
                  <p> Description: {this.props.description}</p>
                  <p> DueDate: {this.props.duedate}</p>
                  <p>Time: {this.props.time}</p>
                  <button onClick = {this.completed} class = "complete"> Completed</button>
              </details>
          </div>  
        )
    }
}

export default TodoComponent