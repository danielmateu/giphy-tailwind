import PropTypes from 'prop-types';
import { SocialMedia } from './SocialMedia';

export const GIfItem = ({ url, title }) => {

    

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
            className='p-2 rounded-md shadow-md hover:shadow-none hover:border-gray-500 bg-white transition-all flex flex-col gap-2 h-min '
            // className='bg-gray-200 rounded-md aspect-w-1 aspect-h-1 p-4'
        >
            <img
                src={url}
                alt={title}
            />
            <a href={url} target='_blank' className='hover:text-gray-500 text-gray-400 text-center'>{title}</a>
            <button
                onClick={descargarGif}
                className='hover:bg-gray-400 rounded-lg transition-all'>
                Descargar</button>
            <div className='flex gap-4 justify-end items-center'>
                <p className='hidden lg:flex'>Quieres compartir?</p>
                <SocialMedia
                    url={url}
                    title={title}
                />
            </div>
        </div>

    )
}

// Añadir proptypes: title y url -> Obligatorio

GIfItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

// Evaluar el snapshot
// Path: src\components\GIfItem.jsx
// Compare this snippet from tests\components\GIfItem.test.jsx:
//

