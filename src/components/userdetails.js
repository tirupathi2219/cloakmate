"use client"
import { useEffect, useState } from "react"
import { auth } from "@/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth"

export default function Userdetails() {
    const [userinfo, setUserinfo] = useState({
        Username: "",
        email: "",
        phoneno: "",
        password: ""
    })
    const { Username, email, phoneno, password } = userinfo
    console.log(userinfo, userinfo.length, "===")
    const handlechange = (e) => {
        setUserinfo({ ...userinfo, [e.target.name]: e.target.value })
    }
    const handlesubmit = (e) => {
        e.preventDefault()
        if (Username && email && phoneno && password) {
            alert("submitted")
            createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
                const user = userCredential.user;
                console.log("credential")
            })
            setUserinfo({
                Username: "",
                email: "",
                phoneno: "",
                password: ""
            })
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
                            name="Username"
                            value={Username}
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
