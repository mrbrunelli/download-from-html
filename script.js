const imageUrl = "https://i0.wp.com/www.institutoniemeyer.org/wp-content/uploads/2018/09/teste.png";

const btnDownload = document.getElementById('btn-download');

btnDownload.addEventListener('click', download);

async function download() {
    const a = document.createElement('a');
    a.href = await toDataUrl(imageUrl);
    a.download = "imagem.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function toDataUrl(url) {
    return fetch(url)
        .then(res => {
            return res.blob();
        })
        .then(blob => {
            return URL.createObjectURL(blob);
        });
}