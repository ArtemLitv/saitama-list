import { selector } from "recoil";
import { loggerAtom } from "./atom";

export const filteredLoggerAtom = selector({
    key: "filteredLoggerAtom",
    get: ({get}) => {
        const logger = get(loggerAtom);
        const result = logger ? [...logger].sort((a, b) => b.date - a.date) : []
        return result;
    }
})