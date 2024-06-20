import React from "react"; // ==> defult export karde yani hata esm ham taghir kone karesh mmikone
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
//import  { zahra, math} from './ghezi'; //==> nahve import kardan hast
import riz, { zahra, math } from "./ghezi";
//momkene bi nahayat export dashte bashim agar bekhaym estefade konim
//bayad d-strucher konim kole ghezi ye object ke har kodum az inha key hast
// har key d-strucker konim
// agar ye export defult bashe va baghie gheire defult injuri seda mikonim
import mamad from "./zahra";
console.log(mamad());
console.log(riz());

// pas defult dar asl miad be surat pishfarz un function ejra mikone esm ham mohem nist
//alan mamad hamoon mehrdad hast ba ezafe kardan ye defult
console.log(zahra);
console.log(math());
var obj = {
  fName: "m",
  lName: "H",
  age: 30,
};
var { fName, lName, age } = obj;
//fName:firstName ==>firstName:obj.fName
// es6==>d-stretchering ==> az ham pashidan
//yani inkar karde
//var fname=obj.fName;
//var lName=obj.lName;
// pas miad khode automatic har key tabdil be var mikone
// fileList.map(function(item,i){
//   var {name , title ,desc}=item;
//injuri d-structure mikonam ke har dafe kalame item ghablesh nanevisam
//vali faghat dakhel object karai dare
//inja item hamun object mishod ke mitunestim dastresi peida konim
// })
console.log(fName);
console.log(obj.fName);

const root = ReactDOM.createRoot(document.getElementById("root"));
//be surat jsx neveshtim
//hame codha dakhel src neveshte mishand
root.render(<div>salam</div>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// agar 2 ta var ham nam az 2 jaye mokhtalef import beshe olaviat ba pain tar hastesh