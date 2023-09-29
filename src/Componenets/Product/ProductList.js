import React, { useEffect, useState } from 'react'
import Search from '../Search/Search'
import Categories from '../Categories/Categories'
import Product from './Product'
import "./ProductList.css";
import {products as productdata} from "../../products-data"

const allcategories = ["all",
...new Set(productdata.map((product) => product.category)),
];


const ProductList = () => {

const [products, setproducts] = useState(productdata);
const [search,setsearch] = useState("");
const [FilterProducts,setFilterProducts] = useState([]);
const [Categoriess, setcategories] = useState(allcategories);
const handlesearch = (e) => {
  setsearch(e.target.value)
};
const filterProduct = (category) => {
    if (category === "all") {
        setproducts(productdata)
        return;
    }
    const newproduct = productdata.filter((product) => product.category === category)
    setproducts(newproduct);
}

useEffect(() => {
    console.log(allcategories);
    setFilterProducts(
        products.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()))
    )
},[search,products]);



  return (
    <>
        <div className='header'>
            <header className='container'>
                <h1 className='--color-white --text-center'>
                    <span className='--color-danger'>
                        Product
                    </span>

                        Filter
                </h1>

                {/* //search bar */}
                <div className='--flex-between --flex-dir-column --py'>
                    <Search inputvalue={search} oninputchange={handlesearch}/>
                    <Categories Categories={Categoriess} filteritems={filterProduct}/>
                </div>
            </header>
        </div>


        {/* //Product images code */}

    

        <div className='product-container'>
            <div className='products container --grid-25 --py2'>
                {FilterProducts.length === 0 ? (<h3>No Product found!!!</h3>)
                 : (FilterProducts.map((product) => {
                    const {id,title,img,price} = product;
                    return (
                        <div key={id}>
                            <Product  title={title} img={img} price={price}/>
                        </div>
                    )
                    })
                )}
                {/* <Product /> */}
            </div>
        </div>
      




    </>
  )
}

export default ProductList
