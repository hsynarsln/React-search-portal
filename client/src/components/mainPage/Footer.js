import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <img width={300} src='/images/coding.jpg' alt='coding' />
      <div className='description'>
        <p className='address'>
          <span>İletişim</span> Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. Kuluçka Merkezi D2 Blok No: 151/1F İç Kapı No:2B03 Esenler/İstanbul
        </p>
        <p className='email'>Email: bilgi@tesodev.com</p>
      </div>
      <div>
        <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.279747015307!2d28.888759415251815!3d41.019135279299675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb7abf29ba35%3A0xc98f44e9057adcde!2zVGVzb2RldiBZYXrEsWzEsW0gRG9uYW7EsW0gQmlsacWfaW0gQml5b21lZGlrYWwgS29uZ3JlIFR1cml6bSBFxJ9pdGltIERhbsSxxZ9tYW5sxLFrIExpbWl0ZWQgxZ5pcmtldGk!5e0!3m2!1sen!2str!4v1650484476123!5m2!1sen!2str' width='500' height='200' frameBorder='0' style={{ border: 0 }} allowFullScreen='' aria-hidden='false' tabIndex='0'></iframe>
      </div>
    </div>
  );
};

export default Footer;
