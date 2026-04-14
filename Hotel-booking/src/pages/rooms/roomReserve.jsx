import { Suspense, lazy } from "react";
//Lazy imports instead of standard imports
const TwinBedSingle = lazy(
  () => import("./roomReserve-components/twinBedSingle.jsx"),
);
const TwinBedFull = lazy(
  () => import("./roomReserve-components/twinBedFull.jsx"),
);
const DoubleBed = lazy(() => import("./roomReserve-components/doubleBed.jsx"));
const QueenBed = lazy(() => import("./roomReserve-components/queenBed.jsx"));
const KingBed = lazy(() => import("./roomReserve-components/kingBed.jsx"));
const FamilyBed = lazy(() => import("./roomReserve-components/familyBed.jsx"));
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
function RoomReserve() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [hash]);
  return (
    <Suspense fallback={<div>Loading room details...</div>}>
      <TwinBedSingle />
      <TwinBedFull />
      <DoubleBed />
      <QueenBed />
      <KingBed />
      <FamilyBed />
    </Suspense>
  );
}

export default RoomReserve;
