const qrformEl = document.getElementById("qrform")
const qrimgEl = document.getElementById("qrimage")
const qrcontainerEl = document.getElementById("qrcontainer")
const qrinputtextEl = document.getElementById("qrinputtext")
const generatebtnEl = document.getElementById("generatebtn")

const renderqrcode = (url)=> {
if(!url) return;
generatebtnEl.innerText="Generating QR code";
qrimgEl.src=url;
    const  onimageload = () => {
        const interval = setInterval(() => {
            qrcontainerEl.classList.add("show");
            clearInterval(interval);
            generatebtnEl.innerText = "GEnerate QRcode";
        }, 500);


    };

qrimgEl.addEventListener("load",onimageload);
    
}
qrformEl.addEventListener("submit", (event)=>{
    event.preventDefault();
    const formData = new FormData(qrformEl);
    const text = formData.get("qrtext");
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;

    renderqrcode(qrCodeUrl);
})
qrinputtextEl.addEventListener("keyup", ()=>{
    if(!qrinputtextEl.value.trim()){
        qrcontainerEl.classList.remove("show");
    }
});