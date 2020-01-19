import ActiveTask from "./ActiveTask"

const ActiveTasks = () => {
    return (
        <section className="task-description">
            <div className="task-description">
                <div className="task-general-info">
                    <div>
                        <h2>Zadania</h2>
                        <h2>Aktywne: 100</h2>
                        {/* <p>Firmy: 100</p> */}
                    </div>
                </div>
                <div className="task-area">
                    <ActiveTask />
                    <ActiveTask />
                    <ActiveTask />
                </div>
            </div>
        </section>
    )
};

export default ActiveTasks;
