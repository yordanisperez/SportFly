import cardcss from './card.scss'

function Card(props){


    const items = [];

    if (props.conten_list)
        for (const [index] of props.conten_list.entries()) {
        items.push(<li>{props.conten_list[index]}</li>)
        }

return <div className="card" >
            {props.children}
            {items&&<ul>{items}</ul>}
            {props.action_title&&<button className="login-btn" onClick={()=>alert("Upss, Aun esta funcionalidad se encuentra en construcción")}>{props.action_title}</button>}
       </div>
}

export default Card;