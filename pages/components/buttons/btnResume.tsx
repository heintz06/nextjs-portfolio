import React from 'react';

const BtnResume = () => {
    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = '/pdf/resume.pdf'; // Direct path, without process.env.PUBLIC_URL
        link.download = 'Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div>            
            <button 
                className='bg-gradient-to-r from-yellow-950 to-black text-white shadow-md font-bold py-2 px-4 rounded-3xl'
                onClick={downloadResume}
            >
                Download Resume
            </button>
        </div>
    );
}

export default BtnResume;
