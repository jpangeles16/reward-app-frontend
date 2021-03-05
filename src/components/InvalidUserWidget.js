import React, { Component } from 'react'
import { LogoutButton } from './LogoutButton';
import '../styles/invalid-user-widget.css';

export class InvalidUserWidget extends Component {
    render() {
        return (
            <div className="invalid-user-widget">
                <p>No user found! Please contact your tutor.
                </p>
                <LogoutButton />
            </div>
        )
    }
}
