import React from "react"
import './layout.scss';

class ModalComponent extends React.Component{
    //Setting the values in the modal to empty which will later be set to the value entered.
    state = {
        title : "",
        description: "",
        duedate: "",
        time: ""
    }

    //Function where the title is set to the value entered as input
    setTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    //Function where the description is set to the value entered as input
    setDescription = (e) => {
        this.setState({
            description: e.target.value
        })
    }

    //Function where the duedate is set to the value entered as input
    setDueDate = (e) => {
        this.setState({
            duedate: e.target.value
        })
    }

    //Function where the time is set to the value entered as input
    setTime = (e) => {
        this.setState({
            time: e.target.value
        })
    }

    //this is the form submit function which is called upon clicking the submit function.
    formSubmit = () => {
        let item = {
            title: this.state.title,
            description: this.state.description,
            duedate: this.state.duedate,
            time: this.state.time,
            completed : false
        }
        //error check to ensure title and description is not empty
        if(item.title==='' || item.description===''){
          alert("Title or description cannot be empty");
          return;
        }

        //error check for date
        let todayDate = new Date();
        if(new Date(item.duedate).getTime() < todayDate.getTime()){
            alert("Due date cannot be before today");
            return;
        }
        //calls the add item function and passes the item along with it.
        this.props.addItem(item)

        //calls the closemodal function which sets the modal display as false.
        this.props.closemodal()
    }

    render() {    
        if(!this.props.show){
            return null;
        }
        return(
            <div>  
                {/* The form creation happens here, for each of the inputs we called the set function to set the value entered into 
                the form */}
                <div id="myModal" class="modal">

                    <div class="modal-content">
                        <span class="close">&times;</span>

                        <p class = "modal-heading">Add a new To-Do Item</p>    

                        <form name="addItem" action="">

                            {/* title label and on entering the input the set function is called and it is a required field */}
                            <label htmlFor="title">Title:</label>
                            <input onChange = {this.setTitle} 
                            type="text" id="title" name="title" required /><br />

                            {/* DESCRIPTION label and on entering the input the set function is called and it is a required 
                            field */}
                            <label htmlFor="description">Description:</label>
                            <input onChange = {this.setDescription} 
                            type="text" id="description" name="description" required /><br />

                            {/* DUEDATE label and on entering the input the set function is called */}
                            <label htmlFor="due_date">Due Date:</label>
                            <input onChange = {this.setDueDate}
                            type="date" id="due_date" name="due_date" /><br />
                            
                            {/* TIME label and on entering the input the set function is called */}
                            <label htmlFor="time">Time:</label>
                            <input onChange = {this.setTime}
                            type="time" id="time" name="time" /><br /><br />

                            {/* Submit button which calls the formsubmit function */}
                            <input type="button" onClick={this.formSubmit} value="Add" /> 

                        </form>  

                    </div>
                </div> 
            </div>
            
        )
    }
}

export default ModalComponent