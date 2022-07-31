import { SubmitButton } from "./Button";
import { InputText } from "./InputText";
import { PaperContainer } from "./PaperContainer";

export default function Form({
  register,
  handleSubmit,
  handleRepo,
  errors,
  errorID,
  errorReq,
}) {
  return (
    <PaperContainer
      elevation={5}
      sx={{
        borderRadius: "15px",
      }}
    >
      <form onSubmit={handleSubmit(handleRepo)}>
        <InputText
          id="standard-helperText"
          label="Proprietário/Repositório"
          error={!!errors.end || errorID || errorReq}
          helperText={
            !!errors.end
              ? errors.end.message
              : errorID
              ? "Tente um repositório diferente."
              : errorReq
              ? "Requisição falhou"
              : "Ex.: th-matheus/th-consulta_cep"
          }
          variant="standard"
          {...register("end")}
        />
        <SubmitButton type="submit">Procurar</SubmitButton>
      </form>
    </PaperContainer>
  );
}
