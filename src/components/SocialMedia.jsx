import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';


export const SocialMedia = ({url, title}) => {

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
        <>
            <button
                className='hover:text-gray-400 hover:-rotate-45 transition'
                onClick={shareOnFacebook}><FaFacebook /></button>
            <button
                className='hover:text-gray-400 hover:-rotate-45 transition'
                onClick={shareOnTwitter}><FaTwitter /></button>
            <button
                className='hover:text-gray-400 hover:-rotate-45 transition'
                onClick={shareOnWhatsapp}><FaWhatsapp /></button>
        </>
    )
}
