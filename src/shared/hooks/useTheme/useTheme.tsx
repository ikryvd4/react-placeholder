import {useEffect} from "react";
import {useAppSelector, useAppDispatch} from "@app/store/store.tsx";
import {toggleTheme} from "@app/store/theme/theme.slice.tsx";

export function useTheme() {
    const theme = useAppSelector(state => state.theme.mode)
    const dispatch = useAppDispatch();

    useEffect(() => {
        document.body.dataset.theme = theme;
    }, [theme]);

    const toggle = () => {
        dispatch(toggleTheme())
    }

    return {theme, toggle,}

}