import React, { useState } from 'react';
import '../../assets/dalrun-jw/scss/_modal.scss'

const ModalFrame = (props) => {

  const { open, close, header } = props;

  return(

    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
    {open ? (
      <section style={{overflow:'auto'}}>
        <header>
          {header}
          <button className="close" onClick={close}>
            &times;
          </button>
        </header>
        <main style={{overflow:"auto"}}>{props.children}</main>
      </section>
    ) : null}
    </div>
  );
}

export default ModalFrame;