import React from "react";
import { withRoomConsumer } from "../../globalState/contexts/RoomsProvider";
import { Loading } from "../layout/Loading";
import { FilterContainer } from "./filterbar/FilterContainer";
import { RoomList } from "./filterbar/RoomList";
const RoomsContainer = ({ context }) => {
  if (context.loading) {
    return <Loading />;
  }
  return (
    <div>
      <FilterContainer rooms={context.rooms} />
      <RoomList rooms={context.sortedRooms} />
    </div>
  );
};
export default withRoomConsumer(RoomsContainer);
// import React from "react";
// import { FilterContainer } from "./filterbar/FilterContainer";
// import { RoomList } from "./filterbar/RoomList";
// import { RoomsConsumer } from "../../globalState/contexts/RoomsProvider";
// import { Loading } from "../layout/Loading";
// export const RoomsContainer = () => {
//   return (
//     <RoomsConsumer>
//       {value => {
//         console.log(value);
//         if (value.loading) {
//           return <Loading />;
//         }
//         return (
//           <div>
//             <FilterContainer rooms={value.rooms} />
//             <RoomList rooms={value.sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomsConsumer>
//   );
// };
