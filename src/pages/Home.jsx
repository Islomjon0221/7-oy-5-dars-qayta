import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

function Home() {
    const users = useSelector(state => state.user)
    const token = useSelector(state => state.token.value)
    const [Mode, setMode] = useState("light")
    console.log(7, token);
    console.log(8, users);
    useEffect(() => {
        if (localStorage.getItem("mode")) {
            setMode(localStorage.getItem("mode"))
        }
    }, [])

    function handleMode(e) {
        e.preventDefault()
        if (Mode == "light") {
            localStorage.setItem("mode", "dark")
            return setMode("dark")
        } else if (Mode == "dark") {
            localStorage.setItem("mode", "light")
            return setMode("light")
        }
    }

    return (<div className={`w-full h-screen ${Mode == "dark" ? "bg-black" : "bg-white"}`}>
        <div className={`w-[300px] mx-auto pt-60 text-center`}>
            <Link className={`${Mode == "dark" ? "text-white" : "text-black"}`} to="/login">Log out</Link>
            <button onClick={handleMode} className={`px-[179px] mb-[20px] py-[20px] text-[16px] leading-[19.29px] ${Mode == "light" ? "bg-black text-white" : "bg-white text-black"} font-semibold bg-gradient-to-r rounded-[10px] transition hover:opacity-75 duration-300`}>{Mode == "light" ? "Dark" : "Light"}</button>
            {
                users.map((el, index) => {
                    if (token == el.email) {
                        return (
                            <div className={`${Mode == "dark" ? "text-white" : "text-black"}`} key={index}>
                                <h1>{el.name}</h1>
                                <h1>{el.email}</h1>
                                <h1>{el.age}</h1>
                            </div>
                        )
                    }
                    return
                })

            }
        </div>
    </div>
    )
}

export default Home