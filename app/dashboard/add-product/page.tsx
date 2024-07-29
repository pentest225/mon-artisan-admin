import { createProduct } from "@/app/libs/actions";

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
                <form action={createProduct}>
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
                          name="productCategorie"
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
                          name="productName"
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
                          name="productDesciption"
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
                            name="price"
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
                            name="quantitie"
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
                          <label htmlFor="mainImage" className="form-label ">
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
                          id="mainImage"
                          name="mainImage"
                          placeholder="Image de presentation du produit"
                        />
                      </div>
                      {/* MAIN IMAGE */}
                      {/* BIG IMAGE */}
                      <div className="mb-3">
                        <div className="row flew">
                          <label htmlFor="bigImage" className="form-label">
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
                          id="bigImage"
                          name="bigImage"
                          placeholder="Image de presentation du produit"
                        />
                      </div>
                      {/* END BIG IMAGE */}
                      <div className="mb-3">
                        <div className="row flew">
                          <label htmlFor="otherImages" className="form-label ">
                            Autre images
                          </label>
                        </div>
                        <input
                          type="file"
                          className="form-control"
                          id="otherImages"
                          name="otherImages"
                          multiple={true}
                        />
                      </div>
                    </div>

                    <div className="col-md-6 md">
                      <button type="submit" className="btn btn-primary me-2">
                        Enregistre le produit
                      </button>
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
