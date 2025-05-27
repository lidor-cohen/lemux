import "./Sidebar.css";

import Tagbox from "../UIElements/TagBox/TagBox";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="sidebar__header">Filters</h2>
      <div className="sidebar__item">
        <h3 className="sidebar__item-header">sort</h3>
        <Tagbox
          tags={["A-Z", "Released", "Rating", "Date Added", "Date Created"]}
          action={(sorting) => {}}
        />
      </div>
    </div>
  );
}

export default Sidebar;
