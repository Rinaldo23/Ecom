import React from "react";
import "./List.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const List = ({products, subCats, catId}) => {
  const {data, loading, error} = useFetch(
    `/products?populate=*${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}`
  );

  console.log(subCats)

  return (
    <div className="list">
      {data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
