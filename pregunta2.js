 
/**
 * Con el objeto de inventario, se pide desarrollor una function que reciba como parametro
 * el articulo (shoes, socks, shirts, pants) y una cantidad. Si la cantidad es menor o igual a la cantidad 
 * del inventario, se actualiza el objeto disminuyendo la cantidad y se retorna el codigo 200 que significa 'Venta exitosa'. 
 * Si la cantidad es mayor al stock existente, no se actualiza el objeto y se retorna el codigo 500 'Imposible de realizar la venta'
 * 
 */

 const inventory = {
    shoes: 10,
    socks: 6,
    shirts: 10,
    pants: 5,
  }

const sale = function (article, cant){

    switch (article) {
      case 'shoes':
        if(Haycantidad(inventory.shoes, cant)){
          inventory.shoes = inventory.shoes - cant
          return 200
        }
        return 500
        break;
        case 'socks':
          if(Haycantidad(inventory.socks, cant)){
            inventory.socks = inventory.socks - cant
            return 200
          }
          return 500
          break;
          case 'shirts':
            if(Haycantidad(inventory.shirts, cant)){
              inventory.shirts = inventory.shirts - cant
              return 200
            }
            return 500
            break;
            case 'pants':
              if(Haycantidad(inventory.pants, cant)){
                inventory.pants = inventory.pants - cant
                return 200
              }
              return 500
              break;
      default:
        break;
        return console.log('Articulo inexistente');
    }
    
  
}
  function Haycantidad(arti, cant){
  if( cant <= arti ){
    return true;
  }else{
  return false;
  }
}


// TESTS (no modificar)
console.log(sale('shoes',8) === 200 && inventory.shoes === 2);
console.log(sale('shoes',3) === 500 && inventory.shoes === 2);
console.log(sale('pants',5) === 200 && inventory.pants === 0);
