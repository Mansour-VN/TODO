import { GetAllTodosAPI } from "apis";
import { Button, Input, Loading } from "components";
import { useEffect } from "react";
import "./assets/styles/App.scss";

function App() {
  const GetAllData = () => {
    GetAllTodosAPI()
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("finally");
      });
  };

  useEffect(() => {
    GetAllData();
    console.log("test");
  }, []);

  return (
    <div className="App">
      {/* {GetAllData()} */}
      <Loading type="ripple" />
      <Button
        text={"+"}
        type={"warning"}
        size={"large"}
        Click={() => {
          console.log("button");
        }}
      />
      <Input
        type={"text"}
        holder={"Add todo..."}
        onChange={(e) => {}}
        value={""}
      />
    </div>
  );
}

export default App;
