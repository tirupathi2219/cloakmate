"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// import { auth } from "@/firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth"

export default function Userdetails() {
    const route = useRouter()
    const [userinfo, setUserinfo] = useState({
        username: "",
        email: "",
        phoneno: "",
        password: ""
    })
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null)
    const { username, email, phoneno, password } = userinfo

    console.log(userinfo, userinfo.length, "===")
    const handlechange = (e) => {
        setUserinfo({ ...userinfo, [e.target.name]: e.target.value })
    }
    const handlesubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (username && email && phoneno && password) {
            (async () => {
                try {
                    const response = await fetch('/api/auth/register', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            username: username, // User registration data
                            password: password,
                            phoneno: phoneno,
                            email: email

                        }),
                    });

                    if (!response.ok) {
                        const data = await response.json();
                        throw new Error(data.error);
                    }
                    const data = await response.json();
                    setMessage(data.message); // Display success message
                    console.log("50:::",);
                    route.push(`/chat?user=${JSON.stringify(data.user)}`);
                    console.log('51:::::::::');

                } catch (err) {
                    setError(err.message); // Display error message
                }
            })()
        } else {
            alert("please fill the details")
        }
    }




    useEffect(() => {
        const formelements = document.getElementById("myform")
        function toggleOverlay(disabled) {
            console.log(':::::', disabled)
            formelements.style.pointerEvents = disabled ? 'none' : 'auto';
        }

        const popupElement = document.getElementById("popupElement");

        toggleOverlay(true);

        popupElement?.addEventListener('animationend', () => {
            console.log('Animation ended!');
            toggleOverlay(false); // Hide overlay
        });
        return (
            popupElement?.removeEventListener('animationend', () => {
                console.log("finshed")
            })
        )
    }, [])





    return (
        <section>
            <div id="popupElement" className="flex flex-wrap flex-col items-center  animate-zigzag ">
                <div>
                    <h1>Sign Up</h1>
                </div>

                <form id="myform" onSubmit={handlesubmit} className="grid rounded-lg p-4 bg-gradient-to-r from-[#eab308] to-[#1faed942] shadow-lg shadow-gray-900 outline-none border-none">
                    <div className="flex justify-between items-center">
                        <label>Username : </label>
                        <input
                            type="text"
                            placeholder="username"
                            name="username"
                            value={username}
                            onChange={handlechange}
                            required
                            className=" border border-slate-900 p-1 rounded-lg m-2"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <label>Email : </label>
                        <input type="email"
                            placeholder="email"
                            name="email"
                            value={email}
                            onChange={handlechange}
                            required
                            className="border border-slate-900 p-1 rounded-lg m-2"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <label>Phone Number : </label>
                        <input type="number"
                            placeholder="phone number"
                            name="phoneno"
                            value={phoneno}
                            onChange={handlechange}
                            required className="border border-slate-900 p-1 rounded-lg m-2"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <label>Password : </label>
                        <input type="password"
                            placeholder="password"
                            name="password"
                            value={password}
                            onChange={handlechange}
                            required
                            className="border border-slate-900 p-1 rounded-lg m-2"
                        />
                    </div>
                    <div className="flex justify-around items-center">
                        <button className="border border-slate-900 p-1 rounded-lg m-2">submit</button>
                    </div>
                </form>
            </div>
        </section>
    )
}
