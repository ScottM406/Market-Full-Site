import { useState } from "react";
import { useEffect } from "react";

const Products = ( { loginToken } ) => {

  const [products, setProducts] = useState([]);

  useEffect(() => { 

    const getProducts = async () => {
      const response = await fetch("http://localhost:3000/products");
      const products = await response.json();
      setProducts(products);
    }

    getProducts();

  },[])

  return (
    <div id="products-background">
      {products.map((product) => (
        <section key={product.id} className="product-section">
          <h3 className="product-title">{product.title}</h3>
          <h4 className="product-price">{product.price}</h4>
          <p className="product-description">{product.description}</p>
          { loginToken ?
            <>
              <button className="add-counter-plus">+</button>
              <input className="add-counter-input"></input> 
              <button className="add-counter-minus">-</button>
              <button className="add-button">Add to Cart</button>
            </>
          : null
          }
        </section>
      ))}
    </div>
  )
}

export default Products;