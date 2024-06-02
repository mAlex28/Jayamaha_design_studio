import React from "react"
import { FaBars, FaSignOutAlt } from "react-icons/fa"
import Button from "react-bootstrap/Button"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Avatar from 'react-avatar';


const Header = ({
    collapsed,
    handleToggleSidebar,
    handleCollapsedChange,
    toggled,
    logout,
    user
}) => {
    return (
        <> <Navbar collapseOnSelect expand="lg" bg="light" variant="light" style={{
            padding: '1% '
        }}>
            <Nav className="me-auto">
                <Button
                    variant="outline-dark"
                    className="btn-toggle"
                    onClick={() => handleCollapsedChange(!collapsed)}
                >
                    <FaBars />
                </Button>

            </Nav>
            <Nav>
                <div style={{
                    marginRight: '15px'
                }}>

                    <Button
                        variant="info"
                        onClick={logout}
                    >
                        <FaSignOutAlt />

                    </Button>
                </div>
                <Avatar size="40" name={user?.result.name} round={true} color="#353b48" fgColor="#f5f6fa" />
            </Nav>
        </Navbar>

        </>
    )
}

export default Header
