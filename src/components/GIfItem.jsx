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


    return (
        <div
            className='p-2  rounded-md shadow-md  hover:shadow-none hover:border-gray-500 bg-white transition-all flex flex-col justify-between'
        >
            <img
                src={url}
                alt={title}
            />
            <a href={url} target='_blank' className='hover:text-gray-500'>{title}</a>
            <div className='flex gap-4 justify-end items-center'>
                <p>Quieres compartir?</p>
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
