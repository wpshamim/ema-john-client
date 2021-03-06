import { useEffect, useState } from "react";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase.init";

const useOrders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            const email = user?.email;
            try {
                const { data } = await axios.get(`https://ema-john-api.herokuapp.com/orders?email=${email}`, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem("access-token")}`,
                    },
                });
                setOrders(data);
                setLoading(false);
            } catch (error) {
                console.error(error.message);
            }
        };
        getData();
    }, [user]);
    return { orders, setOrders, loading };
};

export default useOrders;
