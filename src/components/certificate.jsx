import React, { useState } from 'react';
import '../assets/style/certificate.css';

const certificates = [
  {
    id: 1,
    title: 'Angular Basics',
    image: '/certificates/cert1.png',
    isPDF: false,
  },
  {
    id: 2,
    title: 'Introduction to CISSP',
    image: '/certificates/cert2.png',
    isPDF: false,
  },
  {
    id: 3,
    title: 'CISSP Security Assessment',
    image: '/certificates/cert3.png',
    isPDF: false,
  },
  {
    id: 4,
    title: 'Cloud Security',
    image: '/certificates/cert4.png',
    isPDF: false,
  },
  {
    id: 5,
    title: 'Cyber Security',
    image: '/certificates/cert5.png',
    isPDF: false,
  },
  {
    id: 6,
    title: 'Front End Development',
    image: '/certificates/cert6.png',
    isPDF: false,
  },
  {
    id: 7,
    title: 'React JS',
    image: '/certificates/cert7.png',
    isPDF: false,
  },
  {
    id: 8,
    title: 'Ethical Hacking 101',
    image: '/certificates/cert8.png',
    isPDF: false,
  },
  {
    id: 9,
    title: 'Responsive Web Design',
    image: '/certificates/cert9.png',
    isPDF: false,
  },
  {
    id: 10,
    title: 'JS Algorithms & Data Structures',
    image: '/certificates/cert10.png',
    isPDF: false,
  },
 
];

const Certificate = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="certificate-page">
      <div className="certificate-container">
        <h1 className="certificate-title">My Certificates</h1>
        <div className="certificate-grid">
          {certificates.map((cert) => (
            <div className="certificate-card" key={cert.id}>
              {cert.isPDF ? (
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-pdf-link"
                >
                  <div className="certificate-pdf-thumbnail">
                    <span role="img" aria-label="pdf">📄</span>
                  </div>
                  <div className="certificate-caption">{cert.title}</div>
                </a>
              ) : (
                <>
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="certificate-image"
                    onClick={() => openModal(cert.image)}
                  />
                  <div className="certificate-caption">{cert.title}</div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="modal-close" onClick={closeModal}>&times;</span>
              <img src={selectedImage} alt="Certificate Preview" className="modal-image" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Certificate;
