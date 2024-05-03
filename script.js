
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    
    function opentab(event, tabname){
        for(let tablink of tablinks){
            tablink.classList.remove("active-link");
        }
    
        for(let tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
    
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }
    
    var sidemenu = document.getElementById("sidemenu");
    
    function openNav(){
        sidemenu.style.right= "0px";
    }
    
    function closeNav(){
        sidemenu.style.right= "-200px";
    }
    //for contact form

    const scriptURL = 'https://script.google.com/macros/s/AKfycbzrDdwgFaJywMwSmQiO8BL6awQMPb5DhuW3m1fLNnGA1bQFDuiLgAx2yX-ZSt71tJbe/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById('msg');
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message  Sent!  Thank you!"
            setTimeout(function(){msg.innerHTML=""},3000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })
   
    