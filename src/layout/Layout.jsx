import Navigation from './Navigation';
import Footer from './Footer';
import clases from './layout.scss';
import Hint from '../component/Hint'

function Layout(props){
    return (
    <div>
        <Navigation>

        </Navigation>
        <Hint/>
        <div className="main">
            {props.children}
        </div>
        <Footer>

        </Footer>
    </div>
    );
}
export default Layout;