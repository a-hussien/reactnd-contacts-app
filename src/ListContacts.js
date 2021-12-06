import React, {Component} from "react";

class ListContacts extends Component {
    render() {
        
        return (
            <ol className="contact-list">
                {
                    this.props.contacts.map((contact) => (
                        <li key={contact.id} className="contact-list-item">
                            <div 
                            className="conatct-avatar" 
                            style= {{backgroundImage: `url(${contact.avatarURL})`}} >

                            </div>
                            <div className="contact-details">
                                <p style={{color: '#12f29c'}}>{contact.name}</p>
                                <p>{contact.handle}</p>
                            </div>
                            
                            <button className="contact-remove">Remove</button>
                        </li>
                    ))
                }
            </ol>
        )
    }
}

export default ListContacts