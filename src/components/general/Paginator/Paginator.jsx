import React, {useState} from 'react';
import classes from './Paginator.module.css';


const Paginator = ({totalItemsCount, pageSize, currentPage, onChangedPage, positionSize = 20}) => {

    let pageCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    let positionCount = Math.ceil(pageCount / positionSize);
    let [positionNumber, setPositionNumber] = useState(1);
    let leftPositionPageNumber = [positionNumber - 1] * positionSize + 1;
    let RightPositionPageNumber = positionNumber * positionSize;

    return <div className={classes.numberPage}>
        {positionNumber > 0 &&
            <button className={classes.prev} onClick={() => {
                setPositionNumber(positionNumber - 1)
            }}>previous</button>}
        {pages.filter(p => p >= leftPositionPageNumber && p <= RightPositionPageNumber)
            .map(p => {
                return <span className={currentPage === p && classes.selectedPages}
                             key={p}
                             onClick={() => {
                                 onChangedPage(p)
                             }}>{p}</span>
            })}
        {positionCount > positionNumber &&
            <button className={classes.next} onClick={() => {
                setPositionNumber(positionNumber + 1)
            }}>next</button>}
    < / div>
}

export default Paginator;

