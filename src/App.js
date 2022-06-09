import "./App.css";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import DateUI from "./components/DateUI/DateUI";
import PhotoDisplay from "./components/PhotoDisplay/PhotoDisplay";

const API_KEY = process.env.REACT_APP_API_KEY;

export const AppContext = createContext();

function App() {
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
    const [photoData, setPhotoData] = useState({
        date: "",
        explanation: "",
        hdurl: "",
        title: "",
        copyright: "",
    });

    useEffect(() => {
        axios
            .get(
                `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`
            )
            .then((response) => setPhotoData(response.data))
            .catch((err) => console.log(err));
    }, [date]);

    return (
        <div className="app">
            <AppContext.Provider
                value={{
                    date,
                    setDate,
                    photoData,
                    setPhotoData,
                }}
            >
                <DateUI />
                <PhotoDisplay />
            </AppContext.Provider>
        </div>
    );
}

export default App;
