import MadeGoal from "./MadeGoal";
import MissedGoal from "./MissedGoal";

function Goal(props){
    const isGoal = props.isGoal;
    // if(isGoal){
    //     return <MadeGoal/>
    // }
    // return <MissedGoal/>

    // Ternary Operator
    return(
        <>
            {isGoal ? <MadeGoal/> : <MissedGoal/>}
        </>
    )
}

export default Goal;