import cardcss from './card.scss'



function Card(props){
  

    const items = [];

    if (props.conten_list)
        for (const [index] of props.conten_list.entries()) {
        items.push(<li key={index}>{props.conten_list[index]}</li>)
        }

return <div className="card" >
            {props.children}
            {items&&<ul>{items}</ul>}
            {props.action_title&&<button className="login-btn" onClick={props.actionOnClick}>{props.action_title}</button>}
       </div>
}

export default Card;