import Sidebar from "./components/Sidebar";
import NewTaskAdd from "./components/NewTaskAdd";

const NewSolutionAddPage = () => {
    return(
        <main className="solution-add">
            <Sidebar />
            <NewTaskAdd addType="solution" />
        </main>
    )
};

export default NewSolutionAddPage;
