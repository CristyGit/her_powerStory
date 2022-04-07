import React, {useEffect, useState} from 'react';
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, db} from "../firebase";
import {useHistory} from "react-router-dom";
import {collection, getDocs, query, where} from "firebase/firestore";

function Profile() {
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useHistory();

    const fetchUserName = async () => {
        try {
            const q = query(collection(db, "users"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();
            setName(data.name);
        } catch (err) {
            console.error(err);
            alert("An error occured while fetching user data");
        }
    };

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate.push("/");
        fetchUserName();
    }, [user, loading]);

    return (
        <div className="dashboard">
            <div>
                <h1>{name}</h1>
                <h2>{user?.email}</h2>
            </div>
        </div>
    );
}

export default Profile;