//aqui van las funciones
window.onload = () => {
    document.getElementById("page1").style.display="block";
    document.getElementById("page2").style.display ="none";
    document.getElementById("page3").style.display="none";
  }
  document.getElementById("pagina2").addEventListener("click",() => {
    document.getElementById("page1").style.display="none";
    document.getElementById("page2").style.display ="block";
    document.getElementById("page3").style.display="none";
  });
  document.getElementById("pagina3").addEventListener("click",() => {
    document.getElementById("page1").style.display="none";
    document.getElementById("page2").style.display ="none";
    document.getElementById("page3").style.display="block";
  });
  document.getElementById("init").addEventListener("click",() => {
    document.getElementById("page1").style.display="block";
    document.getElementById("page2").style.display ="none";
    document.getElementById("page3").style.display="none";
  });
  document.getElementById("about").addEventListener("click",() => {
    document.getElementById("page1").style.display="none";
    document.getElementById("page2").style.display ="block";
    document.getElementById("page3").style.display="none";
  });
  document.getElementById("datos").addEventListener("click",() => {
    document.getElementById("page1").style.display="none";
    document.getElementById("page2").style.display ="none";
    document.getElementById("page3").style.display="block";
  });
  