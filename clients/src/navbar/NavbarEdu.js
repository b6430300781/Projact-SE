import React from 'react';
import './NavbarEdu.css';



const NavbarEdu = () => {
  return React.createElement(
    
    'nav',
    { className: 'navbar' },
    React.createElement(
      'div',
      { className: 'navbar-left' },
      React.createElement('img', { src: 'profile.png', alt: '' }),
      React.createElement('span', null, ':ฝ่ายการศึกษา #####')
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
        React.createElement('img', { src: 'resu.jpg', alt: 'time' }), // Add image here
        React.createElement(
          'a',
          { href: '/ผลการลงทะเบียน', className: 'nav-link' },
          'ผลการลงทะเบียน'
        )
      ),
      React.createElement(
        'li',
        { className: 'nav-item' },
        React.createElement('img', { src: 'subject.jpg', alt: 'user' }), // Add image here
        React.createElement(
          'a',
          { href: '/รายวิชาที่เปิดสอน', className: 'nav-link' },
          'รายวิชาที่เปิดสอน'
        )
      ),
      React.createElement(
        'li',
        { className: 'nav-item' },
        React.createElement('img', { src: 'room.jpg', alt: 'user' }), // Add image here
        React.createElement(
          'a',
          { href: '/ห้องเรียนทั้งหมด', className: 'nav-link' },
          'ห้องเรียนทั้งหมด'
        )
      )
    )
  );
};

export default NavbarEdu;
