import React from 'react'
import Sidebar from './Sidebar'

function Knowledge() {
    return (
      <div className="page">
      <div className="grid-container">
          <aside>
            <Sidebar/>
          </aside>
           <section className="grid-main">
            <div className='knowledge-content'> 
            <div className='knowledge-text'>สื่อความรู้ทางการเงิน</div>
            
           </div>
           <div className='clip'>
            <ul>
           <li><iframe width="560" height="315" src="https://www.youtube.com/embed/UAs7neI0SWs?si=O27Hx7ZTV4LxP5dm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></li>
           <li><iframe width="560" height="315" src="https://www.youtube.com/embed/a4EwEtIBJgc?si=M9QQSvr9Gt98SAME" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></li>
           <li><iframe width="560" height="315" src="https://www.youtube.com/embed/B-_Or8UPS88?si=GVtSheyuGOB3632v" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></li>
           <li><iframe width="560" height="315" src="https://www.youtube.com/embed/EBCY5_I5oPg?si=Yp9M29beY5PHcaWn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></li>
           </ul>
           </div>
            </section>
           
      </div>
      
      </div>
  );
  }

export default Knowledge

