import React from 'react';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Sobre nós</h2>
        <p className="mt-5">
          Aplicativo para encontrar profissionais qualificados na área de saúde emocional.
        </p>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Links importante</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="#">Termos &amp; Condições</a>
          </li>
          <li>
            <a href="#">Política de Privacidade</a>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Social Media</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="#">Instagram</a>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">Facebook</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
