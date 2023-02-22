import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';




export const GIfItem = ({ url, title }) => {

    const shareUrl = encodeURI(url);

    const shareOnFacebook = () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}&t=${title}`);
    };

    const shareOnTwitter = () => {
        window.open(`https://twitter.com/intent/tweet?url=${shareUrl}&text=${title}`);
    };

    const shareOnWhatsapp = () => {
        window.open(`https://api.whatsapp.com/send?text=${shareUrl}`);
    };

    const downloadUrl = url + '$download_url=true'

    const descargarGif = () => {
        const element = document.createElement('a');
        element.href = URL.createObjectURL(new Blob([downloadUrl]));
        element.download = `${title}.gif`;
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }

    return (


            <div
                className='p-2  rounded-md shadow-md  hover:shadow-none hover:border-gray-500 bg-white transition-all flex flex-col justify-between gap-2'
            >
                <img
                    src={url}
                    alt={title}
                />
                <a href={url} target='_blank' className='hover:text-gray-500 text-center'>{title}</a>
                <button
                    onClick={descargarGif}
                    className='hover:bg-gray-400 rounded-lg transition-all'>
                        Buscar</button>
                <div className='flex gap-4 justify-end items-center'>
                    <p className='hidden lg:flex'>Quieres compartir?</p>
                    <button
                        className='hover:text-gray-400 hover:-rotate-45 transition'
                        onClick={shareOnFacebook}><FaFacebook /></button>
                    <button
                        className='hover:text-gray-400 hover:-rotate-45 transition'
                        onClick={shareOnTwitter}><FaTwitter /></button>
                    <button
                        className='hover:text-gray-400 hover:-rotate-45 transition'
                        onClick={shareOnWhatsapp}><FaWhatsapp /></button>
                </div>
            </div>
      
    )
}
