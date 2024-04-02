import './App.css'
import Character from "./app/infraestructure/views/Characters/Character.tsx";
import Header from "./app/infraestructure/components/Title/Title.tsx";
import Location from "./app/infraestructure/views/Locations/Location.tsx";
import Title from "./app/infraestructure/components/Title/Title.tsx";

function App() {


    return (

        <div className={'mx-auto container pb-20 py-10'}>
            <Title label={'Characters'} classes={'mb-6'}/>
            <Character/>
            <hr className={'my-10'}/>
            <Title label={'Locations'} classes={'mb-6'}/>
            <Location/>
        </div>
    )
}

export default App
