import React from 'react';
import './App.css'; // Importing the Gallery CSS for styling

const templates = [
  { name: 'استعلام', path: './src/JJJ.docx' },
  { name: 'مکتوب', path: './src/KKK.docx' },
  { name: 'درخواست', path: 'Asdf.docx' }
];

export function downloadTemplate(path) {
  fetch(path)
    .then(response => response.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = path.split('/').pop();
      document.body.appendChild(link);
      link.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(link);
    })
    .catch(error => console.error('Error downloading file:', error));
}



const GallerySection = () => {


  return (
      <section id="templates" className="templates-section gallery-section">

      <h1>د فارمټونو بانک ته ښه راغلاست</h1>
      <p className='ptag'>دلته تاسو کولای سی هر ډول رسمی استعلام درخواست مکتوب او داسی نور رسمی فارمټونه تر لاسه کړی</p>
      <div className="gallery-grid gallery-item-container">


        {templates.map((template, index) => (
            <div key={index} className="gallery-item gallery-card">

            <img 
              src={template.path === 'jjj.docx' ? '/template-thumbnails/default.jpg' : `/template-thumbnails/template${index+1}.jpg`} 
              alt={template.name} 
            />
            <h3>{template.name}</h3>
            <button
              className="template-button"
              onClick={() => downloadTemplate(template.path)}
            >
              ډاونلوډ
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};


export default GallerySection;
