import React from 'react';

const PostManuSection = () => {
    return (
        <div >
           <div className='d-block d-md-block d-lg-none'>
           <ul className='fs-6 mt-3 fw-bold'>
            <li className='list-group-item '>Posts(368)</li>
            </ul>
           </div>
          <div className='d-none d-md-none d-lg-block'>
          <ul className='d-flex gap-4 fs-5 mt-5 '>
            <li className='list-group-item position-relative'><span>All Posts(32)</span><br /> <hr className='position-absolute border border-dark mt-4 border-1 opacity-100 w-100 ' /></li>
            <li className='list-group-item'>Article</li>
            <li className='list-group-item'>Event</li>
            <li className='list-group-item'>Education</li>
            <li className='list-group-item'>Job</li>
           </ul>
          </div>
        </div>
    );
};

export default PostManuSection;