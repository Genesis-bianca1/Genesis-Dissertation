function check_answer(answer) {
    if (answer == 'correct') {
        
        alert("Correct! 'reunión' means 'meeting'");
        //Show progress bar 100% correct
        var score = 100;
        var prog_bar = document.getElementById("progress-bar");
        prog_bar.style.width = score + "%";
        prog_bar.textContent = Math.round(score) + "%";
    } else {
        alert("That's not quite right... Try again!");
        //Show progress bar 0% correct
        var score = 0;
        var prog_bar = document.getElementById("progress-bar");
        prog_bar.style.width = score + "%";
    }
}
