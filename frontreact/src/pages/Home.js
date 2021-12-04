import React, { useEffect, useState } from "react";
import { getProductsService } from "../services/product";
import { Card } from "../components/Card";
import { FormattedMessage } from 'react-intl';

export const Home = ({ searchKey }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async (query) => {
    setProducts(await getProductsService(query));
  };

  useEffect(() => {
    fetchProducts(searchKey);
  }, [searchKey]);

  return (
    <section id="home">
      <div className="home-container">
        <h1><FormattedMessage id='gallery'/></h1>
        <div className="home-card">
          {products?.map((p) => {
            return (
              <Card
                key={p._id}
                name={p.name}
                picture={p.picture}
                price={p.price}
                isActive={p.isActive}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
