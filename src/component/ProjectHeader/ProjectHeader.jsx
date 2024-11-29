import { useContext } from "react";
import { ProjectContext } from "../ProjectContext";
import "./index.css";

function ProjectHeader() {
  const { setFilter, setCategoryFilter, setSortOrder } =
    useContext(ProjectContext);
  return (
    <div className="project-header">
      <form className="form-container">
        <h6 className="form-title">لیست پروژه‌ها</h6>
        <div className="form-status">
          <div className="status-buttons">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className="status-button"
            >
              همه
            </button>
            <button
              type="button"
              onClick={() => setFilter("OPEN")}
              className="status-button"
            >
              باز
            </button>
            <button
              type="button"
              onClick={() => setFilter("CLOSED")}
              className="status-button"
            >
              بسته
            </button>
          </div>
        </div>

        <div className="form-sort">
          <select
            id="sort"
            className="sort-select"
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="newest">مرتب سازی (جدیدترین به قدیمی‌ترین)</option>
            <option value="oldest">مرتب سازی (قدیمی‌ترین به جدیدترین)</option>
          </select>
        </div>

        <div className="form-category">
          <select
            id="category"
            className="category-select"
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="all">همه دسته‌بندی‌ها</option>
            <option value="طراحی UI/UX">طراحی UI/UX</option>
            <option value="برنامه نویسی وب">برنامه نویسی وب</option>
            <option value="برنامه نویسی دسکتاپ">برنامه نویسی دسکتاپ</option>
            <option value="علم داده">علم داده</option>
            <option value="برنامه نویسی موبایل">برنامه نویسی موبایل</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default ProjectHeader;
