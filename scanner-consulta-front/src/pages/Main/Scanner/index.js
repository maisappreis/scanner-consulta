import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Quagga from "quagga";

import { validateIsbn } from "../../../services/books";

import { Video, Container, ScanMarker } from "./styles";

export default function Scanner({ onScan }) {
  let scannerAttempts = 0;

  const onDetected = result => {
    Quagga.offDetected(onDetected);

    let isbn = result.codeResult.code;

    if (validateIsbn(isbn)) {
      console.log("onScan: ", isbn);
      onScan(isbn);
      return;
    } else {
      if (scannerAttempts >= 5) {
        alert(
          "Não é possível ler o código do livro, por favor, tente novamente"
        );
      }
    }

    scannerAttempts += 1;
    Quagga.onDetected(onDetected);
  };

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      Quagga.init(
        {
          inputStream: {
            name: "Live",
            type: "LiveStream",
            target: document.querySelector("#video"),
            constraints: {
              facingMode: "environment"
            }
          },
          numOfWorkers: 1,
          locate: true,
          decoder: {
            readers: ["ean_reader"]
          }
        },
        err => {
          if (err) {
            console.error(err);
            alert(
              "Erro ao abrir a câmera do dispositivo, por favor, dê permissão para utilização."
            );
            return;
          }

          Quagga.start();
        }
      );

      Quagga.onDetected(onDetected);
    }

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Video id="video" />
      <Container>
        <ScanMarker>
          <img
            src="../../../assets/images/scan-mark.svg"
            alt="Marca do Scanner"
            width="260"
            height="260"
          />
          <p className="label">Aponte para o código de barras do livro</p>
        </ScanMarker>
        <img
          className="logo"
          src="../../../assets/images/logo.svg"
          alt="Dev Samurai"
          width="137"
          height="69"
        />
      </Container>
    </>
  );
}

Scanner.propTypes = {
  onScan: PropTypes.func
};