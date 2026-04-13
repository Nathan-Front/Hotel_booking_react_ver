import TwinBedSingle from "./roomReserve-components/twinBedSingle.jsx";
import TwinBedFull from "./roomReserve-components/twinBedFull.jsx";
import DoubleBed from "./roomReserve-components/doubleBed.jsx";
function RoomReserve() {
  return (
    <>
      <TwinBedSingle />
      <TwinBedFull />
      <DoubleBed />
    </>
  );
}

export default RoomReserve;
