/*
Create a simple tip calculator. 
• The tip calculator should have an input field for entering a bill amount. 
• It should have a dropdown to select a tip, based on how good the service was. 
• 30% for outstanding service 
• 20% for good service. 
• 10% for an okay service. 
• 5% for a bad service. 
• 0% for no tip. 
• It should have an input field for entering the amount of people sharing the bill. 
• It should have a calculate button, that displays the amount each person will pay.
*/

const cost_input = document.querySelector('.cost');
const service_input = document.querySelector('.service');
const people_input = document.querySelector('.people');

const tip_btn = document.querySelector('#tip-btn');

tip_btn.addEventListener('click', calc_tip);

function calc_tip(){
 let cost = Number(cost_input.value);
 let service = Number(service_input.value) / 100;
 let people = Number(people_input.value);
 let tip = (cost * service) / people;

 let tip_el = document.querySelector('.tip-wrap .tip');
 tip_el.innerText = '₦' + tip.toFixed(2) + ((people > 1) ? 'each' : '');
}