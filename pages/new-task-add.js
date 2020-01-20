import Sidebar from "./components/Sidebar";
import NewTaskAdd from "./components/NewTaskAdd";

const NewTaskAddPage = () => {
    return(
        <main className="solution-add">
            <Sidebar />
            <NewTaskAdd />
        </main>
    )
};

export default NewTaskAddPage;
