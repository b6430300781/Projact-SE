import React from 'react';
import './NavbarAdmin.css';


const NavbarAdmin = () => {
  return React.createElement(
    'nav',
    { className: 'navbar' },
    React.createElement(
      'div',
      { className: 'navbar-left' },
      React.createElement('img', { src: 'profile.png', alt: '' }),
      React.createElement('span', null, ':admin #####')
    ),
    React.createElement(
      'ul',
      { className: 'navbar-nav' },
      React.createElement(
        'li',
        { className: 'nav-item' },
        React.createElement('img', { src: 'index.png', alt: 'index' }), // Add image here
        React.createElement(
          'a',
          { href: '/', className: 'nav-link' },
          'ประกาศ'
        )
      ),
      React.createElement(
        'li',
        { className: 'nav-item' },
        React.createElement('img', { src: 'time.png', alt: 'time' }), // Add image here
        React.createElement(
          'a',
          { href: '/กำหนดการ', className: 'nav-link' },
          'กำหนดการ'
        )
      ),
      React.createElement(
        'li',
        { className: 'nav-item' },
        React.createElement('img', { src: 'user.png', alt: 'user' }), // Add image here
        React.createElement(
          'a',
          { href: '/ข้อมูลผู้ใช้งาน', className: 'nav-link' },
          'ข้อมูลผู้ใช้งาน'
        )
      )
    )
  );
};

export default NavbarAdmin;
