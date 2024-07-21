const ListTransaksi= ()=>{
    return (
      <>
        <div className="container my-4">
          <h2 className="mb-4">Halaman Transaksi</h2>

          <div className="row mb-3">
            <div className="col">
              <Link color="primary">Tambah Produk</Link>
              <Button color="primary">Refresh</Button>
            </div>
            <div className="col"></div>
          </div>
          <Tables />
        </div>
      </>
    );
}
export default ListTransaksi