import { GenericBox } from "../GenericBox";
import { LinkComponent } from "../LinkComponent";
import { Li } from "./ItemList";

export default function Item({ titulo, descricao, linkRepo, img }) {
  return (
    <Li>
      <GenericBox
        width="90px"
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <GenericBox
          width="80px"
          height="80px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius="50%"
          overflow="hidden"
        >
          <img src={img} alt="titulo" />
        </GenericBox>
      </GenericBox>
      <GenericBox
        width="328px"
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
        gap="10px"
        overflow="hidden"
        whiteSpace="nowrap"
      >
        <h2>{titulo}</h2>
        <p>{descricao}</p>
      </GenericBox>
      <a href={linkRepo}>
        <LinkComponent />
      </a>
    </Li>
  );
}
