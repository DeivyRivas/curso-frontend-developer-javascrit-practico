//se crean la variable para seleccionar 
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const LogoMenuMobile = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu');

const logoCarrito = document.querySelector('.navbar-shopping-cart');
const productdetail = document.querySelector('.product-detail')





// se indica el evento a realizar recibe evento y luego la funcion
menuEmail.addEventListener('click', toggleDesktopMenu)

LogoMenuMobile.addEventListener('click', toggleMobileMenu)

logoCarrito.addEventListener('click', toggleCarritoCompra)







// funciones 
function toggleDesktopMenu(){
    const isCarritoCompraClosed = productdetail.classList.contains('inactive');
    if(!isCarritoCompraClosed){
     productdetail.classList.add('inactive');
     } 

    //desktopMenu.classList.toggle('inactive')
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
