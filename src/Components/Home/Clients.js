import React from "react";
import { Container } from "../Base/Container.style";
import { ClientsContainer, ClientsBox, Client } from "./Clients.style";
export default function Clients() {
  const clientsLogos = [
    { photoURL: "./imgs/logo-1.png" },
    { photoURL: "./imgs/logo-2.png" },
    { photoURL: "./imgs/logo-3.png" },
    { photoURL: "./imgs/logo-4.png" },
    { photoURL: "./imgs/logo-5.png" },
  ];
  return (
    <ClientsContainer>
      <Container>
        <ClientsBox>
          {clientsLogos.map((client, index) => (
            <Client key={index}>
              <img src={client.photoURL} alt={`client-${index}`} />
            </Client>
          ))}
        </ClientsBox>
      </Container>
    </ClientsContainer>
  );
}
