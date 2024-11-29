import { createContext, useState } from "react";

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [filter, setFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("newest");
  const [categoryFilter, setCategoryFilter] = useState("all");

  return (
    <ProjectContext.Provider
      value={{
        filter,
        setFilter,
        sortOrder,
        setSortOrder,
        categoryFilter,
        setCategoryFilter,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
