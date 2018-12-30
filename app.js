class boisson {
	constructor(nom, kantite){
		this._nom = nom;
		this._kantite = kantite;
	}
	
	get mak(){
		return this._name;
	}
	
	set makk(name){
		this._makk = name;
	}
	get kantite(){
		return this._kantite;
	}
	set kantite(name){
		this._kantite = name;
	}
}

class gazeuse extends boisson {
	constructor(nom , kantite, taux_c02){
		super(nom, kantite);
		this._taux =  taux_c02;
	}
	
	get taux(){
		return this._taux;
	}
	
	set tauxx(taux){
		this._taux = taux;
	}
}

class alcool extends boisson {
	constructor(nom , kantite, taux_al){
		super(nom , kantite);
		this._tauxal =  taux_al;
	}
	
	get tauxal(){
		return this._tauxal;
	}
	
	set tauxall(taux){
		this._tauxal = taux;
	}
}

class jus extends boisson {
	constructor(nom , kantite, saveur, taux_acide){
		super(nom , kantite);
		this._saveur =  saveur;
		this._tacide = taux_acide;
	}
	
	get saveur(){
		return this._saveur;
	}
	
	set saveurr(name){
		this._saveur = name;
	}
	
	get acide(){
		return this._tacide;
	}
	
	set acidee(name){
		this._tacide = name;
	}
}
let tab=[];
 tab =localStorage.getItem("donnees")?JSON.parse(localStorage.getItem("donnees")):[];

	//localStorage.setItem("donnees", JSON.stringify(tab));
				  //let data = JSON.parse(localStorage.getItem("donnees"));







let btn = document.querySelector("#btn-press");



btn.addEventListener('click', function(e){
	  e.preventDefault();
	  
	  let boisson = document.querySelector("#boisson").value;
      let total = document.querySelector("#kant").value;
      let type = document.querySelector("#typ").value;
      
	  
	  console.log(boisson);
      console.log(total);
       console.log(type);
	   let btna = document.querySelector("#btn-press-a");
       let btng = document.querySelector("#btn-press-g");
       let btnj = document.querySelector("#btn-press-j");
	   
	   if(type== "alkol"){
		   document.querySelector('.derpa').style.display= 'block';
		   document.querySelector('.derpg').style.display= 'none';
		   document.querySelector('.derpj').style.display= 'none';
		   
		   btna.addEventListener('click', function(e){
	                  e.preventDefault();
	               let to = document.querySelector("#tauxal").value;
				   console.log(to);
				   
				   let alkool = new alcool(boisson, total, to);
				  tab.push(alkool);
				  console.log(tab);
				  localStorage.setItem("donnees", JSON.stringify(tab));
				  console.log(JSON.parse(localStorage.getItem("donnees")));
				 // data = JSON.parse(localStorage.getItem("donnees"));
				 // data.forEach(item => {console.log(item)})
			
              });
		  
		   
	   }
	   else if (type=="gazez"){
		    document.querySelector('.derpa').style.display= 'none';
		   document.querySelector('.derpg').style.display= 'block';
		   document.querySelector('.derpj').style.display= 'none';
		   
		   btng.addEventListener('click', function(e){
	                  e.preventDefault();
					  
	              let tog = document.querySelector("#tauxco2").value;
				  
				  console.log(tog);
				  let gazz = new gazeuse(boisson, total, tog);
				  tab.push(gazz);
				  console.log(tab);
				  
				  localStorage.setItem("donnees", JSON.stringify(tab));
				  
              });
		   
	   }
	   else if (type == "ji"){
		    document.querySelector('.derpa').style.display= 'none';
		   document.querySelector('.derpg').style.display= 'none';
		   document.querySelector('.derpj').style.display= 'block';
		   
		    btnj.addEventListener('click', function(e){
	                  e.preventDefault();
	              let savv = document.querySelector("#sav").value;
		           let ass = document.querySelector("#asid").value;
				   
				   console.log(savv);
				   console.log(ass);
				   let juss = new jus(boisson, total, savv, ass);
				  tab.push(juss);
				  console.log(tab);
				  
				  localStorage.setItem("donnees", JSON.stringify(tab));
              });
		   
	   }
	   else{
		   
	   }

});






