// function show(elementId) {
//     var element = document.getElementById(elementId);
//     element.style.display = 'block';
//   }
//   function hide(elementId) {
//     var element = document.getElementById(elementId);
//     element.style.display = 'none';
//   }
//   function toggle() {
//     var element = document.getElementById('elementId');
//     if (element.style.display === 'none' || element.style.display === '') {
//       show(element);
//     } else {
//       hide(element);
//     }
//   }
  function toggleMe1(){
    var e=document.getElementById("elementId");
    if(!e)return true;
    if(e.style.display=="none"){
      e.style.display="block"
    } else {
      e.style.display="none"
    }
    return true;
  }
  function toggleMe2(){
    var e=document.getElementById("elementId1");
    if(!e)return true;
    if(e.style.display=="none"){
      e.style.display="block"
    } else {
      e.style.display="none"
    }
    return true;
  }
  function toggleMe3(){
    var e=document.getElementById("elementId2");
    if(!e)return true;
    if(e.style.display=="none"){
      e.style.display="block"
    } else {
      e.style.display="none"
    }
    return true;
  }
  function toggleMe4(){
    var e=document.getElementById("elementId3");
    if(!e)return true;
    if(e.style.display=="none"){
      e.style.display="block"
    } else {
      e.style.display="none"
    }
    return true;
  }