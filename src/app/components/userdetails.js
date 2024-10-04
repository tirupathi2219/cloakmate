"use client"
import { useState } from "react"

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
    return (
        <section>

            <div>
                <form onSubmit={handlesubmit}>
                    <input type="text" placeholder="username" name="Username" value={Username} onChange={handlechange} required/>
                    <input type="email" placeholder="email" name="email" value={email} onChange={handlechange} required/>
                    <input type="number" placeholder="phone number" name="phoneno" value={phoneno} onChange={handlechange} required/>
                    <input type="password" placeholder="password" name="password" value={password} onChange={handlechange} required/>
                    <button>submit</button>
                </form>
            </div>
        </section>
    )
}
