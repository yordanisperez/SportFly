import Navigation from './Navigation';
import Footer from './Footer';
import clases from './layout.scss';

function Layout(props){
    return (
    <div>
        <Navigation>

        </Navigation>
        <div className="main">
            {props.children}
        </div>
        <Footer>

        </Footer>
    </div>
    );
}
export default Layout;