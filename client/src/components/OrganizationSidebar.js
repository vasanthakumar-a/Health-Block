import React from 'react'

export const OrganizationSidebar = (props) => {

    console.log(props.data)
    
    
    return (
        <div>
            <ul className='organization-sidebar'>
                <li className='organization-list'>
                    <a href="#" >Hospital</a>
                </li>
                <li className='organization-list'>
                    <a href="#">Research Organization</a>
                </li>
                <li className='organization-list'>
                    <a href="#">Insurance Organization</a>
                </li>
            </ul>
        </div>
        )
}

export default OrganizationSidebar