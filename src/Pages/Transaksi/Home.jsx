import { 
  Input,
  Button, Modal, 
  ModalContent, 
  ModalHeader, 
  ModalBody, 
  ModalFooter,
  useDisclosure,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem
} from "@nextui-org/react";
import TableComponent from "../../components/TableComponent";
import { axiosInstance, axiosInstanceOriginal, tokenCurr } from "../../lib/axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const {isOpen, onOpen, onOpenChange,openModal} = useDisclosure();
  
  const [Transaksi, setTransaksi] = useState([]);
  const [Product, setProduct] = useState([]);
  const [form, setForm] = useState({
    customerId:null,
    idProduct:null,
    qty:null
  })
  
  const navigate = useNavigate();
  let token = localStorage.getItem('token');

  const fetchDataTransaksi = async () => {
    const { data } = await axiosInstance.get("/bills", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(data.data[0].billDetails[0].id);
    setTransaksi(data.data);
  };

  const fetchDataProduct = async () => {
    const { data } = await axiosInstance.get("/products", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if(data.status.code != 200){
      localStorage.removeItem('token')
    }
    setProduct(data.data)

    console.log('[DATAS STATUS]',data.status);
    console.log('[DATAS PRODUCT]',Product);
  };

  useEffect(() => {
    if(localStorage.getItem('token') == null){
      navigate('/login-page')
    }else{
      token = localStorage.getItem('token')
      fetchDataProduct();
      fetchDataTransaksi();
    }
  }, []);

  const productInfo = {
    ListTitle: ["id", "Name", "Harga", "type"],
    listname : ['id','name','phoneNumber','address'],
    state: Transaksi,
  };
  
  const handleChangeInput =(event)=>{
    const {name,value} = event.target
    setForm({...form, [name]:value})
  }

  const addTransaction = async () =>{
    console.log('[TRANSACTIONS]',form);
    try {
      const response = await axiosInstanceOriginal.post("/api/v1/bills",{
          customerId: 'b32eed7d-052a-4711-bcad-0bc577654883',
          billDetails: [
              {
                  'product': {
                      'id': form.id
                  },
                  'qty': form.qty
              }
          ]
        })
        console.log('[ADD TRANSACTION]',response.data)

        // if(response.data.status.code == 201){ //if success
        //   navigate('/');
        // }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div className="mt-10">

      <div className="w-full text-left mt-20">
        <Button onPress={onOpen} onClick={openModal} className="bg-slate-100 rounded-lg shadow-lg">
          Tambah
        </Button>
      </div>

      <TableComponent values={productInfo} />

      <Modal backdrop="opaque" size="xl" isOpen={isOpen} onOpenChange={onOpenChange} className="bg-slate-100 shadow-lg">
        <ModalContent c>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Tambah Transaksi Baru
              </ModalHeader>
              <ModalBody>
                <div>

                <select
                    name="idProduct"
                    className="w-full my-3 p-2 bg-gray-50 rounded-lg"
                    value={form.idProduct}
                    onChange={handleChangeInput}
                  >
                    {Product?.map((products,idx)=>(
                      <option value={products.id}>{products.name}</option>
                    ))}
                  </select>

                  <input
                        name="qty"
                        value={form.qty}
                        onChange={handleChangeInput}
                        className="w-full p-2 bg-gray-50 rounded-lg"
                        bordered
                        placeholder="Jumlah"
                        />

                  </div>
                
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button className="bg-teal-300 rounded-lg" onClick={addTransaction} onPress={onClose}>
                  Simpan
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      {/* <div className="container my-4">
        <h2 className="mb-4">Halaman Transaksi</h2>

        <div className="row mb-3">
          <div className="col">
            <Link color="primary">Tambah Produk</Link>
            <Button color="primary">Refresh</Button>
          </div>
          <div className="col"></div>
        </div>
        <Tables />
      </div> */}
    </div>
  );
};
export default Home;
