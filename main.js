//se crean la variable para seleccionar 
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const LogoMenuMobile = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu');

const logoCarrito = document.querySelector('.navbar-shopping-cart');
const productdetail = document.querySelector('.product-detail');

const cardsContainer = document.querySelector('.cards-container');






// se indica el evento a realizar recibe evento y luego la funcion
menuEmail.addEventListener('click', toggleDesktopMenu);

LogoMenuMobile.addEventListener('click', toggleMobileMenu);

logoCarrito.addEventListener('click', toggleCarritoCompra);







// funciones 
function toggleDesktopMenu(){
     

    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu(){
   const isCarritoCompraClosed = productdetail.classList.contains('inactive');
   if(!isCarritoCompraClosed){
    productdetail.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive')
}

function toggleCarritoCompra(){
   const isMenuMobileClosed = mobileMenu.classList.contains('inactive');

    if(!isMenuMobileClosed){
        mobileMenu.classList.add('inactive');
        }

    productdetail.classList.toggle('inactive');

}

// seria el array que no devolveria la consulta a un API REST
const productList = [];

// es para cargar un nuevo elemento
productList.push({
    name: 'DR650',
    price: 220,
    Image: 'https://motos-suzuki.com/wp-content/uploads/2020/02/dr650.png'
});
productList.push({
    name: 'Xtz660 R',
    price: 660,
    Image: 'https://http2.mlstatic.com/D_NQ_NP_840564-MCO72550528755_102023-O.webp'
});
productList.push({
    name: 'MT09',
    price: 900,
    Image: 'https://www.moto1pro.com/sites/default/files/2021_yam_mt09dx_eu_smx_sta_001_03_preview.jpg'
});


// sigue insertar los registros
// debemos recorrer con ciclo for 

//********************************************************************** */
function renderProducts(arr) {
    for(product of arr){
    //creamos el div y se le agrega la clase
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

//********************************************************************** */
    // creamos la imagen y se le agrega el src
    const productImg = document.createElement('img');
    // modificamos la propiedad con setAttribute
    productImg.setAttribute('src', product.Image)

    //creamos el div y se le agrega la clase
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    

//********************************************************************** */
    // sigueinte div y los parrafos P al los cuales se les agrega valor con el innerText
    const productInfoDiv = document.createElement('div');

    const productInfoPrice = document.createElement('P');
    productInfoPrice.innerText = '$' + product.price;
    const productInfoParrafo = document.createElement('P');
    productInfoParrafo.innerText = product.name;

    productInfoDiv.appendChild(productInfoPrice);
    productInfoDiv.appendChild(productInfoParrafo);

//********************************************************************** */
    // creamos el figure
    const productCInfoFigure = document.createElement('figure');
    const Imginfofigure = document.createElement('img');
    //modificamos la propiedad 
    Imginfofigure.setAttribute('src','./icons/bt_add_to_cart.svg');


    // ahora vamos a inserte cada cosa dentro de su etiqueta padre
    productCInfoFigure.appendChild(Imginfofigure);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productCInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    //dentro del cars-container agregamos todo

    //cardsContainer = document.createElement('div');
    //cardsContainer.classList.add('cards-container');
    cardsContainer.appendChild(productCard);
    



}
}

renderProducts(productList);



