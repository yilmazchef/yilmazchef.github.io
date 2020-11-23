function generatePDF() {
    // Choose the element that my cv is rendered in.
    const element = document.getElementById("printable_area");
    // Choose the element and save the PDF for our user.
    var opt = {
        margin: 1,
        filename: 'yilmaz_mustafa_cv_en.pdf',
        image: { type: 'jpeg', quality: 1.00 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'letter', orientation: 'portrait' }
    };

    // New Promise-based usage:
    html2pdf().set(opt).from(element).save();
}

document.getElementById("print-btn").addEventListener("click", generatePDF);

M.AutoInit();

function showMenu() {
    var instance = M.Sidenav.getInstance(elem);
    alert("button is clicked")
}

document.getElementById("mobile-menu").addEventListener("click", showMenu);