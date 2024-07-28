
export default function Nav1Link() {

    return (
      <ul className="menu-inner py-1">
        <li className="menu-item active">
          <a href="" className="menu-link">
            <i className="menu-icon tf-icons bx bx-home-circle" />
            <div data-i18n="Analytics">Dashboard</div>
          </a>
        </li>
        {/* SECTION PRODUIT */}

        <li className="menu-header small text-uppercase">
          <span className="menu-header-text">Produits</span>
        </li>
        <li className="menu-item ">
          <a href="/dashboard/account-setting" className="menu-link">
            <i className="menu-icon tf-icons bx bx-home-circle" />
            <div>List des Produits</div>
          </a>
        </li>
        <li className="menu-item ">
          <a href="/dashboard/add-product" className="menu-link">
            <i className="menu-icon tf-icons bx bx-lock-open-alt" />
            <div data-i18n="Authentication">Ajouter</div>
          </a>
        </li>

        {/* END SECTION PRODUIT */}

        {/* SECTION ACCOUNT  */}
        <li className="menu-header small text-uppercase">
          <span className="menu-header-text">Gestion des commande</span>
        </li>
        
        <li className="menu-item ">
          <a href="/dashboard/account-setting" className="menu-link">
            <i className="menu-icon tf-icons bx bx-home-circle" />
            <div>List des commandes</div>
          </a>
        </li>
        
        {/* END SECTION ACCOUNT  */}


        {/* SECTION ACCOUNT  */}
        <li className="menu-header small text-uppercase">
          <span className="menu-header-text">Account Settings</span>
        </li>
        
        <li className="menu-item ">
          <a href="/dashboard/account-setting" className="menu-link">
            <i className="menu-icon tf-icons bx bx-home-circle" />
            <div>Account</div>
          </a>
        </li>
        <li className="menu-item ">
          <a href="/" className="menu-link">
            <i className="menu-icon tf-icons bx bx-lock-open-alt" />
            <div data-i18n="Authentication">Connextion</div>
          </a>
        </li>
        {/* END SECTION ACCOUNT  */}

      </ul>
    );
  }
  