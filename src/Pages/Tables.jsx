import React, { useEffect, useState } from "react";
import { axiosInstance } from "../lib/axios";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@nextui-org/react";
import axios from "axios";
import { Link } from "react-router-dom";

const Tables = () => {
  const [transaksi, setTransaksi] = useState([]);

  const getTransaksi = async () => {
    const { data } = await axiosInstance.get("/api/v1/bills", {
      headers: {
        Authorization: `Bearer ${tokenCurr}`,
      },
    });

    setTransaksi(data.data);
  };

  const getTransaksiDetail = () => {};

  useEffect(() => {
    getTransaksi();
    console.log(tokenCurr);
  }, []);

  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>kode pelangggan</TableColumn>
        <TableColumn>Nama Pelanggan</TableColumn>
        <TableColumn>Tabel Transaksi</TableColumn>
      </TableHeader>
      <TableBody>
        {transaksi.map((item, idx) => (
          <TableRow key={idx}>
            <TableCell className="w-[30%]">{item.customer.id}</TableCell>
            <TableCell>
              {
                <div className="">
                  <p>{item.customer.name}</p>
                  <p>{`${item.billDetails.length} Transaksi`}</p>
                </div>
              }
            </TableCell>
            <TableCell>
              <Link
                color="primary"
                className="border rounded"
                to="/detail-transaksi"
              >
                Tabel Transaksi
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default Tables;
