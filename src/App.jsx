import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
    const [darkMode, setDarkMode] = useState(false);

    const profileData = {
        fullName: "Lucia Lasut",
        title: "Mahasiswa Informatika",
        university: "Universitas Klabat",
        program: "Informatika",
        semester: "Semester 5",
        level: "Tingkat 3",
        location: "Airmadidi, Indonesia",

        about:
            "Saya adalah mahasiswa Program Studi Informatika di Universitas Klabat. Sekarang saya semester 5 dan berada di tingkat 3 dan sedang mengambil mata kulia Front-end Development."
    };

    return (
        <div className={darkMode ? "app dark" : "app"}>

            <Navbar
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />

            <Hero
                profileData={profileData}
                darkMode={darkMode}
            />

            <Features
                profileData={profileData}
                darkMode={darkMode}
            />

            <Footer
                darkMode={darkMode}
            />

        </div>
    );
}

export default App;