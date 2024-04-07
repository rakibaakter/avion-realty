import axios from "axios";
import useSWR from "swr";

const useLists = () => {
    const fetcher = (url) => axios.get(url).then((res) => res.data);

    const { data = [], isLoading } = useSWR('http://localhost:3000/api/offplans', fetcher);

    return [data, isLoading];
};

export default useLists;