import Sidebar from './components/Sidebar';
import ActiveTasks from './components/ActiveTasks';

const AddedTasksPage = () => {
    return (
        <main>
            <Sidebar />
            <ActiveTasks ownTasks="ownTasks"/>
        </main>
    )
};

export default AddedTasksPage;
