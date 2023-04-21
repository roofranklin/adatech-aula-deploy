import { useTask } from "../../context/task.context";
import { StyledInput } from "../../screens/Listview/Listview.styles";

const SearchTerm = () => {
  const { searchTerm, setSearchTerm } = useTask();

  return (
    <>
      <StyledInput
        placeholder="Search tasks"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
    </>
  );
};

export { SearchTerm };
