import { useEffect, useState } from "react";
import TableComponent from "../../components/TableComponent";
import { axiosInstance, tokenCurr } from "../../lib/axios";
export default function Pelanggan() {
  const [Pelanggan, setPelanggan] = useState([]);

  const fetchDataPelanggan = async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJlbmlnbWFjYW1wIiwiZXhwIjoxNzIxMzIwMzk2LCJpYXQiOjE3MjEzMTY3OTYsInVzZXJJZCI6ImRhNGFkODhiLTk5YjItNGJkZi04Y2M3LTU2M2Q0NjFkNTBlZSIsInJvbGUiOiJhZG1pbiIsInNlcnZpY2VzIjpudWxsfQ.ZkrVU1s3Dm_EBgMyCeXOJ8nzeLRk6yqdF8ERhSWeldE";
    const { data } = await axiosInstance.get("/api/v1/products", {
      headers: {
        Authorization: `Bearer ${tokenCurr}`,
      },
    });

    setPelanggan(data.data);
  };

  useEffect(() => {
    fetchDataPelanggan();
  }, []);

  const productInfo = {
    ListTitle: ["id", "Name", "No.Hp", "Alamat"],
    state: Pelanggan,
  };

  return (
    <>
      {console.log(tokenCurr)}
      <TableComponent values={productInfo} />
    </>
  );
}
