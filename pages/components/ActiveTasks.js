import ActiveTask from "./ActiveTask"

const ActiveTasks = props => {
    const isOwnTask = props.ownTasks === "ownTasks"; 

    return (
        <section className="task-description">
            <div className="task-description">
                {!isOwnTask &&
                <div className="task-general-info">
                    <div>
                        <h2>Zadania</h2>
                        <h2>Aktywne: 100</h2>
                        {/* <p>Firmy: 100</p> */}
                    </div>
                </div>
                }
                <div className="task-area">
                    <ActiveTask ownTask={isOwnTask && "ownTask"}/>
                    <ActiveTask ownTask={isOwnTask && "ownTask"}/>
                    <ActiveTask ownTask={isOwnTask && "ownTask"}/>
                </div>
            </div>
        </section>
    )
};

export default ActiveTasks;
