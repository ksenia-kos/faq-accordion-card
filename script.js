document.querySelectorAll('.question').forEach(item => {
    item.addEventListener('click', event => {

        let answer = item.nextElementSibling;

        if (!item.classList.contains('collapsing')){ // if it's not collapsing (300ms)

            // Open accordion item
            if (!item.classList.contains('open')) { // if .question doesn't have .open
        
                // make element visible for 1ms to get its height and then hide it again
                answer.style.display = 'block';
                let accHeight = answer.clientHeight;

                setTimeout(() => {
                    answer.style.height = accHeight + 'px';
                    answer.style.display = '';
                }, 1);
                
                answer.classList = 'answer collapsing'; // height = 0 assigned in CSS

                // After 300ms
                setTimeout(() => {
                    answer.classList = 'answer collapsed open'; // display: block assigned in CSS
                }, 300);
            }

            // Close accordion item
            else { // if .question has .open

                answer.classList = 'answer collapsing'; // height = 0 assigned in CSS

                setTimeout(() => {
                    answer.style.height = '0px';
                }, 1);

                // After 300ms
                setTimeout(() => {
                    answer.classList = 'answer collapsed'; // display: none assigned in CSS
                    answer.style.height = '';
                }, 300);
            }

            item.classList.toggle('open'); // remove .open from .question if it has it, or add .open if it doesn't
        }
    });
  });