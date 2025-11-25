
import { arr } from "../utils/mockData";
// jsut printing the whole array of object on UI using map method 

const Hooks = () => {

  return (
    <div>
      {arr.map((item, index) => {
        const { naam, age } = item;
        return (
          <>
            {/* console.log(item) */}

            <ul key={index}>
              {" "}
              {naam}
              {"   - >" + age}{" "}
            </ul>
          </>
        );
      })}
    </div>
  );
};

export default Hooks;
