import React from "react";
import Error from "../../Assets/Image/error.gif";
import { useNavigate } from "react-router-dom";

const WrongRoute = () => {
    const navigate = useNavigate();

    const BackBtn = () => {
        navigate(-1); // Equivalent to history.goBack()
    };

    return (
        <>
            <div onClick={BackBtn} className="text-center" style={{ cursor: "pointer" }}>
                <img className="img-fluid rounded" src={Error} alt="" />
            </div>
        </>
    );
};

export default WrongRoute;
