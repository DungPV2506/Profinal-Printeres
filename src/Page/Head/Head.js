import React, { useState } from 'react';
import "./Head.css";

const Head = () => {
  let [count, setCount] = useState(0);

  const handleChangeValue = () => {
    count = count + 1;
  };
  console.log(count);

  return (
        <section className='Header'>
          <section className='head-left'>
              <img className='logo'
                      src = "https://phanmemmarketing.vn/wp-content/uploads/2020/04/pinterest-logo-1024x576.png"
                      alt = ""
              />
                  <h1 className='title'> Pinteres </h1>
            </section>
          
          <section className='head-right'>
                <div className='right1'>
                   <ul>
                    <li> About </li>
                    <li> Home </li>
                    <li> About </li>
                   </ul>
                </div>

                {/* <div className='right2'>
                <div className='LoginCss'>
                    <button className='Login' onClick={handleChangeValue}> Đăng nhập </button>
                    
                </div>

                <div className='SignupCss'>
                <button className='SignUp'> Đăng ký </button>
                </div>
              </div> */}
          </section>
        </section>
  )
}

export default Head
