

var kramar =[
    {
        img:'https://www.askramar.com/Files/Foto/Vozila/2021/12/460843.JPG',
        ime:'Mercedes-Benz AMG GT 53 4Matic+ 4 Doors 435 KS',
        cijena:'CIJENA KM: 192.990,00 ',
        cijenaPdv: 'CIJENA KM+PDV: 224.990.00',
        godina:'GODINA: 2020 ',
        kilometri:'KILOMETRI:12 134'
        
    },
    {
        img:'https://www.askramar.com/Files/Foto/Vozila/2021/12/459435.JPG',
        ime:'Volkswagen Passat 2.0 CR TDI DSG-Tiptronik Comfortline -Novi model-',
        cijena:'CIJENA KM: 37.500.00',
        cijenaPdv: 'CIJENA KM+PDV: 40.990.00',
        godina:'GODINA: 2017',
        kilometri:'KILOMETRI:137 300'

        
    },
    {
        img:'https://www.askramar.com/Files/Foto/Vozila/2021/12/460388.JPG',
        ime:'Peugeot 2008 1.6 BlueHDI Tiptronik Allure Sport -FACELIFT-',
        cijena:'CIJENA KM: 23.990.00',
        cijenaPdv: 'CIJENA KM+PDV: 26.990.00',
        godina:'GODINA:2017',
        kilometri:'KILOMETRI:148 994'

        
    },
    {img:'https://www.askramar.com/Files/Foto/Vozila/2021/12/460024.JPG',
        ime:'Peugeot 3008 BlueHDI 130 KS Tiptronik Allure Sport VIRTUAL COCKPIT -Novi model-',
        cijena:'CIJENA KM: 39.990.00',
        cijenaPdv: 'CIJENA KM+PDV: 43.990.00',
        godina:'GODINA: 2019',
        kilometri:'KILOMETRI:149 502'
}

]
function displayCar(data){
var divWrapper = document.createElement('div');
divWrapper.className='wrapper'


for(var i =0;i<data.length;i++){
    var kramar =data[i];
    var divCar = document.createElement('div');
    divCar.className='car';
    var imgCar = document.createElement('div');
    var imgKramar =document.createElement('img');
    imgKramar.src=kramar.img;
    imgKramar.style='width:270px'
    imgCar.appendChild(imgKramar);
    var naslovVozila=document.createElement('div');
    naslovVozila.innerHTML=kramar.ime;
    naslovVozila.className='naslov-vozila'
    var hrLine=document.createElement('hr');
    hrLine.innerHTML;
    var detaljiVozila =document.createElement('div');
    detaljiVozila.innerHTML=kramar.cijena
    detaljiVozila.className='cijena-vozila'
    var pricePdv=document.createElement('p')
    pricePdv.innerHTML=kramar.cijenaPdv
    pricePdv.className='cijena-vozila'
    var hrLine2=document.createElement('hr');
    hrLine2.innerHTML;
    var godina=document.createElement('div');
    godina.innerHTML=kramar.godina
    godina.className='godina';
    var kramKilometri=document.createElement('span');
    kramKilometri.innerHTML=kramar.kilometri
    kramKilometri.className='kilometri'
   




    divWrapper.appendChild(divCar);
    divCar.appendChild(imgCar);
    divCar.appendChild(naslovVozila);
    divCar.appendChild(hrLine);
    divCar.appendChild(detaljiVozila);
    divCar.appendChild(pricePdv);
    divCar.appendChild(hrLine2);
    divCar.appendChild(godina);
    godina.appendChild(kramKilometri);
}





document.body.appendChild(divWrapper);

}

displayCar(kramar);