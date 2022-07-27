import { useEffect, useState } from "react";

const useService = serviceId => {
    const [service, setService] = useState({});

    useEffect(() => {
        const url = `https://whispering-eyrie-11525.herokuapp.com/service/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));
    }, [serviceId])

    return [service];
}

export default useService;