let p = ["P1", "P2", "P3"];
let at = [3, 2, 5];
let bt = [2, 4, 2];
let rbt = [];
let t;

function reset(){
  let tableEl = document.getElementById("idTable");
  let oldTBodyEl = tableEl.getElementsByTagName('tbody')[0];
  let newTBodyEl = document.createElement('tbody');
  t = 0;
  
  tableEl.replaceChild(newTBodyEl, oldTBodyEl);
  
  document.getElementById("idTime").innerHTML = "";
  document.getElementById("idStatistics").innerHTML = "";
}

function start(){
   t = 0;   
   rbt = bt;
   document.getElementById("idTime").innerHTML = "Tempo: " + t;
  
   let tableEl = document.getElementById("idTable");
   let oldTBodyEl = tableEl.getElementsByTagName('tbody')[0];
   let newTBodyEl = document.createElement('tbody');
   
   for(i=0; i<p.length; i++) {
      const trEl = newTBodyEl.insertRow(); //tr
      let tdEl = trEl.insertCell(); //td
      tdEl.appendChild(document.createTextNode(p[i]));
      tdEl = trEl.insertCell(); // td con valore
      tdEl.appendChild(document.createTextNode(at[i]));
      tdEl = trEl.insertCell(); //td con valore
      tdEl.appendChild(document.createTextNode(bt[i]));
      tdEl = trEl.insertCell(); //td con vaore
      tdEl.id = "idP" + i;
      tdEl.appendChild(document.createTextNode(rbt[i]));
      }
   
  tableEl.replaceChild(newTBodyEl, oldTBodyEl);
}

function step(){
  
}

function inserisci(){
  
}

