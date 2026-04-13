import TwinBedSingle from "./roomReserve-components/twinBedSingle.jsx";
import TwinBedFull from "./roomReserve-components/twinBedFull.jsx";
import DoubleBed from "./roomReserve-components/doubleBed.jsx";
import QueenBed from "./roomReserve-components/queenBed.jsx";
import KingBed from "./roomReserve-components/kingBed.jsx";
import FamilyBed from "./roomReserve-components/familyBed.jsx";
function RoomReserve() {
  return (
    <>
      <TwinBedSingle />
      <TwinBedFull />
      <DoubleBed />
      <QueenBed />
      <KingBed />
      <FamilyBed />
    </>
  );
}

export default RoomReserve;
