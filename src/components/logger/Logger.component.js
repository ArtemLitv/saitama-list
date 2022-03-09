import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { filteredLoggerAtom, loggerAtom } from "../../state";
import style from "./Logger.module.css";

export const Logger = () => {
    const logger = useRecoilValue(filteredLoggerAtom);
    const [_log, setLogger] = useRecoilState(loggerAtom);
    const [tik, setTik] = useState(0);
    const getFormattedDate = (log) => {
        const dif = Date.now() - log.date;
        if(dif < 1000) {
            return `Just now`;
        } else if(dif < 60 * 1000) {
            return `${Math.floor(dif / 1000)} second ago`;
        } else if(dif < 60 * 60 * 1000) {
            return `${Math.floor(dif / 1000 / 60)} minutes ago`;
        } else {
            return (new Date(log.date)).toTimeString();
        }
    };

    useEffect(() => {
        const timer = setInterval(() => {setTik((tik) => tik + 1)}, 10000);
        return () => {clearInterval(timer)};
    }, [tik]);

    const clearClick = () => {
        setLogger([]);
    }
    
    return (
        <div className={style.wrapper}>
            <h2 className={style.title}>Logger <button onClick={clearClick}>Clear</button></h2>
            <div className={style.scroll}>
                {logger.map((log, index) =>
                    <div key={index} className={style.card}>
                        <h3 className={style.header}><span>{log.message}</span>: <span className={style.date}>{getFormattedDate(log)}</span></h3>
                        <p className={style.log_value}>{log.value}</p>
                    </div>
                )}
            </div>
        </div>)
}