import { useState, useEffect } from "react";
import Items from "./Items";

export interface List {
    id : number,
    name : string
}


export default function Products() {

    const [lists, setLists] = useState<List[]>([]);
    const [product, setProduct] = useState('');
    const [items, setItems] = useState<List[]>([]);
    const [itemname, setItemname] = useState<string>('');

    useEffect(() => {
        let products = fetch("products" );
        products
         .then((result) => result.json())
         .then((value) => {
            setProduct(value[0].name);
            setLists(value);
         })

    }, [])

    useEffect(() => {
        if (product) {
            let getItems =fetch(product);
            getItems
            .then((result) => result.json())
            .then((value) => {
                setItems(value);
            })
        }

    },[product])

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setProduct(e.target.value);
        setItemname('');
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let itemLength = items.length
        setItems([
            ...items,
            {id: ++itemLength , name: itemname }
        ])
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setItemname(e.target.value);
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div className="field">
                <label htmlFor="select-product">Products</label>
                <br/>
                <select id="select-product" style={{width: "150px"}} onChange={handleSelect}>
                    {
                        lists.length && (
                            lists.map(
                                (list: List) => <option key={list.id} value={list.name}>{list.name}</option>
                            )
                        )
                    }
                </select>                
            </div>
            <div className="field">
                <label htmlFor="item">Item Name</label>
                <br />
                <input type="text" name="item" id="item" onChange={handleChange} value={itemname}/>
            </div>
            <div>
                <button id="add-item">Add</button>
            </div>
        </form>
        <Items product={product} items={items} />
        </>
    );
}