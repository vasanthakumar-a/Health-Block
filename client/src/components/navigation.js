import React from 'react';
export const Navigation = (props) => { 

  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='/'>
            Health Block
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='/' className='page-scroll'>
                Home
              </a>
            </li>
            <li>
              <a href='/signin' className='page-scroll'>
                Login
              </a>
            </li>
            <li>
              <a href='/signup' className='page-scroll'>
                Generate ID
              </a>
            </li>
            <li>
              <a href='/facility-signin' className='page-scroll'>
                Facility
              </a>
            </li>
            <li>
              <a href='/faq' className='page-scroll'>
                FAQ
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Contact
              </a>
            </li>
            <li>
              <img src='./img/new/healthid.svg' height='100px' width='100px' alt="" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
