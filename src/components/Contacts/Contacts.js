import React, {Component} from "react";
import "./Contacts.css";
import "../ContactItem/ContactItem";
import ContactsList from "../ContactsList/ContactsList";
import HeaderTemplate from "../HeaderTemplate/HeaderTemplate";

import {connect} from "react-redux";
import {changeLayout} from "../../reducers/navigation/action";

class Contacts extends Component {


    onFooterClick() {
        this.props.changeLayout("chatListLayout");
    }

    render() {
        return (
            <div className="contacts">
                <HeaderTemplate title='Контакты'/>
                <ContactsList/>
                <div className='footer' onClick={this.onFooterClick.bind(this)}>Чаты</div>
            </div>
        );
    }
}

export default connect(
    state => ({}), {
        changeLayout,
    }
)(Contacts);
