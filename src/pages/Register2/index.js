import ContactEmergencyInputs from "./ContactEmergencyInputs";
import React from "react";
class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ContactEmergency: [
        { ContactName: "", MobileNumberContact: "", ContactRelated: "" }
      ],
      owner: "",
      description: ""
    }
  }
  
  handleChangeContactEmergency = e => {
    if (
      ["ContactName", "MobileNumberContact", "ContactRelated"].includes(
        e.target.className
      )
    ) {
      let ContactEmergency = [...this.state.ContactEmergency];
      ContactEmergency[e.target.dataset.id][e.target.className] =
        e.target.value;
      this.setState({ ContactEmergency }
        // , () => console.log(this.state.ContactEmergency)
      );
    } else {
      this.setState({ [e.target.name]: e.target.value.toUpperCase() });
    }
  };

  addCat = e => {
    this.setState(prevState => ({
      ContactEmergency: [
        ...prevState.ContactEmergency,
        { ContactName: "", MobileNumberContact: "", ContactRelated: "" }
      ]
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
  };
  
  render() {
    let { owner, description, ContactEmergency } = this.state;
    return (
      <form onSubmit={this.handleSubmit} onChange={this.handleChangeContactEmergency}>
        <label htmlFor="name">Owner</label>
        <input type="text" name="owner" id="owner" value={owner} />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          value={description}
        />
        <button onClick={this.addCat}>Add new cat</button>
        <ContactEmergencyInputs ContactEmergency={ContactEmergency} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default Form;
