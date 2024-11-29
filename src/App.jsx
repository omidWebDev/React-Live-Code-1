import { ProjectProvider } from "./component/ProjectContext";
import ProjectHeader from "./component/ProjectHeader/ProjectHeader";
import ProjectTable from "./component/ProjectTable/ProjectTable";
import "./App.css";
import "./index.css";

function App() {
  const projectsData = [
    {
      _id: 1,
      title: "طراحی اپلیکیشن سفر آنلاین",
      description: "طراحی رابط کاربری و تجربه کاربری اپلیکیشن سفر آنلاین",
      status: "CLOSED",
      category: {
        id: 1,
        title: "طراحی UI/UX",
        englishTitle: "design-ui/ux",
      },
      budget: 10000,
      tags: ["Ui/UX", "Figma"],
      deadline: "2023-12-23T12:55:48.740Z",
      createdAt: "2023-10-23T18:18:55.636Z",
      updatedAt: "2024-06-02T13:37:48.468Z",
    },
    {
      _id: 2,
      title: "توسعه سایت فروشگاهی",
      description: "یک سایت فروشگاهی کامل با پنل ادمین",
      status: "OPEN",
      category: {
        id: 2,
        title: "برنامه نویسی وب",
        englishTitle: "web development",
      },
      budget: 50000,
      tags: ["React", "Nodejs", "online shop"],
      deadline: "2023-12-23T12:55:48.740Z",
      createdAt: "2023-10-23T18:18:55.636Z",
      updatedAt: "2024-06-02T13:37:48.468Z",
    },
    {
      _id: 3,
      title: "مدیریت سیستم کتابخانه",
      description: "توسعه یک نرم‌افزار مدیریت برای کتابخانه دانشگاه",
      status: "OPEN",
      category: {
        id: 3,
        title: "برنامه نویسی دسکتاپ",
        englishTitle: "desktop development",
      },
      budget: 30000,
      tags: ["Python", "Tkinter"],
      deadline: "2024-01-15T12:55:48.740Z",
      createdAt: "2023-11-01T10:18:55.636Z",
      updatedAt: "2024-06-03T10:37:48.468Z",
    },
    {
      _id: 4,
      title: "پروژه تحلیل داده",
      description: "ایجاد داشبورد برای تحلیل داده‌های فروش",
      status: "CLOSED",
      category: {
        id: 4,
        title: "علم داده",
        englishTitle: "data science",
      },
      budget: 45000,
      tags: ["Python", "Pandas", "Dash"],
      deadline: "2024-02-01T12:55:48.740Z",
      createdAt: "2023-10-05T12:18:55.636Z",
      updatedAt: "2024-06-01T11:37:48.468Z",
    },
    {
      _id: 5,
      title: "اپلیکیشن موبایل برای ورزش",
      description: "طراحی و توسعه یک اپلیکیشن موبایل برای مدیریت تمرینات ورزشی",
      status: "OPEN",
      category: {
        id: 5,
        title: "برنامه نویسی موبایل",
        englishTitle: "mobile development",
      },
      budget: 60000,
      tags: ["Flutter", "Firebase"],
      deadline: "2024-03-20T12:55:48.740Z",
      createdAt: "2023-09-15T12:18:55.636Z",
      updatedAt: "2024-06-01T14:37:48.468Z",
    },
  ];
  return (
    <ProjectProvider>
      <div className="container">
        <h1>React Live Code #1</h1>
        <ProjectHeader />
        <ProjectTable projects={projectsData} />
      </div>
    </ProjectProvider>
  );
}
export default App;
