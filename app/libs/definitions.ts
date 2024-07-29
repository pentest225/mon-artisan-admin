/**
 * 1=> Inscription Client :
 *      Client ( Utilisateur final)
 *      Artisan 
 *      Admin 
 * 2=> Artisan : Proposition de services
 * 3=> Artisan : Vente d'articles 
 * 3=> Artisan : Validation d'une commandes 
 * 4=> Artisan : Gestion des services et Articles 
 * 4=> Client : Acheter Article 
 * 5=> Client : Demande de services 
 * 6=> Admin : Validation des posts des artisans  
 * 7=> Admin : Validation des compte artisan 
 * 
 *  */ 

export type User = {
    id:string;
    name:string;
    last_name:string;
    email:string;
    phone:string,
    password:string;
    user_type:'client'|'artisan'|'admin';
    account_status:'active'|'unactive'|'suspend'|'disabled'|'wating';
    
    create_at:string;
    update_at:string;
    is_delete:boolean;
}

export type Artisan = {
    id:string;
    user_id:string;
    sector:string;
    bio:string;
    city:string;
    place:string;
    location_lat:number;
    location_lon:number;
    sex:'homme'|'femme';
    study_level:string;
    is_cetif:boolean;
    wathapp_phone:string;
    avarage:number;
    create_at:string;
    update_at:string;
    is_delete:boolean;
}

export type ServiceType = {
    id:string;
    name:string;
    description:string;
    service_icon:string;
    is_actif:boolean

    create_at:string;
    update_at:string;
    is_delete:boolean;
}


export type CreaArtisan = {
    id:string;
    artisan_id:string;
    image:string;
}


export type Service = {
    id:string;
    artisan_id:string;
    desciption:string;
    status:'active'|'unactive'|'suspend'|'disabled'|'wating';

    create_at:string;
    update_at:string;
    is_delete:boolean;
}

export type ProductCategory = {
    id:string;
    name :string;
    description:string;
    icon:string;
    create_at:string;
    update_at:string;
    is_delete:boolean;
}


export type ProductSubCategory = {
    id:string;
    category_id: string;
    name:string;
    description:string;
    create_at:string;
    update_at:string;
    is_delete:boolean;
    
}

export type Product = {
    id:string;
    category_id : string;
    name:string;
    main_image:string;
    big_image:string;
    price:string;
    quantity:number;
    return_delay:number;//Period en jours pour le test du produis et le retour
    warranty_period:number;

    create_at:string;
    update_at:string;
    is_delete:boolean;
}

export type ProductImage = {
    id:string;
    product_id:string;
    image:string;

    create_at:string;
    update_at:string;
    is_delete:boolean;
}

export type ProductAddionalInfo = {
    id:string;
    product_id:string;
    info_key:string;
    info_value:string;

    create_at:string;
    update_at:string;
    is_delete:boolean;
}

export type PColor = {
    id:string;
    color_code:string;
    color_name:string;

    create_at:string;
    update_at:string;
    is_delete:boolean;
}

export type ProductColor = {
    id:string;
    product_id:string;
    color_id:string;

    create_at:string;
    update_at:string;
    is_delete:boolean;
}

export type ProductReview = {
    id:string;
    product_id:string;
    user_id:string;
    review:string;
    rating:number;

    create_at:string;
    update_at:string;
    is_delete:boolean;
}

export type UserProductFavorite = {
    id:string;
    product_id:string;
    user_id:string;

    create_at:string;
    update_at:string;
    is_delete:boolean;
}

export type Card = {
    id:string;
    user_id:string
}

export type CartItem = {
    id:string;
    user_id: string;
    card_id:string;
    product_id: string;
    quantity:string;

    create_at:string;
    update_at:string;
    is_delete:boolean;
}

export type Order = {
    id:string;
    user_id:string;
    cart_id:string;

    order_status:'pending'|'confirmed'|'processing'|'shipped'|'deliverd'|'cancelled'|'refunded'|'exchanged';
    create_at:string;
    update_at:string;
    is_delete:boolean;
}

export type ContactUs = {
    id:string;
    name:string;
    email:string;
    phone:string;
    subject:string;
    message:string;

    order_status:'pending'|'confirmed'|'processing'|'shipped'|'deliverd'|'cancelled'|'refunded'|'exchanged';

    create_at:string;
    update_at:string;
    is_delete:boolean;
}

export type Newslatter = {
    id:string;
    email:string;

    create_at:string;
    update_at:string;
    is_delete:boolean;
}


export type AppAssert = {
    id:string;
    app_icon:string;
    app_name:string;
    app_description:string;
    is_active:boolean;
    app_primary_color:string;

    create_at:string;
    update_at:string;
    is_delete:boolean;
}

export type AppSocialLink = {
    id:string;
    social_icon:string;
    social_name:string;
    social_link:string;

    create_at:string;
    update_at:string;
    is_delete:boolean;
}

export type ContactInfo = {
    id:string;
    lat:string;
    long:string;
    email:string;
    phone:string;
    phone2:string;
    fix:string;

    create_at:string;
    update_at:string;
    is_delete:boolean;
}

export type BannerSection = {
    id:string;
    banner_image:string;
    banner_title:string;
    banner_description:string;
    banner_font_color:string;
    is_harder_banner:string;
    is_active:boolean;
    link_action:string;

    create_at:string;
    update_at:string;
    is_delete:boolean;
}