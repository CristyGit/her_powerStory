import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';
import {getAuth, onAuthStateChanged} from "firebase/auth";

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });
  });

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0">
        {isLoggedIn && <Link to="/Dashboard">
          <Image
            src={require('./../../../assets/images/hps1.png')}
            alt="Open"
            width={200}
            height={200} />
        </Link>}
        {!isLoggedIn && <Link to="/">
          <Image
              src={require('./../../../assets/images/hps1.png')}
              alt="Open"
              width={200}
              height={200} />
        </Link>}
      </h1>
    </div>
  );
}

export default Logo;