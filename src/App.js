import { useState } from "react";
import { reqRepo } from "./services/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Form from "./components/Form";
import { Container } from "./components/Container";
import Item from "./components/Item";
import { List } from "./components/List";

function App() {
  const [repos, setRepos] = useState([]);
  const [errorReq, setErrorReq] = useState(false);
  const [errorID, setErrorID] = useState(false);

  const schema = yup.object().shape({
    end: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    reValidateMode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const handleRepo = (data) => {
    setErrorID(false);
    setErrorReq(false);

    reqRepo
      .get(`/${data.end}`)
      .then((res) => {
        if (repos.some((repo) => repo.id === res.data.id)) {
          setErrorID(true);
          setErrorReq(false);
        } else {
          setRepos([...repos, res.data]);
          setErrorID(false);
          setErrorReq(false);
          reset();
        }
      })
      .catch(() => {
        setErrorID(false);
        setErrorReq(true);
      });
  };

  return (
    <Container>
      <Form
        register={register}
        handleSubmit={handleSubmit}
        handleRepo={handleRepo}
        errors={errors}
        errorID={errorID}
        errorReq={errorReq}
      />
      <List>
        {repos?.map((repo) => {
          return (
            <Item
              key={repo.id}
              titulo={repo.full_name}
              descricao={
                repo.description
                  ? repo.description
                  : "Repositório sem descrição"
              }
              linkRepo={repo.html_url}
              img={repo.owner.avatar_url}
            />
          );
        })}
      </List>
    </Container>
  );
}

export default App;
