import './App.css'
import Character from "./app/infraestructure/views/Characters/Character.tsx";
import Header from "./app/infraestructure/components/Header/Header.tsx";
import Location from "./app/infraestructure/views/Locations/Location.tsx";

function App() {


    return (

        <div className={'mx-auto container pb-20 py-10'}>
            <Header title={'Rick and Morty'} className={'mb-6'}/>
            <Character/>
            <hr className={'my-10'}/>
            <Location/>
        </div>
    )
}

export default App
