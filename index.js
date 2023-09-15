let input = document.getElementById("input")
 let save = document.getElementById("save")
 let deleteall = document.getElementById("deleteall")
  let ulEl = document.getElementById("ul-el")
  let myinputs = []

       inputslocalstorage = JSON.parse(localStorage.getItem("myinputs"))
         if(inputslocalstorage) {
            myinputs = inputslocalstorage
            render()
         }
    save.addEventListener("click", function() {
        if(input.value == "") {
             alert("No Inputs")
        }
         else {
              myinputs.push(input.value)

              input.value = ""
              render()
               localStorage.setItem("myinputs", JSON.stringify(myinputs))
         }
    })
           deleteall.addEventListener("click", function() {
               myinputs = []
                localStorage.removeItem("myinputs")
                render()
           })

      function render()  {
        let list = ""
     myinputs.forEach(( item, key) => {
             list += `  <div class="flex">
                  
             <li> ${item}  </li>
             <span class="close"><i class="fa fa-trash"  onclick= "cancel(${key})" ></i></span>
               </div>`
          })
            ulEl.innerHTML = list
            
      }

      function cancel(a) {
          myinputs.splice(a,1)
          render()
          localStorage.setItem("myinputs", JSON.stringify(myinputs))
      }
              