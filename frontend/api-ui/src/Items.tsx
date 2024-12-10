import { List } from './interface';

interface ItemProps{
    product: string,
    items: List[];
}

export default function Items({ product, items }: ItemProps) {

    const style = {
        maxWidth: "450px",
        border: "1px solid #ffffff",
        padding: "20px",
        display: "flex",
        flexDirection : "column" as "column",
        alignItems: "center",
        justifyContent : "center",  
        margin: "30px auto 15px",
        borderRadius: "15px"
    }

    return (
        <div style={style}>
            <h3>{product}</h3>
            <ol id="category-name" style={{paddingLeft: "0px"}}>
                {
                    items.map((item) => <li key={item.id}>{item.name}</li>)
                }
            </ol>
        </div>
    )
}
