import {useAppDispatch, useAppSelector} from "@app/store/store";
import {increment} from "@app/store/counter/counter.slice";

export function Counter() {
    const {value} = useAppSelector((state) => state.counter);

    const dispatch = useAppDispatch();

    return (
        <div className="counter">
            <button type="button" onClick={() => dispatch(increment())}>
                Plus
            </button>
            <div className="value">{value}</div>
        </div>
    );
}
