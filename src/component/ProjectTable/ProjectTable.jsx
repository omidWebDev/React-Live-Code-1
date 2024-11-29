import { ProjectContext } from "../ProjectContext";
import { useContext } from "react";
import "./index.css";

function ProjectTable({ projects }) {
  const { filter, categoryFilter, sortOrder } = useContext(ProjectContext);

  const filteredAndSortedProjects = projects
    .filter((project) => filter === "all" || project.status === filter)
    .filter(
      (project) =>
        categoryFilter === "all" || project.category.title === categoryFilter
    )
    .sort((a, b) =>
      sortOrder === "newest"
        ? new Date(b.deadline) - new Date(a.deadline)
        : new Date(a.deadline) - new Date(b.deadline)
    );

  return (
    <table className="project-table">
      <thead>
        <tr>
          <th>عنوان</th>
          <th>توضیحات</th>
          <th>وضعیت</th>
          <th>دسته‌بندی</th>
          <th>بودجه</th>
        </tr>
      </thead>
      <tbody>
        {filteredAndSortedProjects.length > 0 ? (
          filteredAndSortedProjects.map((project) => (
            <tr key={project._id}>
              <td>{project.title}</td>
              <td>{project.description}</td>
              <td>{project.status === "OPEN" ? "باز" : "بسته"}</td>
              <td>{project.category.title}</td>
              <td>{project.budget} تومان</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5">هیچ پروژه‌ای یافت نشد</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default ProjectTable;
