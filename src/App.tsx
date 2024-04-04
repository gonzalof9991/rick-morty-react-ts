import './App.css'
import Character from "./app/infraestructure/views/characters/Character.tsx";
import Location from "./app/infraestructure/views/locations/Location.tsx";
import Title from "./app/infraestructure/components/title/Title.tsx";
import Episode from "./app/infraestructure/views/episodies/Episode.tsx";

function App() {


    return (

        <div className={'mx-auto  pb-20 py-10 px-8'}>
            <div className={'flex flex-col justify-center gap-y-4 items-center mb-4'}>
                <span className={'bg-yellow-50 border text-xs border-yellow-200 text-yellow-600 md:text-base  p-3 rounded'}>
                    <strong>Description: </strong>
                     This project is a proof of concept for <strong>hexagonal architecture</strong> with <strong>React TS</strong>, I also tried to follow best practices for creating software like <strong>DRY</strong>, <strong>SOLID</strong>, etc. <br/>
                    There are still areas for improvement, this project is one of the first I built with <strong>React</strong>.
                </span>
                <a href="https://github.com/gonzalof9991" target={'_blank'}
                   className={'flex justify-center bg-blue-50 border border-blue-200 text-blue-700 p-2 rounded w-max'}>
                    Github gonzalo9991f
                </a>
            </div>

            <Title label={'characters'} classes={'mb-6'}/>
            <Character/>
            <hr className={'my-10'}/>
            <Title label={'locations'} classes={'mb-6'}/>
            <Location/>
            <hr className={'my-10'}/>
            <Title label={'episodies'} classes={'mb-6'}/>
            <Episode/>
        </div>
    )
}

export default App
