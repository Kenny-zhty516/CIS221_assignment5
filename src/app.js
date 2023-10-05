import moonFestivalImage from './images/moon-festival.webp';
import { Greeting } from "./Greetings";

export function App() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh', // This will make the content take the full height of the viewport
        }}>
            <img src={moonFestivalImage} className='w-72' />
            <h1 className="text-blue-400">Hello world Again!</h1>
            <Greeting />
        </div>
    );

}