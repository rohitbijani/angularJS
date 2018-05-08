myApp.filter('mobileFilter', function(){
  return function(products,manufacturerSelected,storageSelected,osSelected,cameraSelected) {
    var selected=[];
      if(manufacturerSelected.length==0 && storageSelected.length==0 && cameraSelected.length==0 && osSelected.length==0){
        selected=products;
      }
      else {

        if(manufacturerSelected.length > 0) {
          for(var i = 0; i < manufacturerSelected.length; i++){
            for(var j = 0; j < products.length; j++){
              if(manufacturerSelected[i]==products[j].specs.manufacturer){
                selected.push(products[j]);
              }
            }
          }
        }
        if(storageSelected.length > 0) {
          for(var i = 0; i < storageSelected.length; i++){
            for(var j = 0; j < products.length; j++){
              if(storageSelected[i]==products[j].specs.storage){
                selected.push(products[j]);
              }
            }
          }
        }
        if(osSelected.length > 0) {
          for(var i = 0; i < osSelected.length; i++){
            for(var j = 0; j < products.length; j++){
              if(osSelected[i]==products[j].specs.os){
                selected.push(products[j]);
              }
            }
          }
        }
        if(cameraSelected.length > 0) {
          for(var i = 0; i < cameraSelected.length; i++){
            for(var j = 0; j < products.length; j++){
              if(cameraSelected[i]==products[j].specs.camera){
                selected.push(products[j]);
              }
            }
          }
        }
      }
    console.log(selected);

    return selected;
  };
});
