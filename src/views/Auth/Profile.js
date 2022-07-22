import React, {useEffect, useState} from 'react';
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, db, upload, useAuth} from "../../firebase";
import {useHistory} from "react-router-dom";
import {collection, getDocs, query, where} from "firebase/firestore";

function Profile() {
    const [user, loading, error] = useAuthState(auth);
    const currentUser = useAuth();
    const [name, setName] = useState("");
    const [photoLoading, setPhotoLoading] = useState(false);
    const [photo, setPhoto] = useState(null);
    const [photoURL, setPhotoURL] = useState("https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png");
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
        //if (loading) return;
        if (!user) return navigate.push("/");
        if (currentUser?.photoURL) {
            setPhotoURL(currentUser.photoURL);
        }
        fetchUserName();
    }, currentUser);

    function handleChange(e) {
        if (e.target.files[0]) {
            setPhoto(e.target.files[0]);
        }
    }
    function handleClick() {
        upload(photo, currentUser, setPhotoLoading);
    }

    return (
        <div className="container">
            <div className="main-body">
                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center">
                                    <img alt="Avatar" className="rounded-circle avatar" src={photoURL}/>
                                        <div className="mt-3">
                                            <input type="file" onChange={handleChange}></input>
                                            <button className="btn btn-info" disabled={photoLoading || !photo} onClick={handleClick} style={{margin: "20px"}}>Upload</button>
                                            {/*<h4>{name}</h4>*/}
                                            {/*<p className="text-secondary mb-1">{title}</p>*/}
                                            {/*<p className="text-muted font-size-sm">{status}</p>*/}
                                            {/*<button className="btn btn-primary">Follow</button>*/}
                                            {/*<button className="btn btn-outline-primary">Message</button>*/}
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0" style={{color: "black"}}>Name</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary data">
                                        {name}
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0" style={{color: "black"}}>Email</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary data">
                                        {user?.email}
                                    </div>
                                </div>
                                <hr></hr>
                                {/*<div className="row">*/}
                                {/*    <div className="col-sm-12">*/}
                                {/*        <button className="btn btn-info ">Edit</button>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;