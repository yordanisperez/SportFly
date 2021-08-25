import css from './footer.scss'
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';


function Footer(){

    return  <div id="Contacto">
    <ul>
        <li><a  target="_blank" id="profile-link" className="nav-link" href="https://m.facebook.com/yordanis.perez"><i><FacebookIcon/>Facebook</i></a></li>
        <li><a  target="_blank" id="profile-link" className="nav-link" href="https://github.com/yordanisperez"><i><GitHubIcon/>GitHub</i></a></li>
        <li><a  target="_blank" className="nav-link" href="5352121494"><i alt="+5352121494" ><CallIcon/>Llamame</i></a></li>
        <li><a  target="_blank" className="nav-link" href="yordanis@gmail.com"><i ><EmailIcon/>Mail</i></a></li>
    </ul>
      <span>Copyright 2021, Original Proyecto SportFly</span>

</div>
}

export default Footer;