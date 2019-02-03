import React from "react";
const ContactEmergencyInputs = props => {
  return props.ContactEmergency.map((val, idx) => {
    let ContactNameId = `ContactName-${idx}`,
      MobileNumberContactId = `MobileNumberContact-${idx}`,
      ContactRelatedId = `ContactRelated-${idx}`;
    return (
      <div key={idx}>
        <label htmlFor={ContactNameId}>{`ContactName #${idx + 1}`}</label>
        <input
          type="text"
          name={ContactNameId}
          data-id={idx}
          id={ContactNameId}
          value={props.ContactEmergency[idx].ContactName}
          className="ContactName"
        />
        <label htmlFor={MobileNumberContactId}>MobileNumberContact</label>
        <input
          type="text"
          name={MobileNumberContactId}
          data-id={idx}
          id={MobileNumberContactId}
          value={props.ContactEmergency[idx].MobileNumberContact}
          className="MobileNumberContact"
        />
        <label htmlFor={ContactRelatedId}>ContactRelated</label>
        <input
          type="text"
          name={ContactRelatedId}
          data-id={idx}
          id={ContactRelatedId}
          value={props.ContactEmergency[idx].ContactRelated}
          className="ContactRelated"
        />
      </div>
    );
  });
};
export default ContactEmergencyInputs;
