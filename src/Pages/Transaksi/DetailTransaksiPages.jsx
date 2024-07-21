import { Button } from "@nextui-org/react";
import Navbars from "../../components/Navbars";
import TableComponent from "../../components/TableComponent";
import Tables from "../Tables";

const DetailTransaksiPages = () => {
    const [Transaksi, setTransaksi] = useState([]);

    const fetchDataTransaksi = async () => {
    
      const { data } = await axiosInstance.get("/api/v1/products", {
        headers: {
          Authorization: `Bearer ${tokenCurr}`,
        },
      });

      setTransaksi(data.data);
    };

    useEffect(() => {
      fetchDataTransaksi();
    }, []);

    const productInfo = {
      ListTitle: ["id", "Name", "Harga", "type"],
      state: Transaksi,
    };
  
  return (
    <>
     
      <div className="flex W-[30%] mx-40 items-center justify-center">
        <p>Detail Transaksi</p>
        <Button color="primary" className="border">
          Kembali
        </Button>
      </div>

      {/* <Navbars/> */}
      <TableComponent values={productInfo} />
    </>
  );
};
export default DetailTransaksiPages;
