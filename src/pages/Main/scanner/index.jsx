import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Quagga from 'quagga';

import { Container, Video, ScanMarker } from './styles';
import { validateIsbn } from '../../../services/books';

function Scanner({ onScan }) {
  let scannerAttempts = 0;

  const onDetected = result => {
    Quagga.offDetected(onDetected);

    const isbn = result.codeResult.code;

    // if isbn valido?
    // consultar a API de livros
    // else
    // tentar mais uma vez (limite 5)

    if (validateIsbn(isbn)) {
      //alert(`ISBN válido: ${isbn}`);
      onScan(isbn);
      return;
    } else {
      if (scannerAttempts >= 5) {
        alert('Não é possível ler o código do livro.'
        );
      }
    }
    scannerAttempts++;
    Quagga.onDetected(onDetected);
  };

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      Quagga.init({
        inputStream: {
          name: 'Live',
          type: 'LiveStream',
          target: document.querySelector('#video'),
          constraints: {
            facinMode: 'environment'
          },
        },
        numOfWorkers: 1,
        locate: true,
        decoder: {
          readers: ['ean_reader']
        },
      },
        err => {
          if (err) {
            console.error(err);
            alert('Erro ao abrir a câmera do dispositivo, por favor dê permissão de uso.'
            );
            return;
          }
          Quagga.start();
        }
      )
    }
  }, []);
  return (
    <>
      <Video id="video" />
      <Container>
        <ScanMarker>
          <img 
            src="../../../assets/images/scan-mark.png"
            alt="Marca para leitura do código"
            width="260"
            height="260"
          />
          <p className="label">Aponte para o código de barras do livro</p>
        </ScanMarker>
        <img
            className="logo" 
            src="../../../assets/images/logo.png"
            alt="Logo"
            width="137"
            height="69"
          />
      </Container>
    </>
  );
}

Scanner.PropTypes = {
  onScan: PropTypes.func,
};

export default Scanner;


