import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Table, Button } from 'react-bootstrap';
import axios from "axios";
import NavvBarr from "../BootStrap/NavvBarr";
import baseURL from '../config/apiConfig';
import "./ViewProductsCSS.css"

function ViewListProducts() {
    let { eid } = useParams();
    const navigate = useNavigate();
    
    const [products, setproducts] = useState([]);
    
    useEffect(() => {
        let url = `${baseURL}/grower/viewproducts?email=${eid}`;
        axios.get(url).then(response => {
            const respdata = response.data;
            if (respdata.status && respdata.products) {
                setproducts(respdata.products);
            } else {
                console.log('No product found in response:', respdata);
            }
        })
        .catch((error) => {
            console.log('Error fetching products', error);
        });
    }, [eid]);

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            let url = `${baseURL}/grower/deleteproduct?id=${id}`;
            axios.get(url).then((response) => {
                if (response.data.status) {
                    alert("Product Deleted");
                    setproducts(products.filter(product => product._id !== id));
                }
            });
        }
    };

    const handleEdit = (id) => {
        navigate("/openlistprod/" + id);
    };

    return (
        <>
            <NavvBarr />
            <Container className="mt-4">
                <h2 className="text-center mb-4">View All Products</h2>
                <h3>Email id: {eid}</h3>
                <Table striped bordered hover responsive="sm">
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Product Name</th>
                            <th>Product Category</th>
                            <th>Price</th>
                            <th>Per Unit</th>
                            <th>More Info</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products && products.map((product, index) => (
                            <tr key={product._id}>
                                <td>{index + 1}</td>
                                <td>{product.product}</td>
                                <td>{product.productCategory}</td>
                                <td>{product.price}</td>
                                <td>{product.per}</td>
                                <td>{product.moreInfo}</td>
                                <td>
                                    <Button variant="secondary" onClick={() => handleEdit(product._id)}>Edit</Button>
                                </td>
                                <td>
                                    <Button variant="danger" onClick={() => handleDelete(product._id)}>Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </>
    );
}

export default ViewListProducts;
