import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Store = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/categories');
    }, [navigate]);

    return null;
};

export default Store;

