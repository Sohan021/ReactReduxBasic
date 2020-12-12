import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { adminProfileDetail } from '../../../../actions/Auth/adminActions';

function AdminProfileScreen(props) {

    const adminProfileDetails = useSelector((state) => state.adminProfileDetails);
    const { adminProfile } = adminProfileDetails;


    const adminSignin = useSelector((state) => state.adminSignin);
    const { adminInfo } = adminSignin;

    const currentUserId = adminInfo.id;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(adminProfileDetail(currentUserId));
        return () => {
            //
        };
    }, [currentUserId]);

    return (
        <div>

            {adminInfo && (
                <>
                    <div className="details">
                        <div className="details-image">
                            <img src={adminInfo.profilePhoto} alt="product"></img>
                        </div>
                        <div className="details-info">
                            <ul>
                                <li>
                                    <h4>{adminInfo.firstName}</h4>
                                </li>
                            </ul>
                        </div>

                    </div>
                </>
            )}
        </div>
    );
}
export default AdminProfileScreen;
