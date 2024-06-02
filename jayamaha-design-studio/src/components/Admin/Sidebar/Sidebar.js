import React from "react"
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from "react-pro-sidebar"
import { BsFillFolderFill } from "react-icons/bs"
import { Link } from 'react-router-dom';
import "react-pro-sidebar/dist/css/styles.css"

const Sidebar = ({ collapse, toggled, handleToggleSidebar }) => {
    return (
        <ProSidebar
            breakPoint="md"
            collapsed={collapse}
            toggled={toggled}
            onToggle={handleToggleSidebar}
        >
            <SidebarHeader>
                <div
                    style={{
                        padding: "24px",
                        textTransform: "uppercase",
                        fontWeight: "bold",
                        fontSize: 14,
                        letterSpacing: "1px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                    }}
                >
                    JDS
                </div>
            </SidebarHeader>
            <SidebarContent>
                <Menu iconShape="circle">
                    <MenuItem icon={<BsFillFolderFill />}>Projects <Link to="/dashboard" /> </MenuItem>
                </Menu>
            </SidebarContent>
            <SidebarFooter style={{
                textAlign: 'center'
            }}>
                <div className="sidebar-btn-wrapper" style={{
                    padding: '20px 24px',
                }}>
                    <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                        Jayamaha Design Studio
                    </span>
                </div>
            </SidebarFooter>
        </ProSidebar>
    )
}

export default Sidebar
