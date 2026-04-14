export async function roomReserved(room, roomType, img) {
    const reserve = JSON.parse(localStorage.getItem("reservedRoom")) || [];
    if(!reserve) return;
    const dataToSave = {
        ...room,
        roomType: roomType,
        roomImage: img
    }
    reserve.push(dataToSave);
    localStorage.setItem("reservedRoom", JSON.stringify(reserve));
}