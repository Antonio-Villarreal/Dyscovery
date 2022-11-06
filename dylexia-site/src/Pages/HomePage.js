//Components
import Introduction from '../Components/Introduction/intro';
import Navbar from '../Components/Navbar/Navbar';
import Section from '../Components/Section/section';

const HomePage = () => {
    return (
        <div class="App">
            <Navbar/>
            <Introduction/>
            <Section/>
        </div>
    )
}

export default HomePage;