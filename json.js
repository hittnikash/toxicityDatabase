
fetch("toxinDB.json")
.then(function(response){
   return response.json();
})
.then(function(toxins){
   let placeholder = document.querySelector("#data-output");
   let DB = "";
   for(let toxin of toxins){
      DB += `
      <table>
         <tr>
            <td>${toxin.chemical}</td>
            <td>${toxin.toxicity}</td>
            <td>${toxin.effects}</td>
         </tr>
         </table>
      `;
   }
 
   placeholder.innerHTML = DB;
});












  



      
   

