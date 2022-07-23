import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, useAuth} from "../../../firebase";

const ProfileIcon = ({
                  className,
                  ...props
              }) => {

    const classes = classNames(
        'brand',
        className
    );

    const [photoURL, setPhotoURL] = useState("https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png");
    const currentUser = useAuth();

    useEffect(() => {
        if (currentUser?.photoURL) {
            setPhotoURL(currentUser.photoURL);
        }
    }, currentUser);

    return (
        <div
            {...props}
            className={classes}
        >
            <h1 className="m-0">
                <Link to="/Profile">
                    <Image
                        src={photoURL}
                        alt="Avatar"
                        style={{borderRadius: "50%"}}
                        width={50}
                        height={50} />
                </Link>
            </h1>
        </div>
    );
}

export default ProfileIcon;