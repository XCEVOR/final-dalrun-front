import React from 'react';
import {Link} from 'react-router-dom';

const DiaryList = () => {

  return(
    <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-body-tertiary">
      <Link to="/" className="d-flex align-items-center flex-shrink-0 p-3 link-body-emphasis text-decoration-none border-bottom">
        <svg className="bi pe-none me-2" width="30" height="24"><use xlinkHref="#bootstrap"/></svg>
        <span className="fs-5 fw-semibold">List group</span>
      </Link>
      <div className="list-group list-group-flush border-bottom scrollarea" style={{"overflowY":'auto'}}>
        <Link to="#" className="list-group-item list-group-item-action py-3 lh-sm" aria-current="true">
          <div className="d-flex w-100 align-items-center justify-content-between">
            <strong className="mb-1">프로필, 닉네임, 크루 이름, 기록까지~~</strong>
            <small>번호</small>
          </div>
          <div className="col-10 mb-1 small">여기는 기록이 들어갈거야~~~</div>
        </Link>
        <Link to="#" className="list-group-item list-group-item-action py-3 lh-sm" aria-current="true">
          <div className="d-flex w-100 align-items-center justify-content-between">
            <strong className="mb-1">프로필, 닉네임, 크루 이름, 기록까지~~</strong>
            <small>번호</small>
          </div>
          <div className="col-10 mb-1 small">Map 써서 다 끌어모을거야~~~</div>
        </Link>
        <Link to="#" className="list-group-item list-group-item-action py-3 lh-sm" aria-current="true">
          <div className="d-flex w-100 align-items-center justify-content-between">
            <strong className="mb-1">프로필, 닉네임, 크루 이름, 기록까지~~</strong>
            <small>번호</small>
          </div>
          <div className="col-10 mb-1 small">추후에 navbar, listgroup은 고정형으로 바꿀예정~~~</div>
        </Link>
      </div>
    </div>
  );
}
export default DiaryList;