"use strict";!function(e){function t(e,t){this.value=e||0,this.type=t||"S.I",this.getMeasure=function(){return e||t?(console.log("The Mesure is "+this.value+this.type),this.value+this.type):(console.error("Data missing"),!1)}}function i(e,i){t.call(this,e,i)}function n(e,i){t.call(this,e,i)}function s(e,i){t.call(this,e,i)}function o(e){t.call(this,e,type)}function l(e){t.call(this,e,type)}function r(e){this.type="c",i.call(this,e,this.type),this.toFarenheit=function(){return console.log("Converted_1 is "+(1.8*this.value+32+" Farenheit")),1.8*this.value+32},this.toKelvin=function(){return console.log("Converted_2 is "+(this.value+273.15+" Kelvin")),this.value+273.15}}function u(e){this.type="f",i.call(this,e,this.type),this.toCelsius=function(){return console.log("Converted_1 is "+((this.value-32)*(5/9)+" Celsius")),(this.value-32)*(5/9)},this.toKelvin=function(){return console.log("Converted_2 is "+((this.value+459.67)*(5/9)+" Kelvin")),(this.value+459.67)*(5/9)}}function h(e){this.type="k",i.call(this,e,this.type),this.toCelsius=function(){return console.log("Converted_1 is "+(1.8*this.value-459.67+" Celsius")),1.8*this.value-459.67},this.toFarenheit=function(){return console.log("Converted_2 is "+(this.value-273.15+" Farenheit")),this.value-273.15}}function c(e){this.type="m",s.call(this,e,this.type),this.toKilometer=function(){return console.log("Converted_1 is "+(this.value/1e3+" Kilometer")),this.value/1e3},this.toCentimeter=function(){return console.log("Converted_2 is "+(100*this.value+" Centimeter")),100*this.value}}function a(e){this.type="cm",s.call(this,e,this.type),this.toMeter=function(){return console.log("Converted_1 is "+(this.value/1e3+" Meter")),this.value/1e3},this.toKilometer=function(){return console.log("Converted_2 is "+(this.value/1e5+" Kilometer")),this.value/1e5}}function v(e){this.type="km",s.call(this,e,this.type),this.toMeter=function(){return console.log("Converted_1 is "+(1e3*this.value+" Meter")),1e3*this.value},this.toCentimeter=function(){return console.log("Converted_2 is "+(1e5*this.value+" Centimeter")),1e5*this.value}}e.Measure=t,e.Temperature=i,e.Mass=n,e.Length=s,e.Surface=o,e.Volume=l,e.Celsius=r,e.Farenheit=u,e.Kelvin=h,e.Meter=c,e.Kilometer=v,e.Centimeter=a,e.calculate=function(){var e=document.getElementById("original").value,i=document.getElementById("converted"),n=document.getElementById("converted2"),s=/^\s*([-+]?\d+(?:\.\d+)?(?:e[+-]?\d+(?:\.\d+)?)?)\s*(º?(f(arenheit)?|c(elsius)?)|(k(elvin)?)|(((c(enti)?)?|(k(ilo)?)?)?m(eter)?))\s*$/i;if(e=e.match(s)){var o=e[1],l=e[2].replace("º","").toLowerCase();o=parseFloat(o);var m=new t(o);"c"==l.substr(0)?(m=new r(o),i.innerHTML=m.toFarenheit().toFixed(6)+" Farenheit",n.innerHTML=m.toKelvin().toFixed(6)+" Kelvin"):"f"==l.substr(0)?(m=new u(o),i.innerHTML=m.toCelsius().toFixed(6)+" Celsius",n.innerHTML=m.toKelvin().toFixed(6)+" Kelvin"):"k"==l.substr(0)?(m=new h(o),i.innerHTML=m.toCelsius().toFixed(6)+" Farenheit",n.innerHTML=m.toFarenheit().toFixed(6)+" Celsius"):"m"==l.substr(0)?(m=new c(o),i.innerHTML=m.toCentimeter().toFixed(6)+" Centimeter",n.innerHTML=m.toKilometer().toFixed(6)+" Kilometer"):"cm"==l.substr(0)?(m=new a(o),i.innerHTML=m.toMeter().toFixed(6)+" Meter",n.innerHTML=m.toKilometer().toFixed(6)+" Kilometer"):"km"==l.substr(0)&&(m=new v(o),i.innerHTML=m.toMeter().toFixed(6)+" Meter",n.innerHTML=m.toCentimeter().toFixed(6)+" Centimeter")}else i.innerHTML=n.innerHTML="ERROR! Try something like  0 celsius,-2.3e-4kelvin, 32ºF, -45K, 3.4e2 c, -2.3e-4kelvin, 0 meter, -2.3m, 1Km, 45.3centimmeter, 3.4e2 cm, 2.3e-4km,.."}}(this);