import { IconEditProfile, IconHistory, IconPassword, IconSignOut } from "../../icons";
import React from 'react';
export const dummyMenus = [
    {
        id:1,
        nama: 'Edit Profile',
        gambar: <IconEditProfile/>,
        halaman: 'EditProfile'
    },
    {
        id:2,
        nama: 'Change Password',
        gambar: <IconPassword/>,
        halaman: 'EditPassword'
    },
    {
        id:3,
        nama: 'History Pesanan',
        gambar: <IconHistory/>,
        halaman: 'History'
    },
    {
        id:4,
        nama: 'Sign Out',
        gambar: <IconSignOut/>,
        halaman: 'Login'
    },

]