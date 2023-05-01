import React from "react";

function sideMenuItem({ menu, isActive }) {
  return isActive === true ? (
    <div className="sidemenu-item active">
      <p>{menu.name}</p>
    </div>
  ) : (
      <div className="sidemenu-item">
        <p>{menu.name}</p>
      </div>
  );
}

export default sideMenuItem;