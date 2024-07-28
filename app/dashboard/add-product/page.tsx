export default function Page() {
  return (
    <>
      <div className="container-xxl flex-grow-1 container-p-y">
        <h4 className="fw-bold py-3 mb-4">
          <span className="text-muted fw-light">Product /</span> Add new
          products
        </h4>
        <div className="row">
          <div className="col-md-12">
            <div className="card mb-4">
              <h5 className="card-header">Ajoutez un nouveau produit</h5>
              <hr className="my-0" />
              <div className="card-body">
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      {/* CATEGORIE  */}
                      <div className="mb-3 ">
                        <label
                          htmlFor="exampleFormControlSelect1"
                          className="form-label"
                        >
                          Catégorie
                        </label>
                        <select
                          className="form-select"
                          id="exampleFormControlSelect1"
                          aria-label="Default select example"
                        >
                          <option selected={false}>
                            Open this select menu
                          </option>
                          <option value={1}>One</option>
                          <option value={2}>Two</option>
                          <option value={3}>Three</option>
                        </select>
                      </div>
                      {/* END CATEGORIE  */}
                      {/* NAME  */}
                      <div className="mb-3 ">
                        <label htmlFor="productName" className="form-label">
                          Nom du produit
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="productName"
                          placeholder=""
                          aria-describedby="defaultFormControlHelp"
                        />
                      </div>
                      {/* END NAME  */}
                      {/* DESCRIPTION */}
                      <div className="mb-3 ">
                        <label
                          htmlFor="productDesciption"
                          className="form-label"
                        >
                          Descrption
                        </label>
                        <textarea
                          className="form-control"
                          id="productDesciption"
                          rows={3}
                          defaultValue={""}
                        />
                      </div>
                      {/* END DESCRIPTION */}

                      <div className="row">
                        {/* PRICE */}
                        <div className="mb-3 col-md-6">
                          <label htmlFor="productPrice" className="form-label">
                            Prix (Frcfa)
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="productPrice"
                            placeholder=""
                          />
                        </div>
                        {/* END PRICE */}

                        <div className="mb-3 col-md-6">
                          <label
                            htmlFor="productQuantitie"
                            className="form-label"
                          >
                            Quantité disponible
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="productQuantitie"
                            placeholder=""
                          />
                        </div>

                        {/* QUANTITIE  */}
                        {/* END  QUANTITIE  */}
                      </div>
                    </div>

                    <div className="col-md-6">
                      {/* MAIN IMAGE */}
                      <div className="mb-3">
                        <div className="row flew">
                          <label
                            htmlFor="productQuantitie"
                            className="form-label "
                          >
                            Image Principale
                          </label>
                          <p className="text-muted">
                            Image de presentation du produit JPG, GIF or PNG.
                            Max size of 800K
                          </p>
                        </div>
                        <input
                          type="file"
                          className="form-control"
                          id="productQuantitie"
                          placeholder="Image de presentation du produit"
                        />
                      </div>
                      {/* MAIN IMAGE */}
                      {/* BIG IMAGE */}
                      <div className="mb-3">
                        <div className="row flew">
                          <label
                            htmlFor="productQuantitie"
                            className="form-label"
                          >
                            Image Grand format
                          </label>
                          <p className="text-muted">
                            Image du produit sur un grand format JPG, GIF or
                            PNG. Max size of 800K
                          </p>
                        </div>
                        <input
                          type="file"
                          className="form-control"
                          id="productQuantitie"
                          placeholder="Image de presentation du produit"
                        />
                      </div>
                      {/* END BIG IMAGE */}
                      <div className="mb-3">
                        <div className="row flew">
                          <label
                            htmlFor="productQuantitie"
                            className="form-label "
                          >
                            Autre images
                          </label>
                        </div>
                        <input
                          type="file"
                          className="form-control"
                          id="productQuantitie"
                          multiple ={true} 
                          placeholder="Image de presentation du produit"
                        />
                      </div>
           
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
