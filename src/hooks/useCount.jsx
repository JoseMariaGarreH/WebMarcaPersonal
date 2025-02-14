import { useEffect, useState } from "react";
import getCounts from "../servicios/getCounts";

const useCount = () => {

    const [listaCounts,setListaCounts] = useState([]);

    function loadCounts(){
        getCounts().then(counts => {
            console.log(counts);
            const countValues = counts.map(item => item.count);
            console.log(countValues);
            setListaCounts(countValues);
        });
    }

    useEffect(loadCounts,[]);

    console.log(listaCounts);
    return {listaCounts}
}

export default useCount;