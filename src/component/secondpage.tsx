import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const SecondPage: FC= () => {
    const name = useSelector((state: RootState) => state.user.name);
    const phoneNumber = useSelector((state: RootState) => state.user.phoneNumber);
    const email = useSelector((state: RootState) => state.user.email);
    const address = useSelector((state: RootState) => state.user.address);
    const summary = useSelector((state: RootState) => state.user.summary);
    const skills = useSelector((state: RootState) => state.user.skills);
    console.log(address)
    console.error(skills);
    console.warn(summary);

 return <>
    <label>Summary: {summary}</label>
    </>;
}

export default SecondPage;