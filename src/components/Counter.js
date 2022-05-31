import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
// import { Component } from "react";

const CounterFC = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => {
        return state.counter;
    });

    const toggleCounterHandler = () => {};

    const calc = (type, payload = 1) => {
        dispatch({ type: type, payload: payload });
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            <div className={classes.value}>{counter}</div>
            <div>
                <button onClick={calc.bind(null, "INCREMENT")}>
                    Increment
                </button>
                <button onClick={calc.bind(null, "INCREASE", 5)}>
                    Increase by 5
                </button>
                <button onClick={calc.bind(null, "DECREMENT")}>
                    Decrement
                </button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default CounterFC;

// class Counter extends Component {
//     toggleCounterHandler() {}

//     calc(type) {
//         this.props.calc(type);
//     }
//     render() {
//         return (
//             <main className={classes.counter}>
//                 <h1>Redux Counter</h1>
//                 <div className={classes.value}>{this.props.counter}</div>
//                 <div>
//                     <button onClick={this.calc.bind(this, "INCREMENT")}>
//                         Increment
//                     </button>
//                     <button onClick={this.calc.bind(this, "DECREMENT")}>
//                         Decrement
//                     </button>
//                 </div>
//                 <button onClick={this.toggleCounterHandler}>
//                     Toggle Counter
//                 </button>
//             </main>
//         );
//     }
// }

// const mapState2Props = (state) => {
//     return {
//         counter: state.counter,
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         calc: (type) => dispatch({ type: type }),
//     };
// };

// export default connect(mapState2Props, mapDispatchToProps)(Counter);
