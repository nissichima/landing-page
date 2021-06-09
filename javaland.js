
let anchorSelector = 'a[href^="#"]';

let anchorList = document.querySelectorAll(anchorSelector);

//console.log(anchorList);

anchorList.forEach(link => {
    link.onclick = function(e){
        // Prevent scrolling if the hash value is blank
        e.preventDefault();

        //Get the destination to scroll to using the hash property.
        let destination = document.querySelector(this.hash);

        //Scroll to the destination using scrollIntoView method
        destination.scrollIntoView({
            behavior: "smooth"
        });
    }
});