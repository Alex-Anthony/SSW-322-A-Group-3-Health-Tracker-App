
import React, { useState } from 'react'
import FitbitDataComponent from '@/src/FitbitDataComponent';
import { profile } from 'console';
import Home from '../page';
import { userAgent } from 'next/server';

interface Props {
    datafield?: ["username", "heartrate", "fullname"]
}

interface User {
    username: string;
    heartrate: string;
    fullName?: string;
}

const currUser: User = {
    username: "Mary",
    heartrate: "64",
    fullName: "Mary Smith"
};

function getUsername() {
    return currUser.username;
}

function getHeartrate() {
    return currUser.heartrate;
}

const Users = () => {

    return
}

export { getHeartrate, getUsername }
