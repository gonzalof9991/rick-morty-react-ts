import './App.css'
import Character from "./app/infraestructure/views/characters/Character.tsx";
import Header from "./app/infraestructure/components/header/Header.tsx";

function App() {


    return (

        <div className={'mx-auto container pb-20 py-10'}>
            <Header title={'Rick and Morty'} className={'mb-6'}/>
            <Character/>
        </div>
    )
}

export default App
