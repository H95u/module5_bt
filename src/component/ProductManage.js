import {useState} from "react";
import Product from "./Product";
import './Product.css'

function ProductManage() {
    const [products, setProducts] = useState([
        new Product(1, "bim bim", 100),
        new Product(2, "Sting", 100),
        new Product(3, "Red bull", 100),
    ]);


    let [productList, setProductList] = useState(products);

    return (
        <>
            <div style={{float: "right"}}><input id={"search"} type={"text"}/>
                <button onClick={search}>Search</button>
            </div>
            <table style={{textAlign: "center"}} className="table table-hover">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th colSpan={2}>Action</th>
                </tr>
                </thead>
                <tbody>
                {productList.map(item => (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>
                            <button className={"btn btn-info"} onClick={() => showUpdate(item.id)}>Edit</button>
                        </td>
                        <td>
                            <button className={"btn btn-danger"} onClick={() => deleteProduct(item.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <hr/>
            <div>
                <h1>Create</h1>
                <table>
                    <tr>
                        <td>ID :</td>
                        <td><input id={'id'} type={"number"}></input></td>
                    </tr>
                    <tr>
                        <td>Name :</td>
                        <td><input id={'name'} type={"text"}></input></td>
                    </tr>
                    <tr>
                        <td>Price :</td>
                        <td><input id={'price'} type={"text"}></input></td>
                    </tr>
                    <tr>
                        <td>
                            <button className={"btn btn-primary"} onClick={create}>Create</button>
                        </td>
                    </tr>
                </table>
            </div>
            <div>
                <h1>Update</h1>
                <table>
                    <tr>
                        <td>ID :</td>
                        <td><input id={'id-u'} type={"number"}></input></td>
                    </tr>
                    <tr>
                        <td>Name :</td>
                        <td><input id={'name-u'} type={"text"}></input></td>
                    </tr>
                    <tr>
                        <td>Price :</td>
                        <td><input id={'price-u'} type={"text"}></input></td>
                    </tr>
                    <tr>
                        <td>
                            <button className={"btn btn-success"} onClick={update}>Update</button>
                        </td>
                    </tr>
                </table>
            </div>

        </>
    );

    function create() {
        let id = +document.getElementById("id").value;
        let name = document.getElementById("name").value;
        let price = document.getElementById("price").value;
        let product = new Product(id, name, price);
        setProducts([...products, product]);
        setProductList([...products]);
    }

    function update() {
        let id = +document.getElementById("id-u").value;
        let name = document.getElementById("name-u").value;
        let price = document.getElementById("price-u").value;

        let updatedProducts = products.map(item => {
            if (item.id === id) {
                return {...item, id: id, name: name, price: price};
            }
            return item;
        });

        setProductList(updatedProducts);
    }

    function showUpdate(id) {
        const productToUpdate = products.find(item => item.id === id);

        if (productToUpdate) {
            document.getElementById("id-u").value = productToUpdate.id;
            document.getElementById("name-u").value = productToUpdate.name;
            document.getElementById("price-u").value = productToUpdate.price;
        }
    }

    function search() {
        let search = document.getElementById("search").value;
        let productSearch = products.filter(value => {
            return value.name.toLowerCase().includes(search.toLowerCase())
        })
        setProductList(productSearch);
    }

    function deleteProduct(id) {
        const confirmed = window.confirm("Sure?");
        if (confirmed) {
            let updatedProducts = products.filter(item => item.id !== id);
            setProductList(updatedProducts);
        }
    }

}

export default ProductManage;
