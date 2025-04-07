import { useDispatch, useSelector } from "react-redux";
import { addSeat } from "../../../redux/reducers/orderTicket";


export const SeatComponent = ({ col, row }) => {
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.orderTicket.orders);
    const seatId = `${col}${row}`;
    return (
      <input
        type="checkbox"
        onChange={() => dispatch(addSeat(seatId))}
        id={seatId}
        title={seatId}
        checked={orders.includes(seatId)}
        className="h-3.5 w-3.5 appearance-none bg-(--secondary-color) rounded-[5px] checked:bg-(--primary-color) md:w-6.5 md:h-6.5"
      />
    );
  };