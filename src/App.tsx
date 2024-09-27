import './App.css'
import Character from "./app/infraestructure/views/characters/Character.tsx";
import Location from "./app/infraestructure/views/locations/Location.tsx";
import Title from "./app/infraestructure/components/Title/Title.tsx";
import Episode from "./app/infraestructure/views/episodies/Episode.tsx";
import {IconButton} from "@mui/material";
import {DarkMode, LightMode} from "@mui/icons-material";
import {useState} from "react";
import {deepPurple} from "@mui/material/colors";
import {createTheme, ThemeProvider} from '@mui/material/styles';

const innerTheme = createTheme({
    palette: {
        primary: {
            main: deepPurple[500],
        },
    },
});

function App() {
    const [theme, setTheme] = useState<string>('light')
    const handleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
        document.body.classList.toggle('dark')
    }
    return (
        <ThemeProvider theme={innerTheme}>
            <div className={'mx-auto  pb-20 py-10 px-8'}>
                <div className={'flex flex-col justify-center gap-y-4 items-center mb-4'}>
                <span
                    className={'bg-yellow-50 border text-xs border-yellow-200 text-yellow-600 md:text-base  p-3 rounded'}>
                    <strong>Description: </strong>
                     This project is a proof of concept for <strong>hexagonal architecture</strong> with <strong>React TS</strong>, I also tried to follow best practices for creating software like <strong>DRY</strong>, <strong>SOLID</strong>, etc. <br/>
                    There are still areas for improvement, this project is one of the first I built with <strong>React</strong>.
                </span>
                    <a href="https://github.com/gonzalof9991" target={'_blank'}
                       className={'flex justify-center bg-blue-50 border border-blue-200 text-blue-700 p-2 rounded w-max'}>
                        Github gonzalo9991f
                    </a>
                </div>
                <div className={'flex justify-center items-center my-4'}>
                    <IconButton color={'primary'} aria-label="delete" onClick={() => {
                        handleTheme()
                    }}>
                        {
                            theme === 'light' ? <DarkMode/> : <LightMode/>
                        }

                    </IconButton>
                </div>

                <Title label={'characters'} classes={'mb-6'}/>
                <Character/>
                <hr className={'my-10'}/>
                <Title label={'episodies'} classes={'mb-6'}/>
                <Episode/>
                <hr className={'my-10'}/>
                <Title label={'locations'} classes={'mb-6'}/>
                <Location/>
                <hr className={'my-10'}/>
            </div>
        </ThemeProvider>

    )
}

export default App
