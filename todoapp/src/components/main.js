import React from "react";
import TodoComponent from './todoitem';
import ModalComponent from './modalform';
import './layout.scss';


class MainComponent extends React.Component {
    //state variable helps to set the items and modaldisplay which helps in displaying the pop up when add button is clicked
    state = {
        items : [],
        modaldisplay: false
    }

    //this helps in loading the items on page load
    componentDidMount() {
        this.fetchitems();
    }

    //this function is defined to help toggle the modaldisplay value. On running this function, the modal display is set to true and 
    //the modal is displayed
    listadd = () => {
        this.setState({
            modaldisplay: true
        })
    }

    //This function is called on pressing the submit button in the form. It closes the modal.
    closemodal = () => {
        this.setState({
            modaldisplay: false
        })
    }

    //this function invokes the GET API and returns the items from the database.
    fetchitems = () => {
        fetch('http://localhost:8000/lists', {
        })
        .then(response => response.json())
        .then(data => this.setState({
            items: data
        }))
    }

    //this function invokes the POST API and adds an item to the database.
    additem = (items) => {
       fetch('http://localhost:8000/lists', {
            method: 'POST',
            body: JSON.stringify(items),
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(() => {
            this.fetchitems() ;
        }
            
        )  
    }

    // this function invokes the PUT API and updates the item in the database. In this case this is achieved by marking it 
    // complete.
    updateitem = (items , id) =>{
          fetch(`${'http://localhost:8000/lists'}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(items),
            headers: {
                'content-type': 'application/json'
            }
        }).then(
            this.fetchitems()
        )
    }

    render() {
        return(
            <div>
                {/* On clicking the add button, the modalcomponent is invoked along with which the additem and closemodal function 
                values are also passed*/}
                <button id = "list-add" onClick={this.listadd}> Add Item </button>
                <ModalComponent show={this.state.modaldisplay}
                                addItem={this.additem}
                                closemodal={this.closemodal} />

                {/* This is where the todoitems are displayed, here first the todocomponent is called and each subpart is passed to 
                the todocomponent                */}
                <div id="flex" class = "flex-box">
                    {this.state.items.map((todoitem, index) => {
                        return (         
                            <TodoComponent title = {todoitem.title} 
                                           description = {todoitem.description}
                                           duedate = {todoitem.duedate}
                                           time = {todoitem.time}
                                           updateitem={this.updateitem}
                                           id = {todoitem.id}
                                           completed = {todoitem.completed} />
                        )
                    })}
                </div> 
            </div>
            
        )
    }
}

export default MainComponent