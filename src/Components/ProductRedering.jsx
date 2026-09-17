import React, { useState } from "react";
import ProductsCard from "./ProductsCard";
import { electronics, fashion, laptop, lifestyle, products } from "./Product";

function ProductRedering() {
  const [showProducts, setProducts] = useState(true);
  const [showElectronics, setElectronics] = useState(false);
  const [showFashion, setFashion] = useState(false);
  const [showLifestyle, setLifestyle] = useState(false);
  const [showLaptop, setLaptop] = useState(false);

  return (
    <>
      <h3
        className="text-center p-3"
        style={{ color: "whitesmoke", backgroundColor: "tomato" }}
      >
        E-Commerce
      </h3>
      <div className="container ">
        <div className="d-flex gap-2">
          <button
            className="btn btn-primary"
            onClick={() => {
              setProducts(true);
              setElectronics(false);
              setFashion(false);
              setLifestyle(false);
              setLaptop(false);
            }}
          >
            All Products
          </button>
          <button
            className="btn btn-info"
            onClick={() => {
              setProducts(false);
              setElectronics(true);
              setFashion(false);
              setLifestyle(false);
              setLaptop(false);
            }}
          >
            Electronics
          </button>
          <button
            className="btn btn-warning"
            onClick={() => {
              setProducts(false);
              setElectronics(false);
              setFashion(true);
              setLifestyle(false);
              setLaptop(false);
            }}
          >
            Fashion
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => {
              setProducts(false);
              setElectronics(false);
              setFashion(false);
              setLifestyle(true);
              setLaptop(false);
            }}
          >
            LifeStyle
          </button>
          <button
            className="btn btn-dark"
            onClick={() => {
              setProducts(false);
              setElectronics(false);
              setFashion(false);
              setLifestyle(false);
              setLaptop(true);
            }}
          >
            Laptop
          </button>
        </div>
        <div className="row">
          {showProducts == true
            ? products.map((val) => {
                return (
                  <div className="col-4 my-2">
                    <ProductsCard
                      imgpath={val.imgpath}
                      name={val.name}
                      price={val.price}
                    />
                  </div>
                );
              })
            : showElectronics == true
              ? electronics.map((val) => {
                  return (
                    <div className="col-4 my-2">
                      <ProductsCard
                        imgpath={val.imgpath}
                        name={val.name}
                        price={val.price}
                      />
                    </div>
                  );
                })
              : showFashion == true
                ? fashion.map((val) => {
                    return (
                      <div className="col-4 my-2">
                        <ProductsCard
                          imgpath={val.imgpath}
                          name={val.name}
                          price={val.price}
                        />
                      </div>
                    );
                  })
                : showLifestyle == true
                  ? lifestyle.map((val) => {
                      return (
                        <div className="col-4 my-2">
                          <ProductsCard
                            imgpath={val.imgpath}
                            name={val.name}
                            price={val.price}
                          />
                        </div>
                      );
                    })
                  : showLaptop == true
                    ? laptop.map((val) => {
                        return (
                          <div className="col-4 my-2">
                            <ProductsCard
                              imgpath={val.imgpath}
                              name={val.name}
                              price={val.price}
                            />
                          </div>
                        );
                      })
                    : null}
        </div>
      </div>
    </>
  );
}

export default ProductRedering;
