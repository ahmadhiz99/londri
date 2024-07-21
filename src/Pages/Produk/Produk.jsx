import { Button } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import TableComponent from "../../components/TableComponent";
import { axiosInstance, tokenCurr } from "../../lib/axios";

export default function Produk() {
  const [produk, setProduk] = useState([]);

  const fetchDataProduk = async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJlbmlnbWFjYW1wIiwiZXhwIjoxNzIxMzIwMzk2LCJpYXQiOjE3MjEzMTY3OTYsInVzZXJJZCI6ImRhNGFkODhiLTk5YjItNGJkZi04Y2M3LTU2M2Q0NjFkNTBlZSIsInJvbGUiOiJhZG1pbiIsInNlcnZpY2VzIjpudWxsfQ.ZkrVU1s3Dm_EBgMyCeXOJ8nzeLRk6yqdF8ERhSWeldE";
    const { data } = await axiosInstance.get("/api/v1/products", {
      headers: {
        Authorization: `Bearer ${tokenCurr}`,
      },
    });

    setProduk(data.data);
  };

  useEffect(() => {
    fetchDataProduk();
  }, []);

  const productInfo = {
    ListTitle: ["id", "Name", "Harga", "type"],
    state: produk,
  };
  const ListTitle = ["id", "Name", "Harga", "type"];
  return (
    <>
      <TableComponent values={productInfo} />
    </>
  );
}
