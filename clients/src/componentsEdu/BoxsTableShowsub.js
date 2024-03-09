import React, { useState } from 'react';
import './CheckboxOpenCourse.css';
import CourseList from './getsubject';

function BoxShow() {

    return (
        <div>
            <div style={{marginTop:'65px'}}>
                <div className='DateAdmin-text'>
                    <h>รายวิชาที่สามารถเปิดสอน</h>
                </div>
                <div className='CheckboxOpenCourse-boxOpensub' style={{marginTop:'18px'}}>
                    <div className='CheckboxOpenCourse-dropdown'>
                        <p2 style={{fontFamily: 'Kanit, sans-serif'}}>หลักสูตร</p2>
                    
                    
                        {/* <div class="CheckboxOpenCourse-NewBox"></div> */}
                    </div>
                    

                </div>

            </div>

        </div>

    );


}

export default BoxShow;
